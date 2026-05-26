function Badge({ text, active }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${active ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
      {text}
    </span>
  )
}

export default function StatusSection({ currentStatus, handoff, followUp }) {
  const statuses = ['new', 'contacted', 'qualified', 'booked', 'closed']

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Lead status</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-950">Conversion stage</h3>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {statuses.map(status => (
          <Badge key={status} text={status} active={status === currentStatus} />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Human support</p>
          <p className="mt-2 font-semibold text-slate-900">{handoff ? 'Required' : 'Not required'}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Follow-up needed</p>
          <p className="mt-2 font-semibold text-slate-900">{followUp ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  )
}
