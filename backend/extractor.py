import google.generativeai as genai
import json
import os

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)


def extract_lead_info(user_message):

    prompt = f"""
    Extract lead information from the customer message.

    Return ONLY valid raw JSON.

    Do not use markdown.
    Do not explain anything.
    Do not add extra text.

    If information is missing,
    use empty strings.

    Customer Message:
    {user_message}

    Expected JSON format:

    {{
        "customer_name": "",
        "service_interest": "",
        "budget": "",
        "intent": ""
    }}
    """

    model = genai.GenerativeModel(
        "gemini-2.5-flash"
    )

    response = model.generate_content(
        prompt
    )

    text = response.text.strip()

    # Remove markdown if exists
    text = text.replace(
        "```json", ""
    ).replace(
        "```", ""
    ).strip()

    try:

        return json.loads(text)

    except Exception as e:

        print(
            "Lead Extraction Error:",
            e
        )

        return {}