function InfoTab(props) {
  const tournament = props.tournament;

  return (
    <div className="p-5 text-sm text-slate-700">
      <p className="mb-4">{tournament.description}</p>
    </div>
  );
}

export default InfoTab;
