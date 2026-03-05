"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { useRef } from "react"

const featuredNews = [
  {
    id: 1,
    category: "UPDATE",
    title: "Inferno's Graveyard Removed & Balcony Extended in New CS2 Update",
    time: "2 hours ago",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    category: "ESPORTS",
    title: "NAVI Announce Updated CS2 Roster: Aleksib Joins as IGL",
    time: "5 hours ago",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    category: "TOURNAMENT",
    title: "IEM Cologne Major 2026 Announced for June",
    time: "1 day ago",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    category: "UPDATE",
    title: "Valve Release March 2026 VRS Ranking Update",
    time: "3 hours ago",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    category: "ESPORTS",
    title: "Team Spirit Maintain #1 HLTV Ranking Into 2026",
    time: "1 day ago",
    image: "/images/news-5.jpg",
  },
]

export function FeaturedNewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">FEATURED NEWS</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollRight}
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredNews.map((item) => (
          <div
            key={item.id}
            className="card-glow min-w-[240px] max-w-[240px] overflow-hidden rounded-lg bg-card group cursor-pointer shrink-0"
          >
            <div className="relative h-36">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.category}
              </span>
              <h3 className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
