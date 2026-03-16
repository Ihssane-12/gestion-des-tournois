import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTournaments } from '../data/tournamentDB'
import { TournamentLoading, TournamentError, TournamentNotFound } from './TournamentPageStates'
import TournamentPage from '../pages/TournamentPage'
import { useUser } from '../context/UserContext'
import { getDisplayTournament } from '../services/displayTournament'

function TournamentPageContainer() {
  const { id } = useParams()
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
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

  const baseTournament = tournaments.find((t) => String(t.id) === id)

  if (loading) {
    return <TournamentLoading />;
  }

  if (error) {
    return <TournamentError error={error} />;
  }

  if (!baseTournament) {
    return <TournamentNotFound />;
  }

  const tournament = getDisplayTournament(baseTournament, userProfile, isRegistered(baseTournament.id))

  return <TournamentPage tournament={tournament} />;
}

export default TournamentPageContainer
