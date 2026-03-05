import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-6">
      <div className="card-glow relative overflow-hidden rounded-lg">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src="/images/hero-cs2.jpg"
            alt="Counter-Strike 2 gameplay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Counter-Strike 2
            </p>
            <h1 className="mt-2 max-w-md text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              THE HOME OF COUNTER-STRIKE 2
            </h1>
            <Link
              href="/news"
              className="mt-6 inline-flex w-fit items-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Latest News
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
