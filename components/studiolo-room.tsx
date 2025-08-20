"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Trophy {
  id: string
  name: string
  description: string
  rarity: "common" | "rare" | "epic" | "legendary"
  icon: string
}

interface PlayerStats {
  totalQuestions: number
  perfectQuizzes: number
  highestLevel: number
  studyStreak: number
  totalXP: number
  achievementsUnlocked: number
}

interface FurnitureItem {
  id: string
  name: string
  type: "desk" | "chair" | "decoration" | "bookshelf"
  isUnlocked: boolean
  cost?: number
}

export function StudiolRoom({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeZone, setActiveZone] = useState<"trophies" | "stats" | "furniture" | null>(null)

  const playerStats: PlayerStats = {
    totalQuestions: 2847,
    perfectQuizzes: 156,
    highestLevel: 18,
    studyStreak: 47,
    totalXP: 15420,
    achievementsUnlocked: 23,
  }

  const trophies: Trophy[] = [
    { id: "1", name: "Master Matematika", description: "Selesaikan 100 soal matematika", rarity: "epic", icon: "🏆" },
    { id: "2", name: "Fisika Quantum", description: "Kuasai konsep fisika quantum", rarity: "legendary", icon: "⚛️" },
    { id: "3", name: "Kimia Organik", description: "Ahli dalam kimia organik", rarity: "rare", icon: "🧪" },
    { id: "4", name: "Biologi Molekuler", description: "Memahami biologi tingkat molekul", rarity: "epic", icon: "🧬" },
  ]

  const furnitureItems: FurnitureItem[] = [
    { id: "1", name: "Meja Kristal Arcane", type: "desk", isUnlocked: true },
    { id: "2", name: "Kursi Levitasi", type: "chair", isUnlocked: true },
    { id: "3", name: "Orb Pengetahuan", type: "decoration", isUnlocked: false, cost: 500 },
    { id: "4", name: "Rak Buku Hologram", type: "bookshelf", isUnlocked: false, cost: 750 },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-400 border-gray-400/30"
      case "rare":
        return "text-blue-400 border-blue-400/30"
      case "epic":
        return "text-purple-400 border-purple-400/30"
      case "legendary":
        return "text-amber-400 border-amber-400/30"
      default:
        return "text-gray-400 border-gray-400/30"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[85vh] atlas-glass border-2 border-cyan-400/30 relative overflow-hidden">
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-amber-400/20 animate-pulse" />

        {/* Header */}
        <div className="relative p-6 border-b border-cyan-400/30">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Studiolo Pribadi</h1>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              ✕
            </Button>
          </div>
        </div>

        {/* 2.5D Isometric Room */}
        <div className="relative p-6 h-full">
          <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-700 rounded-lg overflow-hidden">
            {/* Cosmic Window Background */}
            <div className="absolute top-4 right-4 w-48 h-32 bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-lg border-2 border-cyan-400/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />
              <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse" />
              <div className="absolute top-6 right-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
            </div>

            {/* Interactive Zones */}

            {/* Rak Trofi (Trophy Shelf) */}
            <button
              className="absolute bottom-8 left-8 w-32 h-24 atlas-glass border-2 border-amber-400/30 rounded-lg hover:border-amber-400/60 transition-all transform hover:scale-105"
              onClick={() => setActiveZone(activeZone === "trophies" ? null : "trophies")}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-2xl mb-1">🏆</div>
                <span className="text-xs text-amber-400 font-semibold">Rak Trofi</span>
              </div>
            </button>

            {/* Papan Statistik (Stats Panel) */}
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-32 atlas-glass border-2 border-cyan-400/30 rounded-lg hover:border-cyan-400/60 transition-all hover:scale-105"
              onClick={() => setActiveZone(activeZone === "stats" ? null : "stats")}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-3xl mb-2">📊</div>
                <span className="text-xs text-cyan-400 font-semibold">Papan Statistik</span>
              </div>
            </button>

            {/* Meja Kustomisasi (Customization Desk) */}
            <button
              className="absolute bottom-8 right-8 w-32 h-24 atlas-glass border-2 border-purple-400/30 rounded-lg hover:border-purple-400/60 transition-all transform hover:scale-105"
              onClick={() => setActiveZone(activeZone === "furniture" ? null : "furniture")}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-2xl mb-1">🪑</div>
                <span className="text-xs text-purple-400 font-semibold">Kustomisasi</span>
              </div>
            </button>

            {/* Room Decorations */}
            <div className="absolute bottom-4 left-1/3 w-16 h-8 bg-gradient-to-r from-amber-600 to-yellow-600 rounded atlas-glow-gold opacity-60" />
            <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full atlas-glow-cyan opacity-40 animate-pulse" />
          </div>

          {/* Zone Details Panel */}
          {activeZone && (
            <Card className="absolute bottom-6 left-6 right-6 h-48 atlas-glass border border-white/20 p-4 overflow-hidden">
              {activeZone === "trophies" && (
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-4">Koleksi Trofi & Pencapaian</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {trophies.map((trophy) => (
                      <Card key={trophy.id} className={`p-3 atlas-glass border ${getRarityColor(trophy.rarity)}`}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">{trophy.icon}</div>
                          <h4 className="text-xs font-semibold text-white mb-1">{trophy.name}</h4>
                          <p className="text-xs text-gray-400">{trophy.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeZone === "stats" && (
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">Statistik Pembelajaran</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{playerStats.totalQuestions.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Total Soal Diselesaikan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">{playerStats.perfectQuizzes}</div>
                      <div className="text-xs text-gray-400">Kuis Sempurna</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{playerStats.highestLevel}</div>
                      <div className="text-xs text-gray-400">Level Keahlian Tertinggi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{playerStats.studyStreak}</div>
                      <div className="text-xs text-gray-400">Hari Berturut-turut</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{playerStats.totalXP.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Total XP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{playerStats.achievementsUnlocked}</div>
                      <div className="text-xs text-gray-400">Pencapaian Terbuka</div>
                    </div>
                  </div>
                </div>
              )}

              {activeZone === "furniture" && (
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-4">Furnitur & Dekorasi</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {furnitureItems.map((item) => (
                      <Card
                        key={item.id}
                        className={`p-3 atlas-glass border ${
                          item.isUnlocked ? "border-green-400/30" : "border-gray-600/30"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-lg mb-1">
                            {item.type === "desk"
                              ? "🪑"
                              : item.type === "chair"
                                ? "💺"
                                : item.type === "decoration"
                                  ? "🔮"
                                  : "📚"}
                          </div>
                          <h4 className="text-xs font-semibold text-white mb-1">{item.name}</h4>
                          {item.isUnlocked ? (
                            <Badge variant="outline" className="text-xs border-green-400/50 text-green-400">
                              Terpasang
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs border-amber-400/50 text-amber-400">
                              {item.cost} XP
                            </Badge>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </Card>
    </div>
  )
}
