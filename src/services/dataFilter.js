export function filterBySport(tournaments, sport) {
  if (!sport) {
    return tournaments;
  }

  const result = [];
  for (let i = 0; i < tournaments.length; i++) {
    if (tournaments[i].sport === sport) {
      result.push(tournaments[i]);
    }
  }
  return result;
}

