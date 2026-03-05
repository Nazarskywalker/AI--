"use client"

import { Search, Crosshair, Target, Shield, Swords } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { players } from "@/lib/data"

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

export function PlayersGrid() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.team.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">PLAYERS</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border border-border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPlayers.map((player) => (
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
                <h3 className="text-lg font-bold text-foreground">{player.name}</h3>
                <Link
                  href={`/teams/${player.teamSlug}`}
                  className="text-sm font-bold hover:underline transition-colors"
                  style={{ color: player.teamColor }}
                >
                  {player.team}
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">{player.realName}</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-primary">
                <RoleIcon roleType={player.roleType} />
                <span>{player.role}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-foreground">
                  {'K/D: '}<span className="font-semibold">{player.kd}</span>
                </span>
                <span className="text-foreground">
                  {'ADR: '}<span className="font-semibold">{player.adr}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
