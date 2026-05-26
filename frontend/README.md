# WhatsApp Lead Automation Frontend

A clean React + Vite frontend for an AI-powered WhatsApp lead automation dashboard.

## Setup

1. Open a terminal in `frontend`
2. Run `npm install`
3. Run `npm run dev`

The app expects the backend to expose `/webhook` on the same host, or use the proxy configured in `vite.config.js` to forward requests to `http://127.0.0.1:8000`.

## Structure

- `src/App.jsx` — main dashboard layout
- `src/api/webhook.js` — Axios POST request wrapper
- `src/components` — reusable UI pieces
- `src/data/demo.js` — realistic demo lead and sample messages
- `src/index.css` — Tailwind base styles and subtle theme
