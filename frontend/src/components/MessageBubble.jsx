export default function MessageBubble({ message }) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[78%] rounded-3xl border px-4 py-3 text-sm leading-6 ${isUser ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-900 border-slate-200'}`}>
        <p>{message.text}</p>
        <div className="mt-2 text-right text-[11px] uppercase tracking-[0.25em] text-slate-500">
          {message.role === 'user' ? 'You' : 'Assistant'} · {message.timestamp}
        </div>
      </div>
    </div>
  )
}
