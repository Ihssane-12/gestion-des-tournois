import StatusBadge from './StatusBadge'

function ParticipantRow(props) {
  const player = props.player;

  let badgeStatus = 'Pending';
  let chipClass = 'bg-amber-50 text-amber-700';
  let dotClass = 'bg-amber-500';

  if (player.status === 'Confirmed') {
    badgeStatus = 'Confirmed';
    chipClass = 'bg-emerald-50 text-emerald-700';
    dotClass = 'bg-emerald-500';
  }

  let avatarElement = <div className="h-full w-full bg-gradient-to-tr from-amber-400 via-rose-400 to-fuchsia-500" />
  ;//ila makanch avatar ghadi iban  gradient avatar
  if (player.avatar) {
    avatarElement = (
      <img
        src={player.avatar}
        alt={player.name}
        className="h-full w-full object-cover"
      />
    );
  }

  let rankText = 'Participant';
  if (player.rank) {
    rankText = 'Seed ' + player.rank;
  }

  let finalChipClass = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium " + chipClass;
  //kanjam3O default  class + color class 
  let finalDotClass = "h-1.5 w-1.5 rounded-full " + dotClass;

  return (
    <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-3 py-2.5 border border-slate-100">
      <div className="h-9 w-9 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
        {avatarElement}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 truncate">{player.name}</p>
        <p className="text-[11px] text-slate-500 truncate">
          {rankText}
        </p>
      </div>
      <span className={finalChipClass}>
        <span className={finalDotClass} />
        {badgeStatus}
      </span>
    </div>
  )
}

export default ParticipantRow

