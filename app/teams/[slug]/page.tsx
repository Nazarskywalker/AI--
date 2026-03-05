import { teams, players } from "@/lib/data"
import { notFound } from "next/navigation"
import { TeamDetail } from "@/components/teams/team-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params
  const team = teams.find((t) => t.slug === slug)
  if (!team) notFound()

  const teamPlayers = players.filter((p) => p.teamSlug === slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <TeamDetail team={team} players={teamPlayers} />
    </div>
  )
}
