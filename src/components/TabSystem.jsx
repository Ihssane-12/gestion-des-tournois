function TabSystem(props) {
  const activeTab = props.activeTab;
  const onChange = props.onChange;

  return (
    <div className="px-4 pt-3 border-b border-slate-100 bg-white">
      <nav className="flex gap-3 text-xs font-medium text-slate-500">
        <button
          onClick={() => onChange('info')}
          className={"relative pb-2 transition-colors " + (activeTab === 'info' ? 'text-primary-dark' : 'hover:text-slate-800')}
        >
          Info
          {activeTab === 'info' && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
          )}
        </button>

        <button
          onClick={() => onChange('participants')}
          className={"relative pb-2 transition-colors " + (activeTab === 'participants' ? 'text-primary-dark' : 'hover:text-slate-800')}
        >
          Participants
          {activeTab === 'participants' && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
          )}
        </button>

        <button
          onClick={() => onChange('bracket')}
          className={"relative pb-2 transition-colors " + (activeTab === 'bracket' ? 'text-primary-dark' : 'hover:text-slate-800')}
        >
          Bracket
          {activeTab === 'bracket' && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default TabSystem;

