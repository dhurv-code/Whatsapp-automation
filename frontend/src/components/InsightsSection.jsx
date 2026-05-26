export default function InsightsSection({ insights }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Conversation insights</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">AI summary</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Updated</span>
      </div>
      <p className="mb-5 text-sm leading-7 text-slate-700">{insights.summary}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Sentiment</p>
          <p className="mt-2 font-semibold text-slate-900">{insights.sentiment}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Priority</p>
          <p className="mt-2 font-semibold text-slate-900">{insights.priority}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Next step</p>
          <p className="mt-2 font-semibold text-slate-900">Review and confirm booking</p>
        </div>
      </div>
    </div>
  )
}
