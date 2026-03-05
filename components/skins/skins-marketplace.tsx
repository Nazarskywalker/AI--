"use client"

import { Search, ChevronUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { skins } from "@/lib/data"

const weaponFilters = ["AWP", "AK-47", "M4A4", "M4A1-S", "USP-S", "Desert Eagle"]
const rarityFilters = [
  { name: "Contraband", color: "#e4ae39" },
  { name: "Covert", color: "#eb4b4b" },
  { name: "Classified", color: "#d32ce6" },
  { name: "Restricted", color: "#4b69ff" },
  { name: "Mil-Spec", color: "#4b69ff" },
  { name: "Industrial", color: "#5e98d9" },
]

export function SkinsMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedWeapons, setSelectedWeapons] = useState<string[]>([])
  const [selectedRarities, setSelectedRarities] = useState<string[]>([])
  const [weaponOpen, setWeaponOpen] = useState(true)
  const [rarityOpen, setRarityOpen] = useState(true)

  const toggleWeapon = (weapon: string) => {
    setSelectedWeapons((prev) =>
      prev.includes(weapon) ? prev.filter((w) => w !== weapon) : [...prev, weapon]
    )
  }

  const toggleRarity = (rarity: string) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity) ? prev.filter((r) => r !== rarity) : [...prev, rarity]
    )
  }

  const filteredSkins = skins.filter((skin) => {
    const matchesSearch = skin.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesWeapon = selectedWeapons.length === 0 || selectedWeapons.includes(skin.weapon)
    const matchesRarity = selectedRarities.length === 0 || selectedRarities.includes(skin.rarity)
    return matchesSearch && matchesWeapon && matchesRarity
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">Skins</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border border-border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full lg:w-60 shrink-0">
          <div className="rounded-lg bg-card p-4 card-glow">
            <h2 className="text-lg font-bold text-foreground mb-4">FILTER</h2>

            <div className="mb-4">
              <button
                onClick={() => setWeaponOpen(!weaponOpen)}
                className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground"
              >
                WEAPON
                <ChevronUp className={`h-4 w-4 transition-transform ${weaponOpen ? "" : "rotate-180"}`} />
              </button>
              {weaponOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  {weaponFilters.map((weapon) => (
                    <label key={weapon} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedWeapons.includes(weapon)}
                        onChange={() => toggleWeapon(weapon)}
                        className="h-4 w-4 rounded border-border bg-secondary accent-primary"
                      />
                      <span className="text-sm text-muted-foreground">{weapon}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setRarityOpen(!rarityOpen)}
                className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground"
              >
                RARITY
                <ChevronUp className={`h-4 w-4 transition-transform ${rarityOpen ? "" : "rotate-180"}`} />
              </button>
              {rarityOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  {rarityFilters.map((rarity, i) => (
                    <label key={rarity.name + i} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRarities.includes(rarity.name)}
                        onChange={() => toggleRarity(rarity.name)}
                        className="h-4 w-4 rounded border-border bg-secondary accent-primary"
                      />
                      <span
                        className="h-3 w-3 rounded-sm shrink-0"
                        style={{ backgroundColor: rarity.color }}
                      />
                      <span className="text-sm text-muted-foreground">{rarity.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredSkins.map((skin) => (
              <div
                key={skin.id}
                className="card-glow overflow-hidden rounded-lg bg-card group cursor-pointer"
              >
                <div className="relative h-40 bg-gradient-to-b from-secondary to-card overflow-hidden">
                  <Image
                    src={skin.image}
                    alt={skin.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-cyan/30 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-foreground">{skin.name}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span
                        className="h-2.5 w-2.5 rounded-sm shrink-0"
                        style={{ backgroundColor: skin.rarityColor }}
                      />
                      <span className="text-xs text-muted-foreground">{skin.rarity}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {'Float '}{skin.float.toFixed(3)}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <span className="rounded border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      {skin.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredSkins.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No skins match your filters.</p>
          )}
        </div>
      </div>
    </div>
  )
}
