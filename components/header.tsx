"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Grid3X3, Crosshair } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Teams", href: "/teams" },
  { label: "Players", href: "/players" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Skins", href: "/skins" },
  { label: "News", href: "/news" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#0d1520] nav-glow">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <Crosshair className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-primary">CS2</span> CENTRAL
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Grid view">
            <Grid3X3 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4">
        <ul className="flex items-center gap-6 border-t border-border/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-block py-3 text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
