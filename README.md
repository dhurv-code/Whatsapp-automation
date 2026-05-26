# WhatsApp Lead Automation for Local Businesses

An AI-powered WhatsApp lead automation system designed for local businesses such as gyms, salons, clinics, and service providers.

This project helps businesses automate customer conversations, capture leads, qualify prospects, and manage follow-ups using AI-powered workflows.

---

## Features

### AI-Powered WhatsApp Conversations

* Automated customer replies
* Human-like short responses
* Business-specific conversation behavior
* Context-aware conversation memory

### Lead Management System

* Automatic lead capture
* Structured lead extraction
* Lead qualification pipeline
* Follow-up tracking

### Multi-Business Support

* Custom prompts for different businesses
* Separate business identities
* Scalable architecture for multiple clients

### Human Handoff Detection

* Detects when human support is required
* Escalates complex or sensitive conversations

### AI Conversation Memory

* Stores customer conversation history
* Provides contextual replies using previous interactions

### CRM-like Workflow

* Lead statuses:

  * new
  * contacted
  * qualified
  * booked
  * closed

---

## Tech Stack

### Backend

* FastAPI
* Python
* MongoDB Atlas
* Gemini API

### Frontend

* React
* Tailwind CSS
* Axios

### Deployment

* Render

---

## Project Architecture

```bash
Customer Message
       ↓
FastAPI Backend
       ↓
Conversation Memory
       ↓
Business Prompt System
       ↓
Gemini AI
       ↓
Lead Extraction
       ↓
MongoDB Storage
       ↓
AI Response
```

---

## Current Capabilities

* AI-generated customer replies
* Persistent conversation memory
* Business-specific AI behavior
* Lead extraction from messages
* Follow-up tagging
* Human escalation logic
* Modern dashboard interface

---

## Example Use Cases

### Gym Automation

* Membership inquiries
* Trial booking
* Pricing follow-ups

### Salon Automation

* Appointment booking
* Service recommendations
* Customer follow-ups

### Clinic Automation

* Appointment assistance
* Basic FAQ handling
* Human escalation support

---

## Future Improvements

* Real WhatsApp Cloud API integration
* RAG-based business knowledge retrieval
* Automated follow-up scheduling
* Admin analytics dashboard
* Multi-agent workflow support
* Voice message handling

---

## Installation

### Clone Repository

```bash
git clone <your-repo-url>
cd whatsapp-lead-automation
```

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### Start Backend

```bash
uvicorn main:app --reload
```

### Start Frontend

```bash
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
MONGO_URI=your_mongodb_uri
VERIFY_TOKEN=your_verify_token
```

---

## Project Goal

The goal of this project is to build a practical AI-powered lead automation system that helps local businesses respond faster, manage customer conversations efficiently, and improve lead conversion workflows.

---

## Author

Dhurv Gupta
