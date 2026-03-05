import { UpcomingTournaments } from "@/components/tournaments/upcoming-tournaments"
import { LiveBrackets } from "@/components/tournaments/live-brackets"
import { MatchSchedule } from "@/components/tournaments/match-schedule"

export default function TournamentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-96">
          <UpcomingTournaments />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <LiveBrackets />
          <MatchSchedule />
        </div>
      </div>
    </div>
  )
}
