"use client"

import { useEffect, useState } from "react"

interface AscensionEventProps {
  level: number
  title: string
}

export function AscensionEvent({ level, title }: AscensionEventProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const phases = [
      () => setPhase(1), // Flash
      () => setPhase(2), // Badge assembly
      () => setPhase(3), // Shockwave
      () => setPhase(4), // Title reveal
    ]

    phases.forEach((phaseFunc, index) => {
      setTimeout(phaseFunc, index * 800)
    })
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Flash Effect */}
      {phase >= 1 && (
        <div className="absolute inset-0 bg-gradient-radial from-amber-400 via-yellow-300 to-transparent animate-ping" />
      )}

      {/* Nebula Background */}
      {phase >= 2 && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-cyan-900/80 animate-pulse">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.3)_0%,rgba(6,182,212,0.2)_50%,transparent_100%)] animate-spin-slow" />
        </div>
      )}

      {/* Level Badge Assembly */}
      {phase >= 2 && (
        <div className="relative z-10">
          {/* Badge Pieces */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-8 border-amber-400 atlas-glow-gold animate-spin-slow" />

            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border-4 border-cyan-400 atlas-glow-cyan animate-spin-reverse" />

            {/* Center Gem */}
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full flex items-center justify-center atlas-glow-gold animate-pulse">
              <span className="text-4xl font-bold text-indigo-900 font-space-grotesk">{level}</span>
            </div>

            {/* Decorative Elements */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full atlas-glow-cyan"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-120px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Shockwave Effect */}
          {phase >= 3 && (
            <div className="absolute inset-0 rounded-full border-4 border-white animate-ping scale-150 opacity-50" />
          )}
        </div>
      )}

      {/* Title Reveal */}
      {phase >= 4 && (
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-6xl font-bold text-white atlas-text-glow font-space-grotesk tracking-wider animate-in slide-in-from-bottom duration-1000">
            LEVEL {level}
          </h1>
          <h2 className="text-3xl font-bold text-amber-400 atlas-text-glow font-space-grotesk mt-4 animate-in slide-in-from-bottom duration-1000 delay-300">
            {title}
          </h2>
        </div>
      )}
    </div>
  )
}
