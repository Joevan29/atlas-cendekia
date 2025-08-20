"use client"

import { useState } from "react"
import { Atom, FlaskConical, BookOpen, Scroll, Pyramid, Feather, Zap } from "lucide-react"

interface InteractiveLandmarkProps {
  id: string
  type: "science" | "history" | "language" | "mathematics" | "biology" | "chemistry"
  position: { top: string; left: string }
  status: "normal" | "active" | "completed"
  onClick: () => void
}

export function InteractiveLandmark({ id, type, position, status, onClick }: InteractiveLandmarkProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showRipple, setShowRipple] = useState(false)

  const getIcon = () => {
    switch (type) {
      case "science":
        return <Atom className="w-6 h-6" />
      case "chemistry":
        return <FlaskConical className="w-6 h-6" />
      case "history":
        return <Pyramid className="w-6 h-6" />
      case "language":
        return <Feather className="w-6 h-6" />
      case "mathematics":
        return <Zap className="w-6 h-6" />
      case "biology":
        return <BookOpen className="w-6 h-6" />
      default:
        return <Scroll className="w-6 h-6" />
    }
  }

  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return {
          bg: "bg-gradient-to-r from-emerald-400 to-green-500",
          glow: "atlas-glow-green",
          animation: "animate-pulse",
          border: "border-emerald-400/50",
        }
      case "completed":
        return {
          bg: "bg-gradient-to-r from-amber-400 to-yellow-500",
          glow: "atlas-glow-gold",
          animation: "",
          border: "border-amber-400/50",
        }
      default:
        return {
          bg: "bg-gradient-to-r from-cyan-400 to-blue-500",
          glow: "atlas-glow-cyan",
          animation: "animate-pulse",
          border: "border-cyan-400/50",
        }
    }
  }

  const handleClick = () => {
    setShowRipple(true)
    setTimeout(() => setShowRipple(false), 600)
    onClick()
  }

  const statusStyles = getStatusStyles()

  return (
    <div
      className="absolute pointer-events-auto"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ripple Effect */}
      {showRipple && (
        <div className="absolute inset-0 -m-4">
          <div className="w-16 h-16 rounded-full border-2 border-cyan-400/50 animate-ping" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border border-cyan-400/30 animate-ping animation-delay-150" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border border-cyan-400/20 animate-ping animation-delay-300" />
        </div>
      )}

      {/* Progress Indicator for Active Status */}
      {status === "active" && (
        <div className="absolute -inset-2">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-emerald-400/30"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-400 animate-pulse"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="60, 100"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      )}

      {/* Main Landmark Icon */}
      <button
        onClick={handleClick}
        className={`
          relative w-8 h-8 rounded-full flex items-center justify-center text-white
          ${statusStyles.bg} ${statusStyles.glow} ${statusStyles.animation}
          border-2 ${statusStyles.border}
          transform transition-all duration-300
          ${isHovered ? "scale-125 brightness-125" : "scale-100"}
          hover:shadow-lg hover:shadow-cyan-400/25
        `}
      >
        {/* Holographic Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />

        {/* Icon */}
        <div className="relative z-10">{getIcon()}</div>

        {/* Completion Seal */}
        {status === "completed" && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center border border-amber-300">
            <div className="text-xs text-indigo-900 font-bold">✓</div>
          </div>
        )}
      </button>

      {/* Hover Information */}
      {isHovered && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 text-white text-xs whitespace-nowrap z-50">
          <div className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)} Landmark</div>
          <div className="text-cyan-300">
            {status === "completed" ? "Completed" : status === "active" ? "In Progress" : "Available"}
          </div>
        </div>
      )}
    </div>
  )
}
