"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface WorldEvent {
  title: string
  description: string
  rules: string[]
  bonuses: string[]
  endTime: Date
  location: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

export function WorldEventAnnouncement({
  event,
  isOpen,
  onClose,
  onViewLocation,
}: {
  event: WorldEvent | null
  isOpen: boolean
  onClose: () => void
  onViewLocation: () => void
}) {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    if (!event) return

    const updateTimer = () => {
      const now = new Date().getTime()
      const eventEnd = event.endTime.getTime()
      const difference = eventEnd - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days}h ${hours}j ${minutes}m ${seconds}d`)
      } else {
        setTimeLeft("Event Berakhir")
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [event])

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case "common":
        return {
          border: "border-blue-400/50",
          glow: "atlas-glow-cyan",
          gradient: "from-blue-400 to-cyan-400",
          bg: "bg-blue-400/10",
        }
      case "rare":
        return {
          border: "border-purple-400/50",
          glow: "atlas-glow-purple",
          gradient: "from-purple-400 to-pink-400",
          bg: "bg-purple-400/10",
        }
      case "epic":
        return {
          border: "border-amber-400/50",
          glow: "atlas-glow-gold",
          gradient: "from-amber-400 to-orange-400",
          bg: "bg-amber-400/10",
        }
      case "legendary":
        return {
          border: "border-white/50",
          glow: "atlas-glow-white",
          gradient: "from-white to-yellow-300",
          bg: "bg-white/10",
        }
      default:
        return {
          border: "border-gray-400/50",
          glow: "",
          gradient: "from-gray-400 to-gray-500",
          bg: "bg-gray-400/10",
        }
    }
  }

  if (!isOpen || !event) return null

  const styles = getRarityStyles(event.rarity)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card
        className={`w-full max-w-2xl atlas-glass border-4 ${styles.border} ${styles.glow} relative overflow-hidden animate-in zoom-in-95 duration-500`}
      >
        {/* Animated Border Runes/Circuits */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${styles.gradient} animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${styles.gradient} animate-pulse`} />
          <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${styles.gradient} animate-pulse`} />
          <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${styles.gradient} animate-pulse`} />
        </div>

        {/* Mystical Corner Decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-white/30" />
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-white/30" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-white/30" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-white/30" />

        {/* Floating Particles */}
        <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce" />
        <div className="absolute top-12 right-12 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse" />
        <div className="absolute bottom-8 left-16 w-1 h-1 bg-amber-400 rounded-full opacity-70 animate-ping" />

        <div className="relative p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
              <Badge variant="outline" className={`${styles.border} text-white font-bold px-3 py-1 ${styles.bg}`}>
                {event.rarity.toUpperCase()} EVENT
              </Badge>
              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">{event.title}</h1>

            {/* Countdown Timer */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${styles.bg} border ${styles.border}`}>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white font-mono text-lg font-bold">{timeLeft}</span>
            </div>
          </div>

          {/* Event Description */}
          <div className="mb-6">
            <p className="text-gray-300 text-center text-lg leading-relaxed">{event.description}</p>
          </div>

          {/* Rules and Bonuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="atlas-glass border border-cyan-400/30 p-4">
              <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <span>⚡</span> Aturan Event
              </h3>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="atlas-glass border border-amber-400/30 p-4">
              <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                <span>🎁</span> Bonus Khusus
              </h3>
              <ul className="space-y-2">
                {event.bonuses.map((bonus, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    {bonus}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={onViewLocation}
              className={`bg-gradient-to-r ${styles.gradient} hover:opacity-90 text-slate-900 font-bold px-8 py-3 text-lg ${styles.glow}`}
            >
              🗺️ Lihat Lokasi di Atlas
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-white/30 text-white hover:bg-white/10 px-6 py-3 bg-transparent"
            >
              Nanti Saja
            </Button>
          </div>

          {/* Location Info */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              📍 Lokasi: <span className="text-white font-semibold">{event.location}</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
