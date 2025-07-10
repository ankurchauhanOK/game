"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Coins,
  Crown,
  Gamepad2,
  Play,
  Star,
  Trophy,
  User,
  Wallet,
  Zap,
  Target,
  Brain,
  Puzzle,
  Home,
} from "lucide-react"

const games = [
  {
    id: 1,
    name: "Neon Tetris",
    thumbnail: "/placeholder.svg?height=160&width=160",
    difficulty: "Medium",
    rating: 4.8,
    coins: 50,
    icon: <Puzzle className="w-5 h-5" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Flappy Rush",
    thumbnail: "/placeholder.svg?height=160&width=160",
    difficulty: "Hard",
    rating: 4.5,
    coins: 75,
    icon: <Zap className="w-5 h-5" />,
    color: "from-pink-400 to-red-500",
  },
  {
    id: 3,
    name: "Memory Matrix",
    thumbnail: "/placeholder.svg?height=160&width=160",
    difficulty: "Easy",
    rating: 4.9,
    coins: 30,
    icon: <Brain className="w-5 h-5" />,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Snake Neon",
    thumbnail: "/placeholder.svg?height=160&width=160",
    difficulty: "Medium",
    rating: 4.7,
    coins: 45,
    icon: <Target className="w-5 h-5" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    name: "Puzzle Rush",
    thumbnail: "/placeholder.svg?height=160&width=160",
    difficulty: "Hard",
    rating: 4.6,
    coins: 60,
    icon: <Puzzle className="w-5 h-5" />,
    color: "from-purple-400 to-indigo-500",
  },
]

const featuredGame = {
  name: "Cyber Breakout",
  description: "Smash through neon blocks in this futuristic arcade classic",
  thumbnail: "/placeholder.svg?height=180&width=320",
  difficulty: "Medium",
  rating: 4.9,
  coins: 100,
  players: "2.1K playing",
}

