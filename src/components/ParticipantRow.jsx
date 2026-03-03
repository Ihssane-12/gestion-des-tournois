import StatusBadge from './StatusBadge'

const PLAYER_STATUS_STYLES = {
  Confirmed: {
    badgeStatus: 'Confirmed',
    chipClass: 'bg-emerald-50 text-emerald-700',
  },
  Pending: {
    badgeStatus: 'Pending',
    chipClass: 'bg-amber-50 text-amber-700',
  },
}

function ParticipantRow({ player }) {
  const style = PLAYER_STATUS_STYLES[player.status] ?? PLAYER_STATUS_STYLES.Pending

  return (
    <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-3 py-2.5 border border-slate-100">
      <div className="h-9 w-9 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
        {player.avatar ? (
          <img
            src={player.avatar}
            alt={player.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-tr from-amber-400 via-rose-400 to-fuchsia-500" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 truncate">{player.name}</p>
        <p className="text-[11px] text-slate-500 truncate">
          {player.rank ? `Seed ${player.rank}` : 'Participant'}
        </p>
      </div>
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium ${style.chipClass}`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            player.status === 'Confirmed' ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
        {style.badgeStatus}
      </span>
    </div>
  )
}

export default ParticipantRow

