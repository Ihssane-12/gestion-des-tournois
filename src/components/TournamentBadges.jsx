function TournamentBadges(props) {
  const tournament = props.tournament;

  return (
    <div className="flex flex-wrap gap-3 text-xs text-indigo-100">
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-user-group text-[11px]" />
        <span>
          {tournament.participantsCount}{' '}
          <span className="text-indigo-50">Participants</span>
        </span>
        <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-indigo-100/80" />
        <span>{tournament.type}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-diagram-project text-[11px]" />
        <span>{tournament.format}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-regular fa-calendar text-[11px]" />
        <span>{tournament.date}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-location-dot text-[11px]" />
        <span>{tournament.location}</span>
      </div>
    </div>
  );
}

export default TournamentBadges;
