import { HeroSection } from "@/components/home/hero-section"
import { LatestNews } from "@/components/home/latest-news"
import { LiveMatchTicker } from "@/components/home/live-match-ticker"
import { FeaturedMatches } from "@/components/home/featured-matches"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <LatestNews />
          </div>
          <div className="w-full lg:w-80">
            <LiveMatchTicker />
          </div>
        </div>
        <FeaturedMatches />
      </div>
    </div>
  )
}
