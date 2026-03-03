import StatusBadge from './StatusBadge'

function TournamentCard({ tournament, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left bg-white rounded-3xl p-4 md:p-5 border transition-all ${
        active
          ? 'border-white/90 shadow-soft'
          : 'border-white/70 shadow-sm hover:border-white hover:shadow-soft'
      }`}
    >
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center text-xl text-primary-dark">
            🏆
          </div>
          <div>
            <p className="text-[11px] text-slate-500 mb-1">{tournament.sport}</p>
            <h2 className="text-base md:text-lg font-semibold leading-snug text-slate-900">
              {tournament.title}
            </h2>
          </div>
        </div>
        <StatusBadge status={tournament.status} />
      </div>

      <p className="text-xs text-slate-600 mb-4 line-clamp-2">{tournament.description}</p>

      <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
        <div className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
          <span>👥</span>
          <span>{tournament.participantsCount}</span>
          <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-slate-400" />
          <span>{tournament.type}</span>
        </div>
        <div className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
          <span>🔁</span>
          <span>{tournament.format}</span>
        </div>
        <div className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
          <span>📅</span>
          <span>{tournament.date}</span>
        </div>
        <div className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
          <span>📍</span>
          <span>{tournament.location}</span>
        </div>
      </div>
    </button>
  )
}

export default TournamentCard

