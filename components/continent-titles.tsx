"use client"

export function ContinentTitles() {
  const continents = [
    { name: "THE DOMINION OF SCIENCE", position: "top-1/4 left-1/3" },
    { name: "THE ARCHIPELAGO OF ARTS", position: "top-2/3 right-1/4" },
    { name: "THE REALM OF MATHEMATICS", position: "bottom-1/3 left-1/4" },
    { name: "THE TERRITORIES OF HISTORY", position: "top-1/2 right-1/3" },
  ]

  return (
    <>
      {continents.map((continent, index) => (
        <div key={continent.name} className={`absolute ${continent.position} z-30 pointer-events-none`}>
          <div className="relative">
            {/* God Rays Background */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-amber-400/10 to-transparent blur-3xl w-96 h-32 -translate-x-1/2 -translate-y-1/2" />

            {/* Main Title */}
            <h1
              className="text-4xl md:text-6xl font-bold text-white/80 atlas-text-glow font-space-grotesk tracking-wider transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                textShadow: `
                  0 0 20px rgba(251, 191, 36, 0.8),
                  0 0 40px rgba(251, 191, 36, 0.6),
                  0 0 60px rgba(251, 191, 36, 0.4),
                  0 0 80px rgba(251, 191, 36, 0.2)
                `,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {continent.name}
            </h1>

            {/* Light Beam Effect */}
            <div
              className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-amber-400/60 to-transparent transform -translate-x-1/2 -translate-y-full animate-pulse"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
          </div>
        </div>
      ))}
    </>
  )
}
