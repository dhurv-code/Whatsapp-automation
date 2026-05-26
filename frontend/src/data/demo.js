export const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    text: 'Hi Maya, I’m your lead assistant. I can summarize conversations, spot intent, and flag follow-ups while you handle the high-priority chats.',
    timestamp: '10:14 AM'
  },
  {
    id: 2,
    role: 'user',
    text: 'Hi, I need more information about the personal training program and pricing.',
    timestamp: '10:15 AM'
  },
  {
    id: 3,
    role: 'assistant',
    text: 'Sure, here is a quick summary: They are looking for a structured training plan, have a high intent, and may be ready to book if we offer a clear enrollment option.',
    timestamp: '10:15 AM'
  }
]

export const demoLead = {
  name: 'Maya Patel',
  phone: '+91 99999 99999',
  interest: 'Personal training program',
  intent: 'High',
  budget: '₹75,000 / year',
  status: 'contacted',
  handoff: true,
  followUp: true,
  insights: {
    summary: 'Interest is strong; follow up with availability and trial offer before closing.',
    sentiment: 'Positive',
    priority: 'High'
  }
}
