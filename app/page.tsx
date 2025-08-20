"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  Calendar,
  Search,
  X,
  Building2,
  TreePine,
  Zap,
  User,
  Award,
  BookOpen,
  Edit2,
  Check,
  BarChart3,
  Map,
  Library,
  FlaskConical,
  Telescope,
  GraduationCap,
} from "lucide-react"

export default function AtlasCendekiaPage() {
  const [showAtlasIndex, setShowAtlasIndex] = useState(false)
  const [showDailyMissions, setShowDailyMissions] = useState(false)
  const [selectedLandmark, setSelectedLandmark] = useState<any>(null)
  const [showLandmarks, setShowLandmarks] = useState(true)
  const [showProfile, setShowProfile] = useState(false)
  const [showGuildHall, setShowGuildHall] = useState(false)
  const [showSkillTree, setShowSkillTree] = useState(false)
  const [showWorldEvent, setShowWorldEvent] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [editingName, setEditingName] = useState(false)
  const [profileName, setProfileName] = useState("Joevan")
  const [tempName, setTempName] = useState("Joevan")
  const [currentView, setCurrentView] = useState("map") // map, library, laboratory, observatory, classroom

  const handleDailyMissionsClick = () => {
    setShowDailyMissions(!showDailyMissions)
  }

  const handleNameEdit = () => {
    setEditingName(true)
    setTempName(profileName)
  }

  const handleNameSave = () => {
    setProfileName(tempName)
    setEditingName(false)
  }

  const handleNameCancel = () => {
    setTempName(profileName)
    setEditingName(false)
  }

  const handleViewChange = (view: string) => {
    setCurrentView(view)
    setShowAtlasIndex(false)
  }

  const dailyTasks = [
    { id: 1, text: "Selesaikan 3 modul Fisika Kuantum", completed: true },
    { id: 2, text: "Kunjungi Laboratorium Kimia Virtual", completed: false },
    { id: 3, text: "Diskusi dengan 2 anggota guild", completed: false },
  ]

  const locations = [
    {
      id: 1,
      title: "Observatorium Newton",
      icon: "🔭",
      progress: 85,
      type: "Fisika",
      completed: false,
      lastVisited: "2 hari lalu",
    },
    {
      id: 2,
      title: "Lab Mendeleev",
      icon: "⚗️",
      progress: 100,
      type: "Kimia",
      completed: true,
      lastVisited: "1 hari lalu",
    },
    {
      id: 3,
      title: "Perpustakaan Euler",
      icon: "📚",
      progress: 60,
      type: "Matematika",
      completed: false,
      lastVisited: "3 hari lalu",
    },
    {
      id: 4,
      title: "Pusat Darwin",
      icon: "🧬",
      progress: 30,
      type: "Biologi",
      completed: false,
      lastVisited: "5 hari lalu",
    },
    {
      id: 5,
      title: "Akademi Tesla",
      icon: "⚡",
      progress: 0,
      type: "Fisika",
      completed: false,
      lastVisited: "Belum dikunjungi",
    },
    {
      id: 6,
      title: "Galeri Da Vinci",
      icon: "🎨",
      progress: 45,
      type: "Seni",
      completed: false,
      lastVisited: "4 hari lalu",
    },
    {
      id: 7,
      title: "Stasiun Luar Angkasa Gagarin",
      icon: "🚀",
      progress: 0,
      type: "Astronomi",
      completed: false,
      lastVisited: "Belum dikunjungi",
    },
    {
      id: 8,
      title: "Perpustakaan Kuno Alexandria",
      icon: "📜",
      progress: 0,
      type: "Sejarah",
      completed: false,
      lastVisited: "Belum dikunjungi",
    },
  ]

  const dashboardData = {
    totalProgress: Math.round(locations.reduce((acc, loc) => acc + loc.progress, 0) / locations.length),
    completedLocations: locations.filter((loc) => loc.completed).length,
    totalLocations: locations.length,
    totalXPEarned: 15420,
    weeklyProgress: 340,
    recentActivities: [
      { action: "Menyelesaikan", location: "Lab Mendeleev", time: "1 hari lalu", xp: 650 },
      { action: "Progress di", location: "Observatorium Newton", time: "2 hari lalu", xp: 200 },
      { action: "Memulai", location: "Galeri Da Vinci", time: "4 hari lalu", xp: 100 },
      { action: "Eksplorasi", location: "Perpustakaan Euler", time: "3 hari lalu", xp: 150 },
    ],
    weeklyStats: [
      { day: "Sen", xp: 120 },
      { day: "Sel", xp: 200 },
      { day: "Rab", xp: 150 },
      { day: "Kam", xp: 300 },
      { day: "Jum", xp: 180 },
      { day: "Sab", xp: 250 },
      { day: "Min", xp: 340 },
    ],
  }

  const profileData = {
    name: profileName,
    title: "Kartografer Aksara",
    level: 12,
    xp: 2340,
    maxXp: 3000,
    joinDate: "15 Maret 2024",
    totalExpeditions: 47,
    completedQuests: 156,
    achievements: [
      { name: "Penjelajah Pemula", icon: "🗺️", description: "Menyelesaikan 10 ekspedisi pertama" },
      { name: "Master Fisika", icon: "⚛️", description: "Menguasai semua modul Fisika Dasar" },
      { name: "Kolaborator", icon: "🤝", description: "Bergabung dengan 5 guild berbeda" },
      { name: "Peneliti Ulung", icon: "🔬", description: "Menyelesaikan 50 eksperimen" },
    ],
    stats: {
      fisika: 85,
      kimia: 92,
      matematika: 78,
      biologi: 65,
    },
  }

  const landmarkData = {
    observatory: {
      title: "Observatorium Gravitasi Newton",
      description:
        "Jelajahi hukum-hukum gravitasi dan mekanika klasik dalam observatorium holografik yang menampilkan simulasi gerakan planet dan benda langit.",
      estimatedTime: "45 Menit",
      rewards: "500 XP + Medali Newton",
      difficulty: "Menengah",
      prerequisites: ["Dasar-dasar Fisika", "Matematika Vektor"],
    },
    laboratory: {
      title: "Laboratorium Kimia Mendeleev",
      description:
        "Eksperimen dengan unsur-unsur kimia dalam laboratorium virtual yang aman. Pelajari tabel periodik dan reaksi kimia melalui simulasi interaktif.",
      estimatedTime: "60 Menit",
      rewards: "650 XP + Kristal Energi",
      difficulty: "Lanjutan",
      prerequisites: ["Kimia Dasar", "Matematika Stoikiometri"],
    },
    library: {
      title: "Perpustakaan Matematika Euler",
      description:
        "Temukan keajaiban matematika dalam perpustakaan digital yang berisi teorema, rumus, dan puzzle matematika dari berbagai era.",
      estimatedTime: "40 Menit",
      rewards: "450 XP + Scroll Wisdom",
      difficulty: "Menengah",
      prerequisites: ["Aljabar Dasar", "Geometri"],
    },
    bioCenter: {
      title: "Pusat Biologi Darwin",
      description:
        "Jelajahi evolusi kehidupan dan ekosistem dalam simulasi 3D yang menampilkan berbagai spesies dan habitat alami.",
      estimatedTime: "50 Menit",
      rewards: "550 XP + Fosil Langka",
      difficulty: "Pemula",
      prerequisites: ["Biologi Dasar"],
    },
    academy: {
      title: "Akademi Listrik Tesla",
      description:
        "Pelajari fenomena kelistrikan dan magnetisme melalui eksperimen virtual yang spektakuler dengan kilat dan medan magnet.",
      estimatedTime: "55 Menit",
      rewards: "600 XP + Coil Tesla",
      difficulty: "Lanjutan",
      prerequisites: ["Fisika Listrik", "Kalkulus Dasar"],
    },
    gallery: {
      title: "Galeri Seni Da Vinci",
      description:
        "Eksplorasi seni Renaissance dan teknik melukis master dalam galeri interaktif dengan teknologi AR yang memukau.",
      estimatedTime: "35 Menit",
      rewards: "400 XP + Palet Emas",
      difficulty: "Pemula",
      prerequisites: ["Sejarah Seni"],
    },
    spaceStation: {
      title: "Stasiun Luar Angkasa Gagarin",
      description:
        "Simulasi perjalanan luar angkasa dan eksplorasi tata surya dengan teknologi hologram yang realistis.",
      estimatedTime: "70 Menit",
      rewards: "750 XP + Meteorit",
      difficulty: "Expert",
      prerequisites: ["Fisika Lanjutan", "Astronomi"],
    },
    ancientLibrary: {
      title: "Perpustakaan Kuno Alexandria",
      description:
        "Jelajahi sejarah peradaban kuno dan temukan manuskrip langka dalam perpustakaan holografik yang megah.",
      estimatedTime: "45 Menit",
      rewards: "500 XP + Papirus Kuno",
      difficulty: "Menengah",
      prerequisites: ["Sejarah Dunia"],
    },
  }

  const handleLandmarkClick = (landmarkType: keyof typeof landmarkData) => {
    setSelectedLandmark(landmarkData[landmarkType])
  }

  const handleHomeClick = () => {
    setShowLandmarks(!showLandmarks)
  }

  const renderMapView = () => (
    <>
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('/ancient-fantasy-map.png')`,
          }}
        />
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(6,182,212,0.15)_25px,rgba(6,182,212,0.15)_26px,transparent_27px)] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-amber-900/20" />
        </div>
      </div>

      {showLandmarks && (
        <div className="absolute inset-0 z-5">
          {/* ... existing landmark buttons ... */}
          <button
            onClick={() => handleLandmarkClick("observatory")}
            className="absolute w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 atlas-glow-cyan hover:shadow-cyan-400/50 animate-bounce border-2 border-cyan-300/30"
            style={{ top: "33%", left: "25%" }}
          >
            <div className="text-xl">🔭</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("laboratory")}
            className="absolute w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-emerald-400/50 border-2 border-emerald-300/30"
            style={{ top: "67%", left: "67%" }}
          >
            <div className="text-xl">⚗️</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("library")}
            className="absolute w-12 h-12 bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl atlas-glow-green animate-pulse hover:scale-125 transition-all duration-300 hover:shadow-purple-400/50 border-2 border-purple-300/30"
            style={{ top: "45%", left: "55%" }}
          >
            <div className="text-xl">📚</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("bioCenter")}
            className="absolute w-12 h-12 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-orange-400/50 border-2 border-orange-300/30"
            style={{ top: "20%", left: "75%" }}
          >
            <div className="text-xl">🧬</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("academy")}
            className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-yellow-400/50 border-2 border-yellow-300/30 animate-pulse"
            style={{ top: "55%", left: "15%" }}
          >
            <div className="text-xl">⚡</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("gallery")}
            className="absolute w-12 h-12 bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-pink-400/50 border-2 border-pink-300/30"
            style={{ top: "75%", left: "40%" }}
          >
            <div className="text-xl">🎨</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("spaceStation")}
            className="absolute w-12 h-12 bg-gradient-to-br from-indigo-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-indigo-400/50 border-2 border-indigo-300/30 atlas-glow-cyan animate-bounce"
            style={{ top: "15%", left: "45%" }}
          >
            <div className="text-xl">🚀</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
          <button
            onClick={() => handleLandmarkClick("ancientLibrary")}
            className="absolute w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-amber-400/50 border-2 border-amber-300/30"
            style={{ top: "85%", left: "80%" }}
          >
            <div className="text-xl">📜</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </button>
        </div>
      )}
    </>
  )

  const renderLibraryView = () => (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 opacity-80" />
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(251,191,36,0.1)_25px,rgba(251,191,36,0.1)_26px,transparent_27px)] bg-[length:60px_60px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <Library className="w-32 h-32 mx-auto mb-8 text-amber-300 opacity-50" />
          <h2 className="text-4xl font-bold mb-4">Perpustakaan Digital</h2>
          <p className="text-xl text-amber-200">Jelajahi koleksi pengetahuan tak terbatas</p>
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-2xl">
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <BookOpen className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">E-Books</h3>
              <p className="text-sm text-gray-300">Akses ribuan buku digital</p>
            </div>
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <Search className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Penelitian</h3>
              <p className="text-sm text-gray-300">Database jurnal ilmiah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderLaboratoryView = () => (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 opacity-80" />
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(45deg,transparent_24px,rgba(6,182,212,0.1)_25px,rgba(6,182,212,0.1)_26px,transparent_27px)] bg-[length:40px_40px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <FlaskConical className="w-32 h-32 mx-auto mb-8 text-emerald-300 opacity-50" />
          <h2 className="text-4xl font-bold mb-4">Laboratorium Virtual</h2>
          <p className="text-xl text-emerald-200">Eksperimen aman tanpa batas</p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl">
            <div className="atlas-glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer">
              <div className="text-2xl mb-2">⚗️</div>
              <h3 className="font-semibold">Kimia</h3>
            </div>
            <div className="atlas-glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer">
              <div className="text-2xl mb-2">🧬</div>
              <h3 className="font-semibold">Biologi</h3>
            </div>
            <div className="atlas-glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-semibold">Fisika</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderObservatoryView = () => (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 opacity-90" />
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <Telescope className="w-32 h-32 mx-auto mb-8 text-purple-300 opacity-50" />
          <h2 className="text-4xl font-bold mb-4">Observatorium Kosmik</h2>
          <p className="text-xl text-purple-200">Jelajahi keajaiban alam semesta</p>
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-2xl">
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-semibold mb-2">Galaksi</h3>
              <p className="text-sm text-gray-300">Eksplorasi galaksi jauh</p>
            </div>
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <div className="text-3xl mb-3">🪐</div>
              <h3 className="text-lg font-semibold mb-2">Planet</h3>
              <p className="text-sm text-gray-300">Sistem tata surya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderClassroomView = () => (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 opacity-90" />
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(148,163,184,0.1)_25px,rgba(148,163,184,0.1)_26px,transparent_27px)] bg-[length:50px_50px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <GraduationCap className="w-32 h-32 mx-auto mb-8 text-blue-300 opacity-50" />
          <h2 className="text-4xl font-bold mb-4">Ruang Kelas Virtual</h2>
          <p className="text-xl text-blue-200">Pembelajaran interaktif bersama</p>
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-2xl">
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <User className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Kelas Live</h3>
              <p className="text-sm text-gray-300">Bergabung dengan kelas real-time</p>
            </div>
            <div className="atlas-glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer">
              <BookOpen className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Materi</h3>
              <p className="text-sm text-gray-300">Akses materi pembelajaran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case "library":
        return renderLibraryView()
      case "laboratory":
        return renderLaboratoryView()
      case "observatory":
        return renderObservatoryView()
      case "classroom":
        return renderClassroomView()
      default:
        return renderMapView()
    }
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-slate-900">
      {renderCurrentView()}

      {/* ... existing code for Player HUD ... */}
      <div className="absolute top-6 left-6 z-10">
        <div className="atlas-glass rounded-xl p-4 flex items-center gap-4 min-w-[320px] hover:bg-white/10 transition-all duration-300 group">
          <button
            onClick={() => setShowProfile(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl border-2 border-amber-300/50 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-amber-400/25"
          >
            {profileName.charAt(0).toUpperCase()}
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {editingName ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="h-7 text-white bg-white/10 border-white/20 text-lg font-bold"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleNameSave()
                      if (e.key === "Escape") handleNameCancel()
                    }}
                    autoFocus
                  />
                  <Button onClick={handleNameSave} className="w-6 h-6 p-0 bg-emerald-500 hover:bg-emerald-600">
                    <Check className="w-3 h-3" />
                  </Button>
                  <Button onClick={handleNameCancel} className="w-6 h-6 p-0 bg-red-500 hover:bg-red-600">
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-300 transition-colors">
                    {profileName}
                  </h3>
                  <Button
                    onClick={handleNameEdit}
                    className="w-6 h-6 p-0 bg-white/10 hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit2 className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>
            <p className="text-amber-300 text-sm font-medium">Level 12: Kartografer Aksara</p>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Progress ke Level 13</span>
                <span>2,340 / 3,000 XP</span>
              </div>
              <Progress value={78} className="h-2 bg-slate-700/50" />
            </div>
          </div>
        </div>
      </div>

      {/* ... existing code for top-right buttons ... */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-4">
        <Button
          onClick={() => setShowAtlasIndex(!showAtlasIndex)}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-cyan-400/25 ${
            showAtlasIndex ? "bg-blue-500/20 border border-blue-400/30 atlas-glow-cyan" : ""
          }`}
          title="Menu Atlas"
        >
          <div className="flex flex-col gap-1.5 group-hover:scale-110 transition-transform duration-200">
            <div className="w-6 h-0.5 bg-white rounded-full group-hover:bg-cyan-300 transition-colors"></div>
            <div className="w-6 h-0.5 bg-white rounded-full group-hover:bg-cyan-300 transition-colors"></div>
            <div className="w-6 h-0.5 bg-white rounded-full group-hover:bg-cyan-300 transition-colors"></div>
          </div>
        </Button>
        <Button
          onClick={handleDailyMissionsClick}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 ${
            showDailyMissions ? "bg-cyan-500/20 border border-cyan-400/30 atlas-glow-cyan" : ""
          }`}
          title="Misi Harian"
        >
          <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </div>

      <div className="absolute left-6 top-3/5 transform -translate-y-1/2 z-10 flex flex-col gap-3">
        <Button
          onClick={handleHomeClick}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group relative overflow-hidden ${
            showLandmarks ? "bg-cyan-500/20 border border-cyan-400/30 atlas-glow-cyan" : ""
          }`}
          title="Toggle Landmarks"
        >
          <Home className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
        </Button>
        <Button
          onClick={() => setShowGuildHall(!showGuildHall)}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group relative overflow-hidden ${
            showGuildHall ? "bg-blue-500/20 border border-blue-400/30" : ""
          }`}
          title="Guild Hall"
        >
          <Building2 className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
        </Button>
        <Button
          onClick={() => setShowSkillTree(!showSkillTree)}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group relative overflow-hidden ${
            showSkillTree ? "bg-green-500/20 border border-green-400/30" : ""
          }`}
          title="Skill Tree"
        >
          <TreePine className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
        </Button>
        <Button
          onClick={() => setShowWorldEvent(!showWorldEvent)}
          className={`w-14 h-14 atlas-glass rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 atlas-glow-gold animate-pulse relative overflow-hidden ${
            showWorldEvent ? "bg-amber-500/30" : ""
          }`}
          title="World Event"
        >
          <Zap className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
        </Button>
      </div>

      {showAtlasIndex && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAtlasIndex(false)} />
          <div className="absolute left-0 top-0 h-full w-96 atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Atlas Index</h2>
                <Button
                  onClick={() => setShowAtlasIndex(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Cari lokasi..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Lingkungan Pembelajaran</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => handleViewChange("map")}
                    className={`p-3 text-left justify-start ${
                      currentView === "map"
                        ? "bg-cyan-500/20 border border-cyan-400/30"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <Map className="w-4 h-4 mr-2" />
                    <span className="text-sm">Peta Atlas</span>
                  </Button>
                  <Button
                    onClick={() => handleViewChange("library")}
                    className={`p-3 text-left justify-start ${
                      currentView === "library"
                        ? "bg-amber-500/20 border border-amber-400/30"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <Library className="w-4 h-4 mr-2" />
                    <span className="text-sm">Perpustakaan</span>
                  </Button>
                  <Button
                    onClick={() => handleViewChange("laboratory")}
                    className={`p-3 text-left justify-start ${
                      currentView === "laboratory"
                        ? "bg-emerald-500/20 border border-emerald-400/30"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <FlaskConical className="w-4 h-4 mr-2" />
                    <span className="text-sm">Laboratorium</span>
                  </Button>
                  <Button
                    onClick={() => handleViewChange("observatory")}
                    className={`p-3 text-left justify-start ${
                      currentView === "observatory"
                        ? "bg-purple-500/20 border border-purple-400/30"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <Telescope className="w-4 h-4 mr-2" />
                    <span className="text-sm">Observatorium</span>
                  </Button>
                  <Button
                    onClick={() => handleViewChange("classroom")}
                    className={`p-3 text-left justify-start ${
                      currentView === "classroom"
                        ? "bg-blue-500/20 border border-blue-400/30"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ruang Kelas</span>
                  </Button>
                  <Button
                    onClick={() => setShowDashboard(true)}
                    className="p-3 text-left justify-start bg-white/5 hover:bg-white/10"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    <span className="text-sm">Dashboard</span>
                  </Button>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white font-semibold mb-3">Lokasi Pembelajaran</h3>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{location.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{location.title}</h3>
                          <p className="text-gray-400 text-sm">{location.type}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-300 mb-1">
                          <span>Progress</span>
                          <span>{location.progress}%</span>
                        </div>
                        <Progress value={location.progress} className="h-2 bg-slate-700/50" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ... existing code for other modals and panels ... */}
      {showDailyMissions && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowDailyMissions(false)} />
          <div className="absolute right-0 top-0 h-full w-80 atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  Misi Harian Aktif
                </h2>
                <Button
                  onClick={() => setShowDailyMissions(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {dailyTasks.map((task) => (
                  <div key={task.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 transition-all duration-200 ${
                          task.completed
                            ? "bg-emerald-500 border-emerald-400 shadow-emerald-400/25 shadow-sm"
                            : "border-gray-400 bg-transparent hover:border-cyan-400 cursor-pointer"
                        }`}
                      >
                        {task.completed && <span className="text-white text-xs">✓</span>}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm transition-colors ${
                            task.completed ? "text-gray-400 line-through" : "text-white"
                          }`}
                        >
                          {task.text}
                        </p>
                        {!task.completed && (
                          <div className="mt-2">
                            <div className="w-full bg-slate-700/50 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Progress: 60%</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-400/30">
                <h3 className="text-white font-semibold mb-2">Hadiah Harian</h3>
                <p className="text-gray-300 text-sm">
                  Selesaikan semua misi untuk mendapatkan 1000 XP + Kristal Energi
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ... existing code for all other modals ... */}
      {showGuildHall && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowGuildHall(false)} />
          <div className="absolute left-0 top-0 h-full w-96 atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  Guild Hall
                </h2>
                <Button
                  onClick={() => setShowGuildHall(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center">
              <p className="text-gray-400 text-center">Guild Hall akan segera hadir!</p>
            </div>
          </div>
        </div>
      )}

      {showSkillTree && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowSkillTree(false)} />
          <div className="absolute left-0 top-0 h-full w-96 atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <TreePine className="w-6 h-6 text-green-400" />
                  Skill Tree
                </h2>
                <Button
                  onClick={() => setShowSkillTree(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center">
              <p className="text-gray-400 text-center">Skill Tree akan segera hadir!</p>
            </div>
          </div>
        </div>
      )}

      {showWorldEvent && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowWorldEvent(false)} />
          <div className="absolute left-0 top-0 h-full w-96 atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-400" />
                  World Event
                </h2>
                <Button
                  onClick={() => setShowWorldEvent(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center">
              <p className="text-gray-400 text-center">World Event akan segera hadir!</p>
            </div>
          </div>
        </div>
      )}

      {showDashboard && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowDashboard(false)} />
          <div className="absolute left-0 top-0 h-full w-[480px] atlas-glass flex flex-col">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  Dashboard Progress
                </h2>
                <Button
                  onClick={() => setShowDashboard(false)}
                  className="w-8 h-8 p-0 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Progress Overview */}
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-white font-bold text-lg mb-4">Progress Keseluruhan</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{dashboardData.totalProgress}%</div>
                    <div className="text-xs text-gray-300">Total Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      {dashboardData.completedLocations}/{dashboardData.totalLocations}
                    </div>
                    <div className="text-xs text-gray-300">Lokasi Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">
                      {dashboardData.totalXPEarned.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-300">Total XP</div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Progress Mingguan</span>
                    <span>+{dashboardData.weeklyProgress} XP</span>
                  </div>
                  <Progress value={dashboardData.totalProgress} className="h-3 bg-slate-700/50" />
                </div>
              </div>

              {/* Weekly Activity Chart */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Aktivitas Mingguan</h3>
                <div className="flex items-end justify-between gap-2 h-32">
                  {dashboardData.weeklyStats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-sm mb-2 transition-all duration-300 hover:from-cyan-400 hover:to-purple-400"
                        style={{ height: `${(stat.xp / 350) * 100}%`, minHeight: "8px" }}
                      />
                      <div className="text-xs text-gray-300">{stat.day}</div>
                      <div className="text-xs text-cyan-400 font-semibold">{stat.xp}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Locations */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Status Lokasi</h3>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="text-2xl">{location.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-semibold text-sm">{location.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              location.completed
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
                                : location.progress > 0
                                  ? "bg-amber-500/20 text-amber-400 border border-amber-400/30"
                                  : "bg-gray-500/20 text-gray-400 border border-gray-400/30"
                            }`}
                          >
                            {location.completed ? "Selesai" : location.progress > 0 ? "Progress" : "Belum Mulai"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Progress value={location.progress} className="h-2 bg-slate-700/50 flex-1 mr-3" />
                          <span className="text-xs text-gray-400">{location.progress}%</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Terakhir: {location.lastVisited}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Aktivitas Terbaru</h3>
                <div className="space-y-3">
                  {dashboardData.recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">
                          <span className="text-cyan-400">{activity.action}</span> {activity.location}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-400">{activity.time}</span>
                          <span className="text-xs text-amber-400 font-semibold">+{activity.xp} XP</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedLandmark && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedLandmark(null)} />
          <div className="relative bg-slate-800 rounded-xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-slate-600">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_24px,rgba(148,163,184,0.1)_25px,rgba(148,163,184,0.1)_26px,transparent_27px)] bg-[length:30px_30px] rounded-xl" />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedLandmark.title}</h2>
                <Button
                  onClick={() => setSelectedLandmark(null)}
                  className="w-8 h-8 p-0 bg-slate-700 hover:bg-slate-600 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">{selectedLandmark.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-cyan-400 font-semibold mb-2">Estimasi Waktu</h3>
                  <p className="text-white">{selectedLandmark.estimatedTime}</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-amber-400 font-semibold mb-2">Hadiah</h3>
                  <p className="text-white">{selectedLandmark.rewards}</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">Tingkat Kesulitan</h3>
                  <p className="text-white">{selectedLandmark.difficulty}</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-emerald-400 font-semibold mb-2">Prasyarat</h3>
                  <div className="space-y-1">
                    {selectedLandmark.prerequisites?.map((req: string, index: number) => (
                      <p key={index} className="text-white text-sm">
                        • {req}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3">
                  Mulai Ekspedisi
                </Button>
                <Button
                  onClick={() => setSelectedLandmark(null)}
                  className="px-6 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowProfile(false)} />
          <div className="relative bg-slate-800 rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-2xl border border-slate-600 max-h-[90vh] overflow-y-auto">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_24px,rgba(148,163,184,0.1)_25px,rgba(148,163,184,0.1)_26px,transparent_27px)] bg-[length:30px_30px] rounded-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-4xl border-4 border-amber-300/50 shadow-2xl">
                    {profileName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{profileData.name}</h2>
                    <p className="text-amber-300 text-xl font-medium mb-2">
                      Level {profileData.level}: {profileData.title}
                    </p>
                    <p className="text-gray-400">Bergabung sejak {profileData.joinDate}</p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowProfile(false)}
                  className="w-10 h-10 p-0 bg-slate-700 hover:bg-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-cyan-400" />
                      Progress Level
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>XP Progress</span>
                        <span>
                          {profileData.xp} / {profileData.maxXp} XP
                        </span>
                      </div>
                      <Progress value={(profileData.xp / profileData.maxXp) * 100} className="h-3 bg-slate-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-slate-600/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-cyan-400">{profileData.totalExpeditions}</div>
                        <div className="text-sm text-gray-300">Total Ekspedisi</div>
                      </div>
                      <div className="bg-slate-600/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-400">{profileData.completedQuests}</div>
                        <div className="text-sm text-gray-300">Quest Selesai</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      Statistik Pembelajaran
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(profileData.stats).map(([subject, value]) => (
                        <div key={subject}>
                          <div className="flex justify-between text-sm text-gray-300 mb-1 capitalize">
                            <span>{subject}</span>
                            <span>{value}%</span>
                          </div>
                          <Progress value={value} className="h-2 bg-slate-600" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-400" />
                      Pencapaian
                    </h3>
                    <div className="space-y-3">
                      {profileData.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-colors"
                        >
                          <span className="text-2xl">{achievement.icon}</span>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm">{achievement.name}</h4>
                            <p className="text-gray-400 text-xs">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3">
                  Edit Profil
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3">
                  Lihat Statistik Detail
                </Button>
                <Button
                  onClick={() => setShowProfile(false)}
                  className="px-8 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
