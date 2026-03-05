"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const tabs = ["Tournament Major", "Tournament (hlach)", "Upcoming"]

const bracketRounds = [
  {
    matches: [
      { team1: "Natus Vinc...", team2: "Natus Vinc...", winner: 0 },
      { team1: "FaZe Clan", team2: "G2 Esports", winner: 0 },
      { team1: "NAVI", team2: "G2 Esports", winner: 1 },
      { team1: "G2 Esports", team2: "Team Vitality", winner: null },
    ],
  },
  {
    matches: [
      { team1: "Natus Vinc...", team2: "FaZe Clan", winner: 0 },
      { team1: "FaZe", team2: "Team Vitali...", winner: 0 },
    ],
  },
  {
    matches: [{ team1: "NAVI", team2: "FaZe", winner: null }],
  },
]

export function LiveBrackets() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-foreground">LIVE BRACKETS</h2>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
              activeTab === i
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card-glow-cyan rounded-lg bg-card p-4 overflow-x-auto">
        <div className="flex items-center gap-6 min-w-[600px]">
          {bracketRounds.map((round, roundIndex) => (
            <div key={roundIndex} className="flex flex-col gap-4 flex-1">
              {round.matches.map((match, matchIndex) => (
                <div key={matchIndex} className="flex flex-col gap-1">
                  <div
                    className={`flex items-center justify-between rounded px-3 py-1.5 text-xs ${
                      match.winner === 0
                        ? "bg-primary/20 text-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span className="truncate">{match.team1}</span>
                    {match.winner === 0 && (
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    )}
                  </div>
                  <div
                    className={`flex items-center justify-between rounded px-3 py-1.5 text-xs ${
                      match.winner === 1
                        ? "bg-primary/20 text-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span className="truncate">{match.team2}</span>
                    {match.winner === 1 && (
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
