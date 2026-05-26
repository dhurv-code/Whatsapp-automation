import google.generativeai as genai
import os

from dotenv import load_dotenv

from database import (
    get_conversation,
    get_business_prompt
)

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_reply(phone, business_id, user_message):

    try:

        history = get_conversation(phone)

        system_prompt = get_business_prompt(business_id)

        chat = model.start_chat(history=history)

        full_message = f"""
        Business Instructions:
        {system_prompt}

        Customer Message:
        {user_message}
        """
        response = chat.send_message(
            full_message
        )
        return response.text
    except Exception as e:
        print("Gemini Error:", e)
        return (
            "Sorry, something went wrong."
        )