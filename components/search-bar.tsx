"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"
import { searchCities } from "@/lib/cities-data"

interface SearchBarProps {
  onSearch: (city: string) => void
}

interface LocationSuggestion {
  name: string
  lat: number
  lon: number
  country?: string
  state?: string
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (input.trim().length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const localSuggestions = searchCities(input).map((city) => ({
      name: city.name,
      state: city.state,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
    }))

    setSuggestions(localSuggestions)
    setShowSuggestions(true)
    setLoading(false)
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input)
      setInput("")
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: LocationSuggestion) => {
    const cityName = suggestion.state ? `${suggestion.name}, ${suggestion.state}` : suggestion.name
    onSearch(cityName)
    setInput("")
    setSuggestions([])
    setShowSuggestions(false)
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
            onFocus={() => input.trim().length >= 2 && setShowSuggestions(true)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-lg hover:shadow-xl text-gray-800 placeholder-gray-400"
          />

          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-50 overflow-hidden"
            >
              {loading ? (
                <div className="px-4 py-3 text-gray-500 text-sm text-center">Loading suggestions...</div>
              ) : suggestions.length > 0 ? (
                <ul className="max-h-64 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-white/10 last:border-b-0 transition-colors flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{suggestion.name}</div>
                        <div className="text-xs text-gray-500">
                          {suggestion.state && `${suggestion.state}, `}
                          {suggestion.country}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm text-center">No locations found</div>
              )}
            </motion.div>
          )}
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