export default function GameRushMobile() {
  const [coins, setCoins] = useState(1250)
  const [dailyStreak, setDailyStreak] = useState(7)
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-[#0E0E12] text-white pb-20 relative">
      {/* Mobile Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0E0E12] overflow-hidden px-4">
        {/* Compact Background */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900/15 via-blue-900/15 to-cyan-900/15" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwRkZDNiIgZmlsbC1vcGFjaXR5PSIwLjA0Ij4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        </motion.div>

        {/* Floating Particles - Reduced for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#00FFC6] rounded-full"
              initial={{
                x: Math.random() * 300,
                y: Math.random() * 600,
                opacity: 0,
              }}
              animate={{
                y: [null, -80],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Mobile Hero Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center max-w-sm"
        >
          {/* Logo */}
          <motion.div
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#00FFC6] to-[#FF3989] flex items-center justify-center"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Gamepad2 className="w-8 h-8 text-black" />
          </motion.div>

          <motion.h1
            className="text-4xl font-extrabold tracking-tight leading-tight text-white drop-shadow-xl mb-3"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.span
              className="bg-gradient-to-r from-[#00FFC6] via-[#FF3989] to-[#FEDA55] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              GAMER
              <br />
              ZONE
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base text-gray-300 mb-8 font-light leading-relaxed"
          >
            Start your streak
            <br />
            Earn coins • Become a legend
          </motion.p>

          {/* Mobile CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-4/5 py-4 text-black font-bold text-lg bg-gradient-to-r from-[#00FFC6] to-[#FF3989] rounded-2xl shadow-xl hover:shadow-[#00FFC6]/30 transition-all duration-300 relative overflow-hidden"
            onClick={() => document.getElementById("mainContent")?.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Play className="w-5 h-5" />
              START PLAYING
            </span>
          </motion.button>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 z-10 cursor-pointer"
          onClick={() => document.getElementById("mainContent")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#00FFC6] text-xs font-semibold">SWIPE UP</span>
            <motion.div
              className="w-6 h-6 border border-[#00FFC6] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-[#00FFC6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div id="mainContent" className="relative z-10">
        {/* Mobile Top Bar */}
        <div className="sticky top-0 z-50 bg-[#0E0E12]/95 backdrop-blur-sm border-b border-[#1E1E2F]">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#00FFC6] to-[#FF3989] flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-black" />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-[#00FFC6] to-[#FF3989] bg-clip-text text-transparent">
                GameRush
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Coins Display */}
              <motion.div
                className="flex items-center gap-2 bg-[#1E1E2F] px-3 py-1.5 rounded-full border border-[#00FFC6]/20"
                whileTap={{ scale: 0.95 }}
              >
                <Coins className="w-4 h-4 text-[#FEDA55]" />
                <span className="font-semibold text-[#FEDA55] text-sm">{coins.toLocaleString()}</span>
              </motion.div>

              <Button variant="ghost" size="icon" className="relative w-8 h-8">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#FF3989] rounded-full animate-pulse"></div>
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 space-y-6">
          {/* Mobile Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileTap={{ scale: 0.98 }}>
              <Card className="bg-[#1E1E2F] border-[#00FFC6]/20 hover:shadow-md hover:shadow-[#00FFC6]/10 transition-all">
                <CardContent className="p-3 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#00FFC6]/10 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-[#00FFC6]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="text-lg font-bold text-[#00FFC6]">{dailyStreak} days</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Card className="bg-[#1E1E2F] border-[#FF3989]/20 hover:shadow-md hover:shadow-[#FF3989]/10 transition-all">
                <CardContent className="p-3 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#FF3989]/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-[#FF3989]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Today</p>
                    <p className="text-lg font-bold text-[#FF3989]">+180</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Mobile Vibe Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-2">
                {["🧨 Chaos", "🧠 Strategy", "🎧 Chill", "💥 Reflex", "🕹️ Retro"].map((vibe, idx) => (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 px-4 py-2 bg-[#1E1E2F] border border-[#00FFC6]/20 text-[#00FFC6] rounded-full hover:bg-[#00FFC6]/10 transition-all duration-300 font-medium text-sm"
                  >
                    {vibe}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Game - Mobile Optimized */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-[#FEDA55]" />
              <h2 className="text-base font-bold">Game of the Day</h2>
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Card className="bg-[#1E1E2F] border-[#FEDA55]/20 overflow-hidden hover:shadow-lg hover:shadow-[#FEDA55]/10 transition-all group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={featuredGame.thumbnail || "/placeholder.svg"}
                      alt={featuredGame.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-[#FEDA55] text-black font-semibold text-xs">
                        <Coins className="w-3 h-3 mr-1" />
                        {featuredGame.coins}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#FEDA55] to-[#FF3989] bg-clip-text text-transparent">
                        {featuredGame.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{featuredGame.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-[#FEDA55]" />
                            {featuredGame.rating}
                          </div>
                          <Badge variant="outline" className="border-[#00FFC6]/30 text-[#00FFC6] text-xs">
                            {featuredGame.difficulty}
                          </Badge>
                          <span>{featuredGame.players}</span>
                        </div>
                        <motion.div whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#00FFC6] to-[#FF3989] text-black font-semibold hover:shadow-md hover:shadow-[#00FFC6]/20 transition-all"
                          >
                            <Play className="w-3 h-3 mr-1" />
                            PLAY
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Mobile Game Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-base font-bold mb-4 flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4 text-[#00FFC6]" />
              Quick Games
            </motion.h2>

            <div className="grid grid-cols-2 gap-3">
              {games.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-xl bg-[#1E1E2F] border border-gray-700/50 overflow-hidden shadow-md group cursor-pointer"
                >
                  {/* Game Image */}
                  <img
                    src={game.thumbnail || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Game Icon */}
                  <div className="absolute top-2 left-2">
                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#00FFC6] border border-[#00FFC6]/30">
                      {game.icon}
                    </div>
                  </div>

                  {/* Coin Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/60 border border-[#FEDA55]/30 text-[#FEDA55] text-xs">
                      <Coins className="w-2.5 h-2.5 mr-1" />
                      {game.coins}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold mb-1 text-[#00FFC6]">{game.name}</h3>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1 text-gray-300">
                        <Star className="w-2.5 h-2.5 text-[#FEDA55]" />
                        {game.rating}
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs border ${
                          game.difficulty === "Easy"
                            ? "border-green-500/50 text-green-400"
                            : game.difficulty === "Medium"
                              ? "border-yellow-500/50 text-yellow-400"
                              : "border-red-500/50 text-red-400"
                        }`}
                      >
                        {game.difficulty}
                      </Badge>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-1.5 px-3 rounded-lg text-black font-bold text-xs bg-gradient-to-r from-[#00FFC6] to-[#FF3989] shadow-md transition-all"
                    >
                      <Play className="w-3 h-3 inline mr-1" />
                      PLAY
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Quick Actions */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-[#1E1E2F] border border-[#00FFC6]/20 rounded-xl p-4 flex items-center justify-between hover:shadow-md hover:shadow-[#00FFC6]/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00FFC6]/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[#00FFC6]" />
                </div>
                <div>
                  <h3 className="text-[#00FFC6] font-semibold text-sm">Leaderboard</h3>
                  <p className="text-xs text-gray-400">Check your ranking</p>
                </div>
              </div>
              <motion.div whileTap={{ rotate: 15 }}>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-[#1E1E2F] border border-[#FF3989]/20 rounded-xl p-4 flex items-center justify-between hover:shadow-md hover:shadow-[#FF3989]/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF3989]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#FF3989]" />
                </div>
                <div>
                  <h3 className="text-[#FF3989] font-semibold text-sm">Profile & Stats</h3>
                  <p className="text-xs text-gray-400">View achievements</p>
                </div>
              </div>
              <motion.div whileTap={{ scale: 1.1 }}>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E1E2F]/95 backdrop-blur-sm border-t border-[#00FFC6]/10"
      >
        <div className="flex items-center justify-around py-2">
          {[
            { id: "home", icon: Home, label: "Home", color: "#00FFC6" },
            { id: "games", icon: Gamepad2, label: "Games", color: "#FF3989" },
            { id: "leaderboard", icon: Trophy, label: "Ranks", color: "#FEDA55" },
            { id: "wallet", icon: Wallet, label: "Wallet", color: "#00FFC6" },
            { id: "profile", icon: User, label: "Profile", color: "#FF3989" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all ${
                activeTab === tab.id ? "bg-white/5" : ""
              }`}
            >
              <tab.icon
                className={`w-5 h-5 ${activeTab === tab.id ? `text-[${tab.color}]` : "text-gray-400"}`}
                style={{ color: activeTab === tab.id ? tab.color : "#9CA3AF" }}
              />
              <span
                className={`text-xs font-medium ${activeTab === tab.id ? `text-[${tab.color}]` : "text-gray-400"}`}
                style={{ color: activeTab === tab.id ? tab.color : "#9CA3AF" }}
              >
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: tab.color }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
