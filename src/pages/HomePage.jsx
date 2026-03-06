import TournamentCard from '../components/TournamentCard'

function TopHeader() {
  let imgClass = "h-full w-full object-cover";

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <p className="text-sm text-indigo-100">Good Morning,</p>
        <h1 className="text-2xl font-semibold tracking-tight">Samuel Walker!</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="h-10 w-10 rounded-full bg-primary-light/40 flex items-center justify-center text-white shadow-soft">
          <span className="sr-only">Notifications</span>
          <i className="fa-solid fa-bell text-sm" />
        </button>
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/40">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className={imgClass}
          />
        </div>
      </div>
    </header>
  );
}

function SearchBar(props) {
  const searchQuery = props.searchQuery;
  const onChangeSearch = props.onChangeSearch;

  return (
    <div className="mb-6">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 text-sm">
          <i className="fa-solid fa-magnifying-glass" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-sm placeholder:text-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
        />
      </div>
    </div>
  );
}

function SportsFilterList(props) {
  const sportsFilters = props.sportsFilters;
  const selectedSport = props.selectedSport;
  const onChangeSport = props.onChangeSport;

  return (
    <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
      {sportsFilters.map((sport) => {
        let btnClass = "flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border ";
        if (selectedSport === sport) {
          btnClass = btnClass + "bg-white text-primary-dark border-white shadow-soft";
        } else {
          btnClass = btnClass + "bg-white/10 text-indigo-100 border-white/20";
        }

        return (
          <button
            key={sport}
            onClick={() => onChangeSport(sport)}
            className={btnClass}
          >
            {sport}
          </button>
        );
      })}
    </div>
  );
}

function TournamentSkeletonItem() {
  return (
    <div className="bg-white/10 rounded-3xl p-4 animate-pulse shadow-soft border border-white/10">
      <div className="h-4 w-24 bg-white/30 rounded mb-3" />
      <div className="h-7 w-56 bg-white/40 rounded mb-2" />
      <div className="h-3 w-64 bg-white/30 rounded mb-4" />
      <div className="h-3 w-40 bg-white/20 rounded mb-2" />
      <div className="h-3 w-32 bg-white/20 rounded" />
    </div>
  );
}

function TournamentSkeleton() {
  return (
    <div className="space-y-4">
      <TournamentSkeletonItem />
      <TournamentSkeletonItem />
    </div>
  );
}

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

function HomePage({
  loading,
  error,
  sportsFilters,
  selectedSport,
  onChangeSport,
  filteredTournaments,
  searchQuery,
  onChangeSearch,
  onOpenTournament,
}) {
  let content = null;
  if (loading) {
    content = <TournamentSkeleton />;
  } else if (error) {
    content = <TournamentListError error={error} />;
  } else {
    content = (
      <TournamentList
        filteredTournaments={filteredTournaments}
        onOpenTournament={onOpenTournament}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto px-4 pt-8 pb-24">
        <TopHeader />

        <SearchBar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />

        <SportsFilterList
          sportsFilters={sportsFilters}
          selectedSport={selectedSport}
          onChangeSport={onChangeSport}
        />

        {content}
      </div>
    </div>
  )
}

export default HomePage

