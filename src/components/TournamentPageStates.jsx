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

export { TournamentLoading, TournamentError, TournamentNotFound };
