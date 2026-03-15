import TopHeader from '../components/TopHeader'
import SearchBar from '../components/SearchBar'
import SportsFilterList from '../components/SportsFilterList'
import TournamentSkeleton from '../components/TournamentSkeleton'
import TournamentList, { TournamentListError } from '../components/TournamentList'

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

