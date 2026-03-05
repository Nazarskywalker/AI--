import { FeaturedNewsCarousel } from "@/components/news/featured-news-carousel"
import { NewsArticles } from "@/components/news/news-articles"

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <FeaturedNewsCarousel />
      <NewsArticles />
    </div>
  )
}
