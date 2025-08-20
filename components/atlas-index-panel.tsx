"use client"

import { useState } from "react"
import { X, Search, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Location {
  id: string
  title: string
  category: string
  icon: string
  progress: number
  difficulty: "Pemula" | "Menengah" | "Lanjutan"
  duration: string
  reward: string
}

interface AtlasIndexPanelProps {
  isOpen: boolean
  onClose: () => void
  onLocationSelect: (location: Location) => void
}

export function AtlasIndexPanel({ isOpen, onClose, onLocationSelect }: AtlasIndexPanelProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const locations: Location[] = [
    {
      id: "newton-observatory",
      title: "Observatorium Gravitasi Newton",
      category: "Fisika Klasik",
      icon: "🔭",
      progress: 75,
      difficulty: "Menengah",
      duration: "45 Menit",
      reward: "500 XP",
    },
    {
      id: "mendeleev-lab",
      title: "Laboratorium Kimia Mendeleev",
      category: "Kimia Anorganik",
      icon: "⚗️",
      progress: 100,
      difficulty: "Pemula",
      duration: "30 Menit",
      reward: "350 XP",
    },
    {
      id: "euler-library",
      title: "Perpustakaan Matematika Euler",
      category: "Matematika Lanjutan",
      icon: "📐",
      progress: 45,
      difficulty: "Lanjutan",
      duration: "60 Menit",
      reward: "750 XP",
    },
    {
      id: "darwin-center",
      title: "Pusat Penelitian Biologi Darwin",
      category: "Biologi Evolusi",
      icon: "🧬",
      progress: 0,
      difficulty: "Menengah",
      duration: "50 Menit",
      reward: "600 XP",
    },
    {
      id: "shakespeare-theater",
      title: "Teater Sastra Shakespeare",
      category: "Sastra Inggris",
      icon: "🎭",
      progress: 30,
      difficulty: "Menengah",
      duration: "40 Menit",
      reward: "450 XP",
    },
    {
      id: "confucius-academy",
      title: "Akademi Filosofi Confucius",
      category: "Filosofi Timur",
      icon: "🏮",
      progress: 60,
      difficulty: "Lanjutan",
      duration: "55 Menit",
      reward: "650 XP",
    },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Pemula":
        return "text-green-400"
      case "Menengah":
        return "text-yellow-400"
      case "Lanjutan":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-0 left-0 h-full w-96 z-20 atlas-glass border-r border-white/20">
      {/* Non-scrollable Header */}
      <div className="flex flex-col p-6 border-b border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white font-space-grotesk">Atlas Index</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Cari lokasi pembelajaran..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              onClick={() => onLocationSelect(location)}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:border-cyan-400/50"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{location.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-tight mb-1">{location.title}</h3>
                  <p className="text-xs text-gray-300 mb-2">{location.category}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {location.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {location.reward}
                    </div>
                    <div className={`flex items-center gap-1 ${getDifficultyColor(location.difficulty)}`}>
                      <Star className="w-3 h-3" />
                      {location.difficulty}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${location.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{location.progress}% Complete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
