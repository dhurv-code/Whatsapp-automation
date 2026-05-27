from fastapi import FastAPI, Request
from fastapi.responses import PlainTextResponse
from dotenv import load_dotenv

from ai import generate_reply
from database import (
    save_message,
    save_qualified_lead
)
from extractor import extract_lead_info
from utils import needs_human

import os

load_dotenv()

app = FastAPI()

VERIFY_TOKEN = os.getenv("VERIFY_TOKEN")


@app.get("/")
def home():
    return {"message": "WhatsApp AI Automation Running"}


@app.get("/webhook")
async def verify_webhook(request: Request):

    mode = request.query_params.get("hub.mode")
    token = request.query_params.get("hub.verify_token")
    challenge = request.query_params.get("hub.challenge")

    if mode == "subscribe" and token == VERIFY_TOKEN:
        return PlainTextResponse(challenge)

    return {"error": "Verification failed"}


@app.post("/webhook")
async def webhook(request: Request):

    data = await request.json()
    phone = data.get("phone", "unknown")
    business_id = data.get("business_id","gym_001")
    user_message = data.get("message")

    save_message(phone, "user", user_message)

    human_needed = needs_human(user_message)
    if human_needed:

        ai_reply = ("A team member will contact you shortly.")
    else:
        ai_reply = generate_reply(phone,business_id,user_message)

    save_message(phone, "model", ai_reply)

    lead_data = extract_lead_info(user_message)

    lead_data["phone"] = phone
    lead_data["business_id"] = business_id
    lead_data["follow_up_needed"] = True

    save_qualified_lead(lead_data)

    return {
        "user_message": user_message,
        "ai_reply": ai_reply
    }