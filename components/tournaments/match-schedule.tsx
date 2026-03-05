"use client"

import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react"

const scheduleItems = [
  { time: "20:00", day: "FRI", team1: "NAVI", team2: "FaZe", matchTime: "00:00", label: "Match" },
  { time: "20:00", day: "WO'A", team1: "NAVI", team2: "FaZe", matchTime: "00:00", label: "Match" },
  { time: "20:00", day: "WON", team1: "G2", team2: "FaZe", matchTime: "00:00", label: "Match" },
  { time: "07:30", day: "WED", team1: "FaZe", team2: "FaZe", matchTime: "00:00", label: "Match" },
]

export function MatchSchedule() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-foreground">MATCH SCHEDULE</h2>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {scheduleItems.map((item, i) => (
          <div
            key={i}
            className="card-glow flex items-center justify-between rounded-lg bg-card px-4 py-3"
          >
            <div className="flex flex-col items-center text-center w-16">
              <span className="text-sm font-bold text-foreground">{item.time}</span>
              <span className="text-xs text-muted-foreground">{item.day}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-foreground">{item.team1}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                {item.team1.slice(0, 2)}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-foreground">{item.matchTime}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                {item.team2.slice(0, 2)}
              </div>
              <span className="text-sm font-bold text-foreground">{item.team2}</span>
            </div>

            <div className="flex items-center gap-1">
              <ChevronRightIcon className="h-4 w-4 text-primary" />
              <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
