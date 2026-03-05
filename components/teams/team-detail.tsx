import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Users, Crosshair, Target, Shield, Swords } from "lucide-react"
import type { Team, Player } from "@/lib/data"

function RoleIcon({ roleType }: { roleType: string }) {
  switch (roleType) {
    case "awper":
      return <Crosshair className="h-4 w-4" />
    case "igl":
      return <Shield className="h-4 w-4" />
    case "entry":
      return <Swords className="h-4 w-4" />
    default:
      return <Target className="h-4 w-4" />
  }
}

export function TeamDetail({ team, players }: { team: Team; players: Player[] }) {
  return (
    <div>
      <Link
        href="/teams"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Teams
      </Link>

      <div className="card-glow-cyan rounded-lg bg-card p-6 mb-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-3xl font-black border-2"
            style={{ color: team.color, borderColor: team.color }}
          >
            {team.shortName}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-foreground">{team.name}</h1>
            <div className="mt-2 flex items-center justify-center gap-4 sm:justify-start">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {team.region}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {players.length} players
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{team.description}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-4">ROSTER 2026</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {players.map((player) => (
          <div
            key={player.id}
            className="card-glow-cyan overflow-hidden rounded-lg bg-card group"
          >
            <div className="relative h-48 bg-gradient-to-b from-secondary to-card">
              <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-foreground">{player.name}</h3>
                <span className="text-xs text-muted-foreground">{player.country}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{player.realName}</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-primary">
                <RoleIcon roleType={player.roleType} />
                <span>{player.role}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{'K/D: '}<span className="font-semibold text-foreground">{player.kd}</span></span>
                <span>{'ADR: '}<span className="font-semibold text-foreground">{player.adr}</span></span>
              </div>
            </div>
          </div>
        ))}
        {players.length === 0 && (
          <p className="text-muted-foreground col-span-full text-center py-8">
            No player data available for this team yet.
          </p>
        )}
      </div>
    </div>
  )
}
