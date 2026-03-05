"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredMatches = [
  { team1: "NAVI", team2: "Spirit", time: "18:00", status: "Upcoming", day: "BLAST Premier" },
  { team1: "G2", team2: "FaZe", time: "20:30", status: "Upcoming", day: "BLAST Premier" },
  { team1: "Vitality", team2: "MOUZ", time: "15:00", status: "Upcoming", day: "ESL Pro League" },
]

export function FeaturedMatches() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">FEATURED MATCHES</h2>
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous matches"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next matches"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredMatches.map((match, i) => (
          <div key={i} className="card-glow rounded-lg bg-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                  {match.team1.slice(0, 2)}
                </div>
                <span className="text-sm font-semibold text-foreground">{match.team1}</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs text-primary">{match.status}</span>
                <span className="text-2xl font-bold text-foreground">{match.time}</span>
                <span className="text-xs text-muted-foreground">{match.day}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                  {match.team2.slice(0, 2)}
                </div>
                <span className="text-sm font-semibold text-foreground">{match.team2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
