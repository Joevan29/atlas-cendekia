"use client"

import { X, Clock, Award, Star, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandmarkDetailModalProps {
  landmark: any
  isOpen: boolean
  onClose: () => void
  onStartExpedition: () => void
}

export function LandmarkDetailModal({ landmark, isOpen, onClose, onStartExpedition }: LandmarkDetailModalProps) {
  if (!isOpen || !landmark) return null

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Pemula":
        return "text-green-400 border-green-400/30 bg-green-400/10"
      case "Menengah":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
      case "Lanjutan":
        return "text-red-400 border-red-400/30 bg-red-400/10"
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-xl border border-slate-600 max-w-2xl w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_25%,rgba(6,182,212,0.1)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.1)_75%)] bg-[length:20px_20px]" />

          <div className="relative flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white font-space-grotesk mb-2">{landmark.title}</h2>
              <p className="text-cyan-300 font-medium">{landmark.type}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 leading-relaxed">{landmark.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Estimasi Waktu</span>
              </div>
              <p className="text-cyan-300 font-semibold">{landmark.duration}</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Hadiah</span>
              </div>
              <p className="text-yellow-300 font-semibold">{landmark.reward}</p>
            </div>

            <div className={`p-4 rounded-lg border ${getDifficultyColor(landmark.difficulty)}`}>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium text-white">Tingkat Kesulitan</span>
              </div>
              <p className="font-semibold">{landmark.difficulty}</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Prasyarat</span>
              </div>
              <div className="space-y-1">
                {landmark.prerequisites ? (
                  landmark.prerequisites.map((prereq: string, index: number) => (
                    <p key={index} className="text-purple-300 text-sm">
                      • {prereq}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">Tidak ada prasyarat</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={onStartExpedition}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3"
            >
              Mulai Ekspedisi
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="px-6 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
