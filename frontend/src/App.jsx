import { useEffect, useRef, useState } from 'react'
import ChatHeader from './components/ChatHeader'
import MessageBubble from './components/MessageBubble'
import ChatInput from './components/ChatInput'
import LeadDetails from './components/LeadDetails'
import StatusSection from './components/StatusSection'
import InsightsSection from './components/InsightsSection'
import { sendWebhookMessage } from './api/webhook'
import { demoLead, initialMessages } from './data/demo'

function App() {
  const [chatHistory, setChatHistory] = useState(initialMessages)
  const [messageText, setMessageText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [leadData, setLeadData] = useState(demoLead)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [chatHistory, isSending])

  const handleSend = async () => {
    const trimmed = messageText.trim()
    if (!trimmed) return

    const newHistory = [
      ...chatHistory,
      { id: Date.now(), role: 'user', text: trimmed, timestamp: 'Now' }
    ]
    setChatHistory(newHistory)
    setMessageText('')
    setIsSending(true)

    try {
      const response = await sendWebhookMessage(trimmed)
      const assistantText = response.data?.ai_reply || response.data?.reply || response.data?.message || 'Thanks for sharing. I will follow up with the lead details shortly.'
      const summary = response.data?.summary || leadData.insights.summary
      const sentiment = response.data?.sentiment || leadData.insights.sentiment

      setChatHistory(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', text: assistantText, timestamp: 'Now' }
      ])
      setLeadData(prev => ({
        ...prev,
        insights: {
          ...prev.insights,
          summary,
          sentiment
        }
      }))
    } catch (error) {
      setChatHistory(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', text: 'Sorry, the automation service is unavailable right now. Please try again in a moment.', timestamp: 'Now' }
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">AI-powered WhatsApp lead automation</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Lead assistant console</h1>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
            <p className="text-sm text-slate-500">Connected backend</p>
            <p className="mt-1 text-sm font-medium text-slate-900">/webhook · POST</p>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_1.2fr]">
          <section className="flex min-h-[720px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
            <ChatHeader />
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300">
              <div className="space-y-4">
                {chatHistory.map(message => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {isSending && (
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-slate-100" />
                    <div className="max-w-[78%] rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                        Typing...
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <ChatInput
              value={messageText}
              onChange={setMessageText}
              onSend={handleSend}
              loading={isSending}
            />
          </section>

          <aside className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <LeadDetails lead={leadData} />
            <StatusSection currentStatus={leadData.status} handoff={leadData.handoff} followUp={leadData.followUp} />
            <InsightsSection insights={leadData.insights} />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default App
