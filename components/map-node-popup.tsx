"use client"

import { useState } from "react"
import { X, Atom, FlaskConical, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MapNodePopupProps {
  node: {
    title: string
    icon: string
    duration: string
    reward: string
  }
  onClose: () => void
  onStartExpedition: () => void
}

export function MapNodePopup({ node, onClose, onStartExpedition }: MapNodePopupProps) {
  const [isUnfurling, setIsUnfurling] = useState(true)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "atom":
        return <Atom className="w-12 h-12 text-cyan-400 animate-spin-slow" />
      case "flask":
        return <FlaskConical className="w-12 h-12 text-amber-400 animate-pulse" />
      default:
        return <Zap className="w-12 h-12 text-purple-400 animate-bounce" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`relative bg-gradient-to-br from-indigo-900/90 to-slate-900/90 backdrop-blur-xl border-2 border-amber-400/50 rounded-2xl p-8 max-w-md w-full mx-4 atlas-glow-gold transform transition-all duration-700 ${
          isUnfurling ? "scale-0 rotate-12 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
        style={{
          background: `
            linear-gradient(135deg, rgba(30, 58, 120, 0.9), rgba(15, 23, 42, 0.9)),
            url('/ancient-scroll-parchment.png')
          `,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
        onAnimationEnd={() => setIsUnfurling(false)}
      >
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-transparent to-amber-400/20 animate-pulse" />

        {/* Close Button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/30"
          variant="ghost"
          size="icon"
        >
          <X className="w-4 h-4 text-white" />
        </Button>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Animated Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-amber-400/30 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-white/10 rounded-full p-4 border border-white/30">{getIcon(node.icon)}</div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-6 atlas-text-glow font-space-grotesk">{node.title}</h2>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="atlas-glass rounded-lg p-3 border border-white/20">
              <div className="text-xs text-cyan-300 font-dm-sans">Estimasi Selesai</div>
              <div className="text-lg font-bold text-white font-space-grotesk">{node.duration}</div>
            </div>
            <div className="atlas-glass rounded-lg p-3 border border-white/20">
              <div className="text-xs text-amber-300 font-dm-sans">Hadiah</div>
              <div className="text-lg font-bold text-white font-space-grotesk">{node.reward}</div>
            </div>
          </div>

          {/* Start Button */}
          <Button
            onClick={onStartExpedition}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-indigo-900 font-bold py-4 rounded-xl atlas-glow-gold transform hover:scale-105 transition-all duration-300 font-space-grotesk text-lg"
          >
            <span className="animate-pulse">✨</span>
            Mulai Ekspedisi
            <span className="animate-pulse">✨</span>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  )
}
