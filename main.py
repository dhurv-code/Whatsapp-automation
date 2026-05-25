from fastapi import FastAPI,Request

app = FastAPI()

@app.get("/")
def home():
    return {"message": "WhatsApp AI Automation Running"}

@app.post("/webhook")
async def webhook(request: Request):
    data= await request.json()
    print("webhook data:")
    print(data)

    return {"status":"received",
            "data":data}