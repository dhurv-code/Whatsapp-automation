function DetailRow({ label, value }) {
  return (
    <div className="grid gap-1 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  )
}

export default function LeadDetails({ lead }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Lead information</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">Customer details</h2>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Priority</span>
      </div>
      <div className="space-y-4">
        <DetailRow label="Customer" value={lead.name} />
        <DetailRow label="Phone" value={lead.phone} />
        <DetailRow label="Service interest" value={lead.interest} />
        <DetailRow label="Intent" value={lead.intent} />
        <DetailRow label="Budget" value={lead.budget} />
      </div>
    </div>
  )
}
