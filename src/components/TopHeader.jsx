import { useState } from 'react'
import { useUser } from '../context/UserContext'
import ProfileForm from './ProfileForm'

function TopHeaderActions({ onAvatarClick }) {
  let imgClass = "h-full w-full object-cover";

  return (
    <div className="flex items-center gap-3">
      <button className="h-10 w-10 rounded-full bg-primary-light/40 flex items-center justify-center text-white shadow-soft">
        <span className="sr-only">Notifications</span>
        <i className="fa-solid fa-bell text-sm" />
      </button>
      <button
        type="button"
        onClick={onAvatarClick}
        className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
        aria-label="Open profile"
      >
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className={imgClass}
        />
      </button>
    </div>
  );
}

function TopHeaderGreeting({ userName }) {
  return (
    <div>
      <p className="text-sm text-indigo-100">Good Morning,</p>
      <h1 className="text-2xl font-semibold tracking-tight">{userName || 'Samuel Walker!'}</h1>
    </div>
  );
}

function TopHeader() {
  const { userProfile } = useUser()
  const [showProfileForm, setShowProfileForm] = useState(false)

  return (
    <header className="flex items-center justify-between mb-8">
      <TopHeaderGreeting userName={userProfile?.name} />
      <TopHeaderActions onAvatarClick={() => setShowProfileForm(true)} />
      {showProfileForm && (
        <ProfileForm onClose={() => setShowProfileForm(false)} />
      )}
    </header>
  );
}

export default TopHeader;
