"use client"

import { Search, MapPin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { teams } from "@/lib/data"

export function TeamsGrid() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">TEAMS</h1>
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
        {filteredTeams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.slug}`}
            className="card-glow-cyan overflow-hidden rounded-lg bg-card group block"
          >
            <div className="relative flex h-48 items-center justify-center bg-gradient-to-b from-secondary to-card">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-black"
                style={{ color: team.color, borderColor: team.color, borderWidth: 2 }}
              >
                {team.shortName}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{team.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{team.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{team.region}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
