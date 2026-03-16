/**
 * Increment the participant count string by 1 (e.g. "24/32" -> "25/32", "8/12 Teams" -> "9/12 Teams").
 */
export function incrementParticipantCount(participantsCount) {
  if (!participantsCount || typeof participantsCount !== 'string') return participantsCount
  const match = participantsCount.match(/^(\d+)\/(\d+)(.*)$/)
  if (!match) return participantsCount
  const [, current, max, suffix] = match
  const next = String(Number(current) + 1)
  return `${next}/${max}${suffix}`
}

/**
 * Decrement the participant count string by 1.
 */
export function decrementParticipantCount(participantsCount) {
  if (!participantsCount || typeof participantsCount !== 'string') return participantsCount
  const match = participantsCount.match(/^(\d+)\/(\d+)(.*)$/)
  if (!match) return participantsCount
  const [, current, max, suffix] = match
  const next = Math.max(0, Number(current) - 1)
  return `${next}/${max}${suffix}`
}

/**
 * Returns a tournament object with the current user added to participants and count incremented
 * when they are registered. Does not mutate the original tournament.
 */
export function getDisplayTournament(tournament, userProfile, isRegistered) {
  if (!isRegistered || !userProfile) return tournament

  const userParticipant = {
    id: 'current-user',
    name: userProfile.name || 'Me',
    team: userProfile.team,
    level: userProfile.level,
    status: 'Pending',
    avatar: userProfile.avatar || null,
  }

  return {
    ...tournament,
    participants: [...tournament.participants, userParticipant],
    participantsCount: incrementParticipantCount(tournament.participantsCount),
  }
}
