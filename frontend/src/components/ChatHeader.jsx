export default function ChatHeader() {
  return (
    <div className="border-b border-slate-200 px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-900">FitFlow Gym</p>
          <p className="text-sm text-slate-500">WhatsApp integration · Online</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Live
        </div>
      </div>
    </div>
  )
}
