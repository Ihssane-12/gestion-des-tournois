import ParticipantRow from './ParticipantRow';

function ParticipantListTab(props) {
  const tournament = props.tournament;

  return (
    <div className="p-5">
      <h3 className="text-sm font-semibold text-slate-900 mb-3">
        Participants List ({tournament.participants.length})
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {tournament.participants.map((player) => (
          <ParticipantRow key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default ParticipantListTab;
