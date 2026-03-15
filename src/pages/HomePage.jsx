import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchTournaments } from '../data/tournamentDB'
import { filterBySport } from '../services/dataFilter'
import TopHeader from '../components/TopHeader'
import SearchBar from '../components/SearchBar'
import SportsFilterList from '../components/SportsFilterList'
import TournamentSkeleton from '../components/TournamentSkeleton'
import TournamentList, { TournamentListError } from '../components/TournamentList'

const SPORTS_FILTER_ALL = 'All'

function matchTournamentTitle(tournament, query) {
  const titleLower = tournament.title.toLowerCase();
  return titleLower.includes(query);
}

function HomePage() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSport, setSelectedSport] = useState(SPORTS_FILTER_ALL)
  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchTournaments()
        setTournaments(data)
      } catch (e) {
        setError('Impossible de charger les tournois.')
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const sportsFilters = useMemo(() => {
    const sports = new Set(tournaments.map((t) => t.sport));
    return [SPORTS_FILTER_ALL, ...Array.from(sports)];
  }, [tournaments]);

  const filteredTournaments = useMemo(() => {
    let bySport = filterBySport(
      tournaments,
      selectedSport === SPORTS_FILTER_ALL ? null : selectedSport
    );
    let filtered = bySport;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = bySport.filter((t) => matchTournamentTitle(t, q));
    }
    return filtered;
  }, [tournaments, selectedSport, searchQuery]);

  let content = null;
  if (loading) {
    content = <TournamentSkeleton />;
  } else if (error) {
    content = <TournamentListError error={error} />;
  } else {
    content = (
      <TournamentList
        filteredTournaments={filteredTournaments}
        onOpenTournament={(id) => navigate(`/tournament/${id}`)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto px-4 pt-8 pb-24">
        <TopHeader />

        <SearchBar searchQuery={searchQuery} onChangeSearch={setSearchQuery} />

        <SportsFilterList
          sportsFilters={sportsFilters}
          selectedSport={selectedSport}
          onChangeSport={setSelectedSport}
        />

        {content}
      </div>
    </div>
  )
}

export default HomePage
