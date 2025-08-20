"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PlayerStatusHUD() {
  const xpProgress = 75 // 75% to next level

  return (
    <div className="absolute top-6 left-6 z-50">
      <div className="atlas-glass rounded-2xl p-4 min-w-[200px]">
        <div className="flex items-center gap-3">
          {/* Animated Avatar with XP Ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-amber-400 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            <Avatar className="relative w-12 h-12 border-2 border-white/20">
              <AvatarImage src="/mystical-student-avatar.png" />
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold">
                AR
              </AvatarFallback>
            </Avatar>

            {/* XP Progress Ring */}
            <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(6, 182, 212, 0.3)"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#xpGradient)"
                strokeWidth="2"
                strokeDasharray={`${xpProgress}, 100`}
                className="atlas-glow-cyan"
              />
              <defs>
                <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(6, 182, 212)" />
                  <stop offset="100%" stopColor="rgb(251, 191, 36)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Player Info */}
          <div className="flex-1">
            <h3 className="font-bold text-white atlas-text-glow font-space-grotesk">Arini</h3>
            <p className="text-sm text-cyan-300 font-dm-sans">Level 12: Kartografer Aksara</p>
            <div className="mt-1 text-xs text-amber-300">{xpProgress}% to Level 13</div>
          </div>
        </div>
      </div>
    </div>
  )
}
