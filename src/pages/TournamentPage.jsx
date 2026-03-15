import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchTournaments } from '../data/tournamentDB'
import StatusBadge from '../components/StatusBadge'
import TabSystem from '../components/TabSystem'
import TournamentHeader from '../components/TournamentHeader'
import TournamentBadges from '../components/TournamentBadges'
import ParticipantListTab from '../components/ParticipantListTab'
import InfoTab from '../components/InfoTab'
import BracketTab from '../components/BracketTab'

function TournamentLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto pt-8 pb-24">
        <div className="mx-4 bg-white/10 rounded-3xl p-5 animate-pulse border border-white/10 shadow-soft" />
      </div>
    </div>
  );
}

function TournamentError(props) {
  const error = props.error;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto pt-8 pb-24">
        <div className="mx-4 bg-red-500/20 border border-red-400/60 text-sm text-red-50 px-4 py-3 rounded-2xl">
          {error}
        </div>
      </div>
    </div>
  );
}

function TournamentNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto pt-8 pb-24">
        <div className="mx-4 text-center text-sm text-slate-100 mt-10">Tournament not found.</div>
      </div>
    </div>
  );
}

function TournamentPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('participants')

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

  let tabContent = null;
  if (activeTab === 'info') {
    tabContent = <InfoTab tournament={tournament} />;
  } else if (activeTab === 'participants') {
    tabContent = <ParticipantListTab tournament={tournament} />;
  } else if (activeTab === 'bracket') {
    tabContent = <BracketTab />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-slate-900 text-slate-50">
      <div className="max-w-md mx-auto pt-8 pb-24">
        <TournamentHeader navigate={navigate} />

        <div className="mx-4 bg-white rounded-4xl shadow-soft text-slate-900 overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-primary-light to-sky-400 p-5 pb-6 text-white">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex gap-3">
                <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-medal" />
                </div>
                <div>
                  <p className="text-xs text-indigo-100 mb-1">{tournament.sport}</p>
                  <h2 className="text-lg font-semibold leading-snug">{tournament.title}</h2>
                </div>
              </div>
              <StatusBadge status={tournament.status} />
            </div>

            <TournamentBadges tournament={tournament} />
          </div>

          <TabSystem activeTab={activeTab} onChange={setActiveTab} />

          {tabContent}
        </div>
      </div>
    </div>
  );
}

export default TournamentPage
