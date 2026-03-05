const matches = [
  { team1: "NAVI", team2: "Spirit", score1: 2, score2: 0, live: true },
  { team1: "G2", team2: "Vitality", score1: 1, score2: 1, live: true },
  { team1: "FaZe", team2: "MOUZ", score1: 0, score2: 0, live: false },
  { team1: "Spirit", team2: "FaZe", score1: 2, score2: 1, live: true },
  { team1: "NAVI", team2: "G2", score1: 0, score2: 1, live: false },
]

export function LiveMatchTicker() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-foreground">LIVE MATCH TICKER</h2>
      <div className="flex flex-col gap-2">
        {matches.map((match, i) => (
          <div
            key={i}
            className="card-glow flex items-center justify-between rounded-lg bg-card px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${match.live ? "bg-red-500 animate-pulse" : "bg-muted-foreground"}`} />
              <span className="text-sm font-medium text-foreground">{match.team1}</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {match.score1} - {match.score2}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{match.team2}</span>
              <div className={`h-2 w-2 rounded-full ${match.live ? "bg-green-500 animate-pulse" : "bg-muted-foreground"}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
