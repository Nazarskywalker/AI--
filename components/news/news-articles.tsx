import Image from "next/image"

const articles = [
  {
    id: 1,
    title: "Anubis Returns to Active Duty Pool With Redesigned Layout",
    description:
      "The February 2026 update brings Anubis back into the Active Duty map pool with a completely redesigned layout that impacts early-round dynamics and site control strategies.",
    image: "/images/news-2.jpg",
    tags: ["Updates", "Maps", "Meta"],
  },
  {
    id: 2,
    title: "G2 Esports Rebuild Around m0NESY With New 2026 Roster",
    description:
      "G2 Esports announced their restructured CS2 roster featuring huNter-, SunPayus, HeavyGod, and MATYS alongside star AWPer m0NESY for the 2026 competitive season.",
    image: "/images/news-4.jpg",
    tags: ["Esports", "Roster Changes"],
  },
  {
    id: 3,
    title: "CS2 Economy Changes Shake Up Professional Meta in 2026",
    description:
      "Major shifts in the CS2 economy system including adjusted weapon prices and loss bonus mechanics are forcing professional teams to rethink their economic strategies.",
    image: "/images/news-5.jpg",
    tags: ["Updates", "Meta", "Esports"],
  },
]

export function NewsArticles() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="card-glow overflow-hidden rounded-lg bg-card group cursor-pointer"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                NEWS
              </span>
              <h3 className="mt-1 text-base font-bold text-foreground">{article.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {article.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
