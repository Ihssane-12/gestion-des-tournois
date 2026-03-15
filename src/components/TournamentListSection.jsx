import TournamentSkeleton from './TournamentSkeleton'
import TournamentList, { TournamentListError } from './TournamentList'

function TournamentListSection(props) {
  const loading = props.loading
  const error = props.error
  const filteredTournaments = props.filteredTournaments
  const onOpenTournament = props.onOpenTournament

  if (loading) {
    return <TournamentSkeleton />
  }
  if (error) {
    return <TournamentListError error={error} />
  }
  return (
    <TournamentList
      filteredTournaments={filteredTournaments}
      onOpenTournament={onOpenTournament}
    />
  )
}

export default TournamentListSection
