import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import TabSystem from '../components/TabSystem'
import TournamentHeader from '../components/TournamentHeader'
import TournamentBadges from '../components/TournamentBadges'
import ParticipantListTab from '../components/ParticipantListTab'
import InfoTab from '../components/InfoTab'
import BracketTab from '../components/BracketTab'

function TournamentPage(props) {
  const tournament = props.tournament
  const [activeTab, setActiveTab] = useState('participants')
  const navigate = useNavigate()

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
