"use client"

import { useState } from "react"
import { Check, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Quest {
  id: string
  title: string
  completed: boolean
}

interface QuestTrackerProps {
  onMenuClick: () => void
}

export function QuestTracker({ onMenuClick }: QuestTrackerProps) {
  const [quests, setQuests] = useState<Quest[]>([
    { id: "1", title: "Jelajahi 3 Observatorium", completed: false },
    { id: "2", title: "Selesaikan Misi Fisika Kuantum", completed: true },
    { id: "3", title: "Temukan Artefak Matematika", completed: false },
  ])

  const completeQuest = (questId: string) => {
    setQuests((prev) => prev.map((quest) => (quest.id === questId ? { ...quest, completed: true } : quest)))
  }

  return (
    <div className="absolute top-6 right-6 z-50 flex items-start gap-4">
      {/* Menu Button */}
      <Button
        onClick={onMenuClick}
        className="atlas-glass w-12 h-12 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
        variant="ghost"
        size="icon"
      >
        <Menu className="w-5 h-5 text-white" />
      </Button>

      {/* Quest Tracker */}
      <div className="atlas-hologram rounded-xl p-4 min-w-[280px] border border-cyan-400/30">
        <h3 className="font-bold text-cyan-300 mb-3 atlas-text-glow font-space-grotesk">Misi Harian Aktif</h3>

        <div className="space-y-2">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                quest.completed
                  ? "bg-green-500/20 border border-green-400/30"
                  : "bg-white/10 border border-white/20 hover:bg-white/20"
              }`}
            >
              <button
                onClick={() => !quest.completed && completeQuest(quest.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  quest.completed
                    ? "bg-green-500 border-green-400 atlas-glow-cyan"
                    : "border-cyan-400 hover:border-amber-400"
                }`}
              >
                {quest.completed && <Check className="w-3 h-3 text-white animate-in zoom-in duration-300" />}
              </button>

              <span
                className={`text-sm font-dm-sans ${quest.completed ? "text-green-300 line-through" : "text-white"}`}
              >
                {quest.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
