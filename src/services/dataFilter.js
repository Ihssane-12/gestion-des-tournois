export function filterBySport(tournaments, sport) {
  if (!sport) return tournaments
  return tournaments.filter((t) => t.sport === sport)
}

