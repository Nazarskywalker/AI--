"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const newsItems = [
  {
    id: 1,
    category: "UPDATE",
    title: "Inferno's Graveyard Removed in Latest CS2 Patch",
    time: "2 hours ago",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    category: "ESPORTS",
    title: "NAVI Announce Aleksib as New IGL for 2026 Season",
    time: "5 hours ago",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    category: "TOURNAMENT",
    title: "IEM Cologne Major 2026 Set for June",
    time: "1 day ago",
    image: "/images/news-3.jpg",
  },
]

export function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">LATEST CS2 NEWS</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(newsItems.length - 1, currentIndex + 1))}
            className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next news"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Link key={item.id} href="/news" className="group">
            <div className="card-glow overflow-hidden rounded-lg bg-card">
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
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
          </Link>
        ))}
      </div>
    </section>
  )
}
