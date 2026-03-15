function TournamentSkeletonItem() {
  return (
    <div className="bg-white/10 rounded-3xl p-4 animate-pulse shadow-soft border border-white/10">
      <div className="h-4 w-24 bg-white/30 rounded mb-3" />
      <div className="h-7 w-56 bg-white/40 rounded mb-2" />
      <div className="h-3 w-64 bg-white/30 rounded mb-4" />
      <div className="h-3 w-40 bg-white/20 rounded mb-2" />
      <div className="h-3 w-32 bg-white/20 rounded" />
    </div>
  );
}

function TournamentSkeleton() {
  return (
    <div className="space-y-4">
      <TournamentSkeletonItem />
      <TournamentSkeletonItem />
    </div>
  );
}

export default TournamentSkeleton;

