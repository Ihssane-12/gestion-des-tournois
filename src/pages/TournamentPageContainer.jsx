import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTournaments } from '../data/tournamentDB'
import { TournamentLoading, TournamentError, TournamentNotFound } from '../components/TournamentPageStates'
import TournamentPage from './TournamentPage'

function TournamentPageContainer() {
  const { id } = useParams()
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  const tournament = tournaments.find((t) => String(t.id) === id)

  if (loading) {
    return <TournamentLoading />;
  }

  if (error) {
    return <TournamentError error={error} />;
  }

  if (!tournament) {
    return <TournamentNotFound />;
  }

  return <TournamentPage tournament={tournament} />;
}

export default TournamentPageContainer
