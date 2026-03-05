"use client"

import { useEffect, useState } from "react"

const tournaments = [
  {
    id: 1,
    name: "IEM Cologne Major 2026",
    logo: "IEM",
    logoColor: "#3b82f6",
    prizePool: "$1,250,000",
    startDate: "Jun 2",
    endDate: "Jun 21",
    countdownHours: 72,
    countdownMinutes: 30,
    countdownSeconds: 0,
  },
  {
    id: 2,
    name: "BLAST Premier Spring Finals 2026",
    logo: "BL",
    logoColor: "#ef4444",
    prizePool: "$425,000",
    startDate: "Apr 15",
    endDate: "Apr 20",
    countdownHours: 24,
    countdownMinutes: 15,
    countdownSeconds: 30,
  },
  {
    id: 3,
    name: "PGL Bucharest Major Qualifier",
    logo: "PGL",
    logoColor: "#fbbf24",
    prizePool: "$200,000",
    startDate: "Mar 18",
    endDate: "Mar 24",
    countdownHours: 8,
    countdownMinutes: 45,
    countdownSeconds: 12,
  },
  {
    id: 4,
    name: "ESL Pro League Season 23",
    logo: "ESL",
    logoColor: "#c8734a",
    prizePool: "$850,000",
    startDate: "May 5",
    endDate: "May 25",
    countdownHours: 48,
    countdownMinutes: 20,
    countdownSeconds: 55,
  },
]

function CountdownTimer({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) {
  const [time, setTime] = useState({ h: hours, m: minutes, s: seconds })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev
        s--
        if (s < 0) {
          s = 59
          m--
        }
        if (m < 0) {
          m = 59
          h--
        }
        if (h < 0) {
          h = 0
          m = 0
          s = 0
        }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1 font-mono text-2xl font-bold text-foreground">
      <span>{String(time.h).padStart(2, "0")}</span>
      <span className="text-primary">:</span>
      <span>{String(time.m).padStart(2, "0")}</span>
      <span className="text-primary">:</span>
      <span>{String(time.s).padStart(2, "0")}</span>
    </div>
  )
}

export function UpcomingTournaments() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-foreground">UPCOMING TOURNAMENTS</h2>
      <div className="flex flex-col gap-4">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="card-glow-cyan rounded-lg bg-card p-4 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border text-sm font-bold"
                style={{ borderColor: tournament.logoColor, color: tournament.logoColor }}
              >
                {tournament.logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground line-clamp-2">{tournament.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {'Prize Pool: '}<span className="text-primary">{tournament.prizePool}</span>
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {tournament.startDate} - {tournament.endDate}
              </span>
              <CountdownTimer
                hours={tournament.countdownHours}
                minutes={tournament.countdownMinutes}
                seconds={tournament.countdownSeconds}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
