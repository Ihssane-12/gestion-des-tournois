function TournamentHeader(props) {
  const navigate = props.navigate;

  return (
    <header className="flex items-center justify-between px-4 mb-5">
      <button
        onClick={() => navigate(-1)}
        className="h-9 w-9 rounded-full bg-primary-light/30 flex items-center justify-center text-white shadow-soft"
      >
        <i className="fa-solid fa-arrow-left" />
      </button>
      <p className="text-sm font-medium">Tournament</p>
      <button className="h-9 w-9 rounded-full bg-primary-light/30 flex items-center justify-center text-white shadow-soft">
        <i className="fa-solid fa-share-nodes" />
      </button>
    </header>
  );
}

export default TournamentHeader;
