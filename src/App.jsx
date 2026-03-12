import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { fetchTournaments } from './data/tournamentDB'
import { filterBySport } from './services/dataFilter'
import HomePage from './pages/HomePage'
import TournamentPage from './pages/TournamentPage'

const SPORTS_FILTER_ALL = 'All'

function matchTournamentTitle(tournament, query) {
  const titleLower = tournament.title.toLowerCase();//bach search ikon case insensitive ya3ni kay9bal majuscul miniscil kaychofhom nafs lhaja
  return titleLower.includes(query);
}

function App() {
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
    const sports = new Set(tournaments.map((t) => t.sport));//kayjib sports sans repitition
    return [SPORTS_FILTER_ALL, ...Array.from(sports)];//kanraj3o array fiha les sports li 3ndi
  }, [tournaments]);//hna depence kaykon 3ndi 3la hssab tournaments
   
  //hna l filter ghadi ikon 3ndna 3la hssab sport 
  const filteredTournaments = useMemo(() => {
    let bySport = filterBySport(
      tournaments,
      selectedSport === SPORTS_FILTER_ALL ? null : selectedSport //ila kan selectedSport = All kan3tiwh null  bach iraja3 tous les tournaments.
    );

    let filtered = bySport; //kanbdaw bnatija dyal sport filter
    if (searchQuery.trim()) { //kanchof search wach fih chi haja   
      const q = searchQuery.toLowerCase();
      filtered = bySport.filter((t) => matchTournamentTitle(t, q));
    }
    return filtered;
  }, [tournaments, selectedSport, searchQuery]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            loading={loading}
            error={error}
            sportsFilters={sportsFilters}
            selectedSport={selectedSport}
            onChangeSport={setSelectedSport}
            filteredTournaments={filteredTournaments}
            searchQuery={searchQuery}
            onChangeSearch={setSearchQuery}
            onOpenTournament={(id) => navigate(`/tournament/${id}`)}
          />
        }
      />
      <Route
        path="/tournament/:id"
        element={<TournamentPage tournaments={tournaments} loading={loading} error={error} />}
      />
    </Routes>
  )
}

export default App
