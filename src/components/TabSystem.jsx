function TabSystem(props) {
  const activeTab = props.activeTab;
  const onChange = props.onChange;

  let infoClass = "relative pb-2 transition-colors ";
  if (activeTab === 'info') infoClass += "text-primary-dark";
  else infoClass += "hover:text-slate-800";

  let participantsClass = "relative pb-2 transition-colors ";
  if (activeTab === 'participants') participantsClass += "text-primary-dark";
  else participantsClass += "hover:text-slate-800";

  let bracketClass = "relative pb-2 transition-colors ";
  if (activeTab === 'bracket') bracketClass += "text-primary-dark";
  else bracketClass += "hover:text-slate-800";

  return (
    <div className="px-4 pt-3 border-b border-slate-100 bg-white">
      <nav className="flex gap-3 text-xs font-medium text-slate-500">
        <button
          onClick={() => onChange('info')}
          className={infoClass}
        >
          Info
          {activeTab === 'info' && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
          )}
        </button>

        <button
          onClick={() => onChange('participants')}
          className={participantsClass}
        >
          Participants
          {activeTab === 'participants' && (
            <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-full bg-primary-dark" />
          )}
        </button>

        <button
          onClick={() => onChange('bracket')}
          className={bracketClass}
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

