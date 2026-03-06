import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import TabSystem from '../components/TabSystem'
import ParticipantRow from '../components/ParticipantRow'

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

function TournamentBadges(props) {
  const tournament = props.tournament;

  return (
    <div className="flex flex-wrap gap-3 text-xs text-indigo-100">
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-user-group text-[11px]" />
        <span>
          {tournament.participantsCount}{' '}
          <span className="text-indigo-50">Participants</span>
        </span>
        <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-indigo-100/80" />
        <span>{tournament.type}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-diagram-project text-[11px]" />
        <span>{tournament.format}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-regular fa-calendar text-[11px]" />
        <span>{tournament.date}</span>
      </div>
      <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
        <i className="fa-solid fa-location-dot text-[11px]" />
        <span>{tournament.location}</span>
      </div>
    </div>
  );
}

function ParticipantListTab(props) {
  const tournament = props.tournament;

  return (
    <div className="p-5">
      <h3 className="text-sm font-semibold text-slate-900 mb-3">
        Participants List ({tournament.participants.length})
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {tournament.participants.map((player) => (
          <ParticipantRow key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

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

function InfoTab(props) {
  const tournament = props.tournament;

  return (
    <div className="p-5 text-sm text-slate-700">
      <p className="mb-4">{tournament.description}</p>
    </div>
  );
}

function BracketTab() {
  return (
    <div className="p-5 text-sm text-slate-700">
      <p>Bracket visualization coming soon.</p>
    </div>
  );
}

function TournamentPage({ tournaments, loading, error }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('participants')

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

          {(() => {
            if (activeTab === 'info') {
              return <InfoTab tournament={tournament} />;
            } else if (activeTab === 'participants') {
              return <ParticipantListTab tournament={tournament} />;
            } else if (activeTab === 'bracket') {
              return <BracketTab />;
            }
            return null;
          })()}
        </div>
      </div>
    </div>
  );
}

export default TournamentPage
