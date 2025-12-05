"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"

interface SearchBarProps {
  onSearch: (city: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input)
      setInput("")
    }
  }

  const handleGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        fetch(`/api/weather?type=geocode&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              onSearch(data[0].name)
            }
          })
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-lg hover:shadow-xl text-gray-800 placeholder-gray-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Search
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={handleGeolocation}
          className="p-3 bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl text-blue-500 hover:bg-white transition-all shadow-lg hover:shadow-xl"
        >
          <MapPin className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </form>
  )
}
