"use client"

import { useState, useEffect } from "react"
import { X, Clock, Star, Zap, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnhancedMapPopupProps {
  landmark: {
    id: string
    title: string
    type: string
    description: string
    duration: string
    reward: string
    difficulty: "Pemula" | "Menengah" | "Lanjutan" | "Master"
    prerequisites?: string[]
  }
  onClose: () => void
  onStartExpedition: () => void
}

export function EnhancedMapPopup({ landmark, onClose, onStartExpedition }: EnhancedMapPopupProps) {
  const [isUnfurling, setIsUnfurling] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsUnfurling(false), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isUnfurling) {
      const progressTimer = setInterval(() => {
        setScrollProgress((prev) => (prev < 100 ? prev + 2 : 100))
      }, 20)
      return () => clearInterval(progressTimer)
    }
  }, [isUnfurling])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Pemula":
        return "text-green-400"
      case "Menengah":
        return "text-yellow-400"
      case "Lanjutan":
        return "text-orange-400"
      case "Master":
        return "text-red-400"
      default:
        return "text-cyan-400"
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Blueprint/Scroll Container */}
      <div
        className={`relative max-w-lg w-full mx-4 transform transition-all duration-700 ${
          isUnfurling ? "scale-75 rotate-3 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      >
        {/* Scroll Paper Effect */}
        <div
          className="relative bg-gradient-to-br from-slate-800/95 to-indigo-900/95 backdrop-blur-xl rounded-2xl border-2 border-cyan-400/30 overflow-hidden"
          style={{
            background: `
              linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(30, 58, 120, 0.95)),
              radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1), transparent),
              radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1), transparent)
            `,
          }}
        >
          {/* Holographic Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(6,182,212,0.2)_25px,rgba(6,182,212,0.2)_26px,transparent_27px)] bg-[length:30px_30px]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(6,182,212,0.2)_25px,rgba(6,182,212,0.2)_26px,transparent_27px)] bg-[length:30px_30px]" />
          </div>

          {/* Unfurling Animation Effect */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400/20 to-transparent transition-all duration-1000"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 z-10"
            variant="ghost"
            size="icon"
          >
            <X className="w-4 h-4 text-white" />
          </Button>

          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Header with Holographic Title */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <h2 className="text-2xl font-bold text-white atlas-text-glow font-space-grotesk mb-2">
                  {landmark.title}
                </h2>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>
              <p className="text-cyan-300 font-dm-sans text-sm mt-2">{landmark.type}</p>
            </div>

            {/* Description */}
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/90 font-dm-sans leading-relaxed">{landmark.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Duration */}
              <div className="atlas-glass rounded-xl p-4 border border-cyan-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-cyan-300 font-dm-sans">Estimasi Waktu</span>
                </div>
                <div className="text-lg font-bold text-white font-space-grotesk">{landmark.duration}</div>
              </div>

              {/* Reward */}
              <div className="atlas-glass rounded-xl p-4 border border-amber-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-300 font-dm-sans">Hadiah</span>
                </div>
                <div className="text-lg font-bold text-white font-space-grotesk">{landmark.reward}</div>
              </div>
            </div>

            {/* Difficulty & Prerequisites */}
            <div className="mb-6 space-y-3">
              {/* Difficulty */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-white/70" />
                  <span className="text-sm text-white/70 font-dm-sans">Tingkat Kesulitan</span>
                </div>
                <span className={`font-bold font-space-grotesk ${getDifficultyColor(landmark.difficulty)}`}>
                  {landmark.difficulty}
                </span>
              </div>

              {/* Prerequisites */}
              {landmark.prerequisites && landmark.prerequisites.length > 0 && (
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-white/70" />
                    <span className="text-sm text-white/70 font-dm-sans">Prasyarat</span>
                  </div>
                  <div className="space-y-1">
                    {landmark.prerequisites.map((prereq, index) => (
                      <div key={index} className="text-xs text-cyan-300 font-dm-sans">
                        • {prereq}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <Button
              onClick={onStartExpedition}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl atlas-glow-cyan transform hover:scale-105 transition-all duration-300 font-space-grotesk text-lg"
            >
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Mulai Ekspedisi
              <Zap className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>

          {/* Decorative Holographic Borders */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
