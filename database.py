from pymongo import MongoClient
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(
    os.getenv("MONGO_URI")
)

db = client["whatsapp_automation"]

messages_collection = db["messages"]

business_collection = db["businesses"]

qualified_leads_collection = db[
    "qualified_leads"
]


def save_message(phone, role, message):

    data = {
        "phone": phone,
        "role": role,
        "message": message,
        "created_at": datetime.utcnow()
    }

    messages_collection.insert_one(data)


def get_conversation(phone):

    messages = messages_collection.find(
        {"phone": phone}
    ).sort("_id", 1)

    conversation = []

    for msg in messages:

        conversation.append({
            "role": msg["role"],
            "parts": [msg["message"]]
        })

    return conversation


def get_business_prompt(business_id):

    business = business_collection.find_one({
        "business_id": business_id
    })

    if business:
        return business["system_prompt"]

    return "You are a helpful assistant."


def save_qualified_lead(data):

    data["created_at"] = datetime.utcnow()

    data["status"] = "new"

    qualified_leads_collection.insert_one(data)