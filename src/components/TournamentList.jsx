import TournamentCard from './TournamentCard';

function TournamentList(props) {
  const filteredTournaments = props.filteredTournaments;
  const onOpenTournament = props.onOpenTournament;

  return (
    <div className="space-y-4">
      {filteredTournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
          active={false}
          onSelect={() => onOpenTournament(tournament.id)}
        />
      ))}
    </div>
  );
}

function TournamentListError(props) {
  const error = props.error;
  if (!error) return null;

  return (
    <div className="bg-red-500/20 border border-red-400/60 text-sm text-red-50 px-4 py-3 rounded-2xl">
      {error}
    </div>
  );
}

export { TournamentListError };
export default TournamentList;

