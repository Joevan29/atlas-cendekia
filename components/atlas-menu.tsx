"use client"

import { useState } from "react"
import { X, Search, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AtlasMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface Location {
  id: string
  name: string
  type: string
  completion: number
  discovered: boolean
}

export function AtlasMenu({ isOpen, onClose }: AtlasMenuProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const locations: Location[] = [
    { id: "1", name: "Observatorium Gravitasi Newton", type: "Fisika", completion: 100, discovered: true },
    { id: "2", name: "Laboratorium Kimia Mendeleev", type: "Kimia", completion: 75, discovered: true },
    { id: "3", name: "Perpustakaan Matematika Euler", type: "Matematika", completion: 50, discovered: true },
    { id: "4", name: "Museum Sejarah Peradaban", type: "Sejarah", completion: 25, discovered: true },
    { id: "5", name: "Akademi Seni Renaissance", type: "Seni", completion: 0, discovered: false },
    { id: "6", name: "Pusat Penelitian Biologi Darwin", type: "Biologi", completion: 90, discovered: true },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "fisika":
        return "⚛️"
      case "kimia":
        return "🧪"
      case "matematika":
        return "📐"
      case "sejarah":
        return "🏛️"
      case "seni":
        return "🎨"
      case "biologi":
        return "🧬"
      default:
        return "📍"
    }
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-96 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />}

      {/* Menu Panel */}
      <div className="relative h-full atlas-glass border-r border-white/20 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white atlas-text-glow font-space-grotesk">Atlas Index</h2>
            <Button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/30"
              variant="ghost"
              size="icon"
            >
              <X className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <Input
              placeholder="Cari lokasi atau subjek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 font-dm-sans"
            />
          </div>
        </div>

        {/* Locations List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                location.discovered
                  ? "bg-white/10 border-white/20 hover:bg-white/20 hover:border-cyan-400/50"
                  : "bg-gray-500/20 border-gray-500/30 opacity-60"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="text-2xl mt-1">{location.discovered ? getTypeIcon(location.type) : "❓"}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-bold font-space-grotesk ${location.discovered ? "text-white" : "text-gray-400"}`}
                  >
                    {location.discovered ? location.name : "???"}
                  </h3>
                  <p className={`text-sm font-dm-sans ${location.discovered ? "text-cyan-300" : "text-gray-500"}`}>
                    {location.discovered ? location.type : "Belum Ditemukan"}
                  </p>

                  {/* Progress Bar */}
                  {location.discovered && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-white/80">Progress</span>
                        <span className="text-amber-400 font-bold">{location.completion}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-amber-400 h-2 rounded-full transition-all duration-500 atlas-glow-cyan"
                          style={{ width: `${location.completion}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Icons */}
                <div className="flex flex-col items-center gap-1">
                  {location.completion === 100 && <Star className="w-4 h-4 text-amber-400 atlas-glow-gold" />}
                  {location.discovered && <MapPin className="w-4 h-4 text-cyan-400" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-white/20 bg-white/5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-amber-400 font-space-grotesk">
                {locations.filter((l) => l.discovered).length}
              </div>
              <div className="text-xs text-white/80 font-dm-sans">Ditemukan</div>
            </div>
            <div>
              <div className="text-lg font-bold text-cyan-400 font-space-grotesk">
                {locations.filter((l) => l.completion === 100).length}
              </div>
              <div className="text-xs text-white/80 font-dm-sans">Selesai</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-400 font-space-grotesk">
                {Math.round(locations.reduce((acc, l) => acc + l.completion, 0) / locations.length)}%
              </div>
              <div className="text-xs text-white/80 font-dm-sans">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
