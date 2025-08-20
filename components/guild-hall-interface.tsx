"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface GuildMember {
  id: string
  name: string
  level: number
  avatar: string
  isOnline: boolean
  xp: number
}

interface ChatMessage {
  id: string
  author: string
  message: string
  timestamp: string
}

interface GuildExpedition {
  title: string
  description: string
  progress: number
  maxProgress: number
  reward: string
  timeLeft: string
}

interface GuildRanking {
  rank: number
  name: string
  totalXP: number
  isCurrentGuild: boolean
}

export function GuildHallInterface({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("anggota")

  const guildMembers: GuildMember[] = [
    { id: "1", name: "Aria Starweaver", level: 15, avatar: "/fantasy-scholar.png", isOnline: true, xp: 12500 },
    { id: "2", name: "Magnus Thornfield", level: 12, avatar: "/wise-mage.png", isOnline: true, xp: 9800 },
    { id: "3", name: "Luna Brightmoon", level: 18, avatar: "/mystical-student.png", isOnline: false, xp: 15200 },
    { id: "4", name: "Kai Stormwind", level: 10, avatar: "/young-scholar.png", isOnline: true, xp: 7500 },
  ]

  const chatMessages: ChatMessage[] = [
    {
      id: "1",
      author: "Aria Starweaver",
      message: "Siapa yang mau bergabung ekspedisi Matematika Kuantum?",
      timestamp: "14:32",
    },
    {
      id: "2",
      author: "Magnus Thornfield",
      message: "Aku siap! Sudah menyelesaikan prerequisite-nya",
      timestamp: "14:35",
    },
    { id: "3", author: "Luna Brightmoon", message: "Bagus! Kita bisa mulai jam 15:00", timestamp: "14:38" },
    { id: "4", author: "Kai Stormwind", message: "Masih ada slot? Aku ingin ikut juga", timestamp: "14:40" },
  ]

  const currentExpedition: GuildExpedition = {
    title: "Penaklukan Dimensi Fisika",
    description: "Jelajahi konsep-konsep fisika quantum dan relativitas dalam ekspedisi guild bersama",
    progress: 750,
    maxProgress: 1000,
    reward: "Kristal Pengetahuan Legendaris + 2500 XP",
    timeLeft: "2 hari 14 jam",
  }

  const guildRankings: GuildRanking[] = [
    { rank: 1, name: "Akademi Bintang Utara", totalXP: 125000, isCurrentGuild: false },
    { rank: 2, name: "Persaudaraan Cahaya", totalXP: 118500, isCurrentGuild: true },
    { rank: 3, name: "Ordo Kebijaksanaan", totalXP: 112300, isCurrentGuild: false },
    { rank: 4, name: "Liga Penjelajah Ilmu", totalXP: 108900, isCurrentGuild: false },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[80vh] atlas-glass border-2 border-amber-400/30 relative overflow-hidden">
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-transparent to-cyan-400/20 animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.1)_49%,rgba(251,191,36,0.1)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse" />

        {/* Header */}
        <div className="relative p-6 border-b border-amber-400/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg atlas-glow-gold flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">PS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Persaudaraan Cahaya</h1>
                <p className="text-amber-400 italic">"Illuminare et Discere - Menerangi dan Belajar"</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              ✕
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 h-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
            <TabsList className="grid w-full grid-cols-4 atlas-glass border border-amber-400/30">
              <TabsTrigger
                value="anggota"
                className="data-[state=active]:bg-amber-400/20 data-[state=active]:text-amber-400"
              >
                Anggota
              </TabsTrigger>
              <TabsTrigger
                value="obrolan"
                className="data-[state=active]:bg-amber-400/20 data-[state=active]:text-amber-400"
              >
                Obrolan Gilda
              </TabsTrigger>
              <TabsTrigger
                value="ekspedisi"
                className="data-[state=active]:bg-amber-400/20 data-[state=active]:text-amber-400"
              >
                Ekspedisi Aktif
              </TabsTrigger>
              <TabsTrigger
                value="peringkat"
                className="data-[state=active]:bg-amber-400/20 data-[state=active]:text-amber-400"
              >
                Peringkat Gilda
              </TabsTrigger>
            </TabsList>

            <TabsContent value="anggota" className="mt-6 h-full">
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {guildMembers.map((member) => (
                    <Card key={member.id} className="p-4 atlas-glass border border-amber-400/20">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${
                              member.isOnline ? "bg-green-400 atlas-glow-cyan" : "bg-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{member.name}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-amber-400/50 text-amber-400">
                              Level {member.level}
                            </Badge>
                            <span className="text-sm text-gray-400">{member.xp.toLocaleString()} XP</span>
                          </div>
                        </div>
                        <Badge
                          variant={member.isOnline ? "default" : "secondary"}
                          className={member.isOnline ? "bg-green-500/20 text-green-400 border-green-400/50" : ""}
                        >
                          {member.isOnline ? "Online" : "Offline"}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="obrolan" className="mt-6 h-full">
              <Card className="h-[400px] atlas-glass border border-cyan-400/30 flex flex-col">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className="flex gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {message.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white text-sm">{message.author}</span>
                            <span className="text-xs text-gray-400">{message.timestamp}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t border-cyan-400/30">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ketik pesan..."
                      className="flex-1 bg-slate-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Kirim</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ekspedisi" className="mt-6 h-full">
              <Card className="p-6 atlas-glass border border-amber-400/30">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{currentExpedition.title}</h3>
                    <p className="text-gray-300">{currentExpedition.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Progress Kolektif</span>
                      <span className="text-amber-400">
                        {currentExpedition.progress}/{currentExpedition.maxProgress}
                      </span>
                    </div>
                    <Progress
                      value={(currentExpedition.progress / currentExpedition.maxProgress) * 100}
                      className="h-3 bg-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="atlas-glass p-4 rounded-lg border border-amber-400/20">
                      <h4 className="text-amber-400 font-semibold mb-1">Hadiah</h4>
                      <p className="text-white text-sm">{currentExpedition.reward}</p>
                    </div>
                    <div className="atlas-glass p-4 rounded-lg border border-cyan-400/20">
                      <h4 className="text-cyan-400 font-semibold mb-1">Waktu Tersisa</h4>
                      <p className="text-white text-sm">{currentExpedition.timeLeft}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold">
                    Lanjutkan Ekspedisi
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="peringkat" className="mt-6 h-full">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {guildRankings.map((guild) => (
                    <Card
                      key={guild.rank}
                      className={`p-4 border ${
                        guild.isCurrentGuild
                          ? "atlas-glass border-amber-400/50 bg-amber-400/10"
                          : "atlas-glass border-slate-600/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            guild.rank === 1
                              ? "bg-yellow-500 text-slate-900"
                              : guild.rank === 2
                                ? "bg-gray-400 text-slate-900"
                                : guild.rank === 3
                                  ? "bg-amber-600 text-white"
                                  : "bg-slate-600 text-white"
                          }`}
                        >
                          {guild.rank}
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${guild.isCurrentGuild ? "text-amber-400" : "text-white"}`}>
                            {guild.name}
                            {guild.isCurrentGuild && <span className="ml-2 text-sm">(Guild Anda)</span>}
                          </h3>
                          <p className="text-gray-400 text-sm">{guild.totalXP.toLocaleString()} Total XP</p>
                        </div>
                        {guild.rank <= 3 && (
                          <div className="text-2xl">{guild.rank === 1 ? "🥇" : guild.rank === 2 ? "🥈" : "🥉"}</div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
