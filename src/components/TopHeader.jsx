function TopHeaderActions() {
  let imgClass = "h-full w-full object-cover";

  return (
    <div className="flex items-center gap-3">
      <button className="h-10 w-10 rounded-full bg-primary-light/40 flex items-center justify-center text-white shadow-soft">
        <span className="sr-only">Notifications</span>
        <i className="fa-solid fa-bell text-sm" />
      </button>
      <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/40">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className={imgClass}
        />
      </div>
    </div>
  );
}

function TopHeaderGreeting() {
  return (
    <div>
      <p className="text-sm text-indigo-100">Good Morning,</p>
      <h1 className="text-2xl font-semibold tracking-tight">Samuel Walker!</h1>
    </div>
  );
}

function TopHeader() {
  return (
    <header className="flex items-center justify-between mb-8">
      <TopHeaderGreeting />
      <TopHeaderActions />
    </header>
  );
}

export default TopHeader;

