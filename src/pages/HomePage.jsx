import TopHeader from '../components/TopHeader'
import SearchBar from '../components/SearchBar'
import SportsFilterList from '../components/SportsFilterList'
import TournamentListSection from '../components/TournamentListSection'

function HomePage(props) {
  const {
    loading,
    error,
    sportsFilters,
    selectedSport,
    onChangeSport,
    filteredTournaments,
    searchQuery,
    onChangeSearch,
    onOpenTournament,
  } = props

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

        <TournamentListSection
          loading={loading}
          error={error}
          filteredTournaments={filteredTournaments}
          onOpenTournament={onOpenTournament}
        />
      </div>
    </div>
  )
}

export default HomePage
