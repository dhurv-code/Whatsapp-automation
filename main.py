from fastapi import FastAPI,Request
from fastapi.responses import PlainTextResponse
from dotenv import load_dotenv
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
    data= await request.json()
    print("webhook data:")
    print(data)

    return {"status":"received",
            "data":data}