const TABS = [
  { id: 'info', label: 'Info' },
  { id: 'participants', label: 'Participants' },
  { id: 'bracket', label: 'Bracket' },
]

function TabSystem({ activeTab, onChange }) {
  return (
    <div className="px-4 pt-3 border-b border-slate-100 bg-white">
      <nav className="flex gap-3 text-xs font-medium text-slate-500">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative pb-2 transition-colors ${
                isActive ? 'text-primary-dark' : 'hover:text-slate-800'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default TabSystem

