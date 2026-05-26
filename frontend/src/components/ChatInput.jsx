export default function ChatInput({ value, onChange, onSend, loading }) {
  return (
    <div className="border-t border-slate-200 px-6 py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="chat-input" className="sr-only">Send message</label>
        <input
          id="chat-input"
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder="Type your response or share an update..."
          className="min-h-[48px] flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          disabled={loading}
        />
        <button
          onClick={onSend}
          disabled={loading}
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  )
}
