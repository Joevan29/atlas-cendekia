"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Skill {
  id: string
  name: string
  description: string
  cost: number
  isUnlocked: boolean
  isAvailable: boolean
  position: { x: number; y: number }
  connections: string[]
  category: "foundation" | "advanced" | "mastery" | "transcendent"
}

export function CosmicSkillTree({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [starPoints, setStarPoints] = useState(150)

  const skills: Skill[] = [
    // Foundation Skills
    {
      id: "focus",
      name: "Fokus Mendalam",
      description: "Meningkatkan konsentrasi saat belajar. +25% XP dari semua aktivitas.",
      cost: 10,
      isUnlocked: true,
      isAvailable: true,
      position: { x: 50, y: 80 },
      connections: ["memory", "speed"],
      category: "foundation",
    },
    {
      id: "memory",
      name: "Memori Fotografis",
      description: "Mengingat informasi lebih lama. Mengurangi waktu review sebesar 30%.",
      cost: 15,
      isUnlocked: false,
      isAvailable: true,
      position: { x: 25, y: 60 },
      connections: ["pattern"],
      category: "foundation",
    },
    {
      id: "speed",
      name: "Pemrosesan Cepat",
      description: "Menyelesaikan soal lebih cepat. +20% kecepatan penyelesaian.",
      cost: 15,
      isUnlocked: false,
      isAvailable: true,
      position: { x: 75, y: 60 },
      connections: ["intuition"],
      category: "foundation",
    },

    // Advanced Skills
    {
      id: "pattern",
      name: "Pengenalan Pola",
      description: "Mendeteksi pola tersembunyi dalam soal kompleks. +15% akurasi.",
      cost: 25,
      isUnlocked: false,
      isAvailable: false,
      position: { x: 25, y: 40 },
      connections: ["synthesis"],
      category: "advanced",
    },
    {
      id: "intuition",
      name: "Intuisi Ilmiah",
      description: "Memahami konsep tanpa penjelasan detail. Membuka jalur pembelajaran alternatif.",
      cost: 25,
      isUnlocked: false,
      isAvailable: false,
      position: { x: 75, y: 40 },
      connections: ["innovation"],
      category: "advanced",
    },

    // Mastery Skills
    {
      id: "synthesis",
      name: "Sintesis Pengetahuan",
      description: "Menggabungkan konsep dari berbagai bidang. Membuka quest interdisipliner.",
      cost: 40,
      isUnlocked: false,
      isAvailable: false,
      position: { x: 35, y: 20 },
      connections: ["transcendence"],
      category: "mastery",
    },
    {
      id: "innovation",
      name: "Inovasi Kreatif",
      description: "Menciptakan solusi unik untuk masalah kompleks. +50% XP dari eksplorasi bebas.",
      cost: 40,
      isUnlocked: false,
      isAvailable: false,
      position: { x: 65, y: 20 },
      connections: ["transcendence"],
      category: "mastery",
    },

    // Transcendent Skill
    {
      id: "transcendence",
      name: "Transendensi Intelektual",
      description: "Mencapai pemahaman yang melampaui batas konvensional. Membuka dimensi pembelajaran baru.",
      cost: 100,
      isUnlocked: false,
      isAvailable: false,
      position: { x: 50, y: 5 },
      connections: [],
      category: "transcendent",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "foundation":
        return "from-blue-400 to-cyan-400"
      case "advanced":
        return "from-purple-400 to-pink-400"
      case "mastery":
        return "from-amber-400 to-orange-400"
      case "transcendent":
        return "from-white to-yellow-300"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getSkillGlow = (skill: Skill) => {
    if (skill.isUnlocked) return "atlas-glow-gold"
    if (skill.isAvailable) return "atlas-glow-cyan"
    return ""
  }

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill)
  }

  const handleUnlockSkill = (skill: Skill) => {
    if (skill.isAvailable && !skill.isUnlocked && starPoints >= skill.cost) {
      setStarPoints((prev) => prev - skill.cost)
      // In a real app, you'd update the skill state here
      setSelectedSkill(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[90vh] atlas-glass border-2 border-purple-400/30 relative overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_70%)]" />

        {/* Animated Stars */}
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />

        {/* Header */}
        <div className="relative p-6 border-b border-purple-400/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Pohon Keahlian Kosmik</h1>
              <p className="text-purple-300">Buka kemampuan transendental untuk pembelajaran yang lebih dalam</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full atlas-glow-gold" />
                <span className="text-white font-semibold">{starPoints} Poin Bintang</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                ✕
              </Button>
            </div>
          </div>
        </div>

        {/* Skill Tree Constellation */}
        <div className="relative p-6 h-full">
          <div className="relative w-full h-[600px] overflow-hidden">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {skills.map((skill) =>
                skill.connections.map((connectionId) => {
                  const connectedSkill = skills.find((s) => s.id === connectionId)
                  if (!connectedSkill) return null

                  const isActive = skill.isUnlocked && connectedSkill.isUnlocked

                  return (
                    <line
                      key={`${skill.id}-${connectionId}`}
                      x1={`${skill.position.x}%`}
                      y1={`${skill.position.y}%`}
                      x2={`${connectedSkill.position.x}%`}
                      y2={`${connectedSkill.position.y}%`}
                      stroke={isActive ? "#fbbf24" : "#6b7280"}
                      strokeWidth="2"
                      className={isActive ? "atlas-glow-gold" : ""}
                      opacity={isActive ? 1 : 0.3}
                    />
                  )
                }),
              )}
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill) => (
              <button
                key={skill.id}
                className={`absolute w-16 h-16 rounded-full border-2 transition-all duration-300 transform hover:scale-110 ${
                  skill.isUnlocked
                    ? `bg-gradient-to-r ${getCategoryColor(skill.category)} border-white/50 ${getSkillGlow(skill)}`
                    : skill.isAvailable
                      ? `bg-gradient-to-r ${getCategoryColor(skill.category)} opacity-60 border-white/30 ${getSkillGlow(skill)} animate-pulse`
                      : "bg-gray-600 border-gray-500 opacity-30"
                }`}
                style={{
                  left: `${skill.position.x}%`,
                  top: `${skill.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleSkillClick(skill)}
              >
                <div className="flex items-center justify-center h-full">
                  {skill.isUnlocked ? (
                    <span className="text-2xl">⭐</span>
                  ) : skill.isAvailable ? (
                    <span className="text-xl opacity-70">✦</span>
                  ) : (
                    <span className="text-lg opacity-50">○</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Skill Detail Panel */}
          {selectedSkill && (
            <Card className="absolute bottom-6 left-6 right-6 h-40 atlas-glass border border-purple-400/30 p-4">
              <div className="flex justify-between items-start h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                    <Badge
                      variant="outline"
                      className={`border-${
                        selectedSkill.category === "foundation"
                          ? "blue"
                          : selectedSkill.category === "advanced"
                            ? "purple"
                            : selectedSkill.category === "mastery"
                              ? "amber"
                              : "white"
                      }-400/50 
                                 text-${
                                   selectedSkill.category === "foundation"
                                     ? "blue"
                                     : selectedSkill.category === "advanced"
                                       ? "purple"
                                       : selectedSkill.category === "mastery"
                                         ? "amber"
                                         : "white"
                                 }-400`}
                    >
                      {selectedSkill.category.charAt(0).toUpperCase() + selectedSkill.category.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{selectedSkill.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full atlas-glow-gold" />
                    <span className="text-amber-400 font-semibold">{selectedSkill.cost} Poin Bintang</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedSkill.isUnlocked ? (
                    <Badge className="bg-green-500/20 text-green-400 border-green-400/50">Terbuka</Badge>
                  ) : selectedSkill.isAvailable ? (
                    <Button
                      onClick={() => handleUnlockSkill(selectedSkill)}
                      disabled={starPoints < selectedSkill.cost}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      Buka Keahlian
                    </Button>
                  ) : (
                    <Badge variant="outline" className="border-gray-500 text-gray-400">
                      Terkunci
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSkill(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    Tutup
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Card>
    </div>
  )
}
