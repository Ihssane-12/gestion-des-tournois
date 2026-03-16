import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchTournaments } from '../data/tournamentDB'
import { filterBySport } from '../services/dataFilter'
import { getDisplayTournament } from '../services/displayTournament'
import { useUser } from '../context/UserContext'
import HomePage from '../pages/HomePage'

const SPORTS_FILTER_ALL = 'All'

function matchTournamentTitle(tournament, query) {
  const titleLower = tournament.title.toLowerCase();
  return titleLower.includes(query);
}

function HomePageContainer() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSport, setSelectedSport] = useState(SPORTS_FILTER_ALL)
  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()
  const { userProfile, isRegistered } = useUser()

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

  const displayFilteredTournaments = useMemo(() => {
    return filteredTournaments.map((t) =>
      getDisplayTournament(t, userProfile, isRegistered(t.id))
    )
  }, [filteredTournaments, userProfile, isRegistered])

  return (
    <HomePage
      loading={loading}
      error={error}
      sportsFilters={sportsFilters}
      selectedSport={selectedSport}
      onChangeSport={setSelectedSport}
      filteredTournaments={displayFilteredTournaments}
      searchQuery={searchQuery}
      onChangeSearch={setSearchQuery}
      onOpenTournament={(id) => navigate(`/tournament/${id}`)}
    />
  )
}

export default HomePageContainer
