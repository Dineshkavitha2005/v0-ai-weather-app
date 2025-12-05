"use client"

import { motion } from "framer-motion"
import { Cloud, Droplets, Wind, Eye, Gauge } from "lucide-react"

interface CurrentWeatherProps {
  data: any
  city: string
}

const weatherIcons: Record<string, string> = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "⛅",
  "02n": "🌤️",
  "03d": "☁️",
  "03n": "☁️",
  "04d": "☁️",
  "04n": "☁️",
  "09d": "🌧️",
  "09n": "🌧️",
  "10d": "🌧️",
  "10n": "🌧️",
  "11d": "⛈️",
  "11n": "⛈️",
  "13d": "❄️",
  "13n": "❄️",
  "50d": "🌫️",
  "50n": "🌫️",
}

export default function CurrentWeather({ data, city }: CurrentWeatherProps) {
  if (!data) return null

  const icon = weatherIcons[data.weather[0].icon] || "🌤️"
  const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
  const sunset = new Date(data.sunset * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{city}</h2>
            <p className="text-white/80 capitalize">{data.weather[0].description}</p>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-8xl"
          >
            {icon}
          </motion.div>
        </div>

        <div className="mb-8">
          <div className="text-6xl font-bold text-white mb-2">{Math.round(data.temp)}°C</div>
          <div className="flex gap-4 text-white/90 text-sm">
            <span>Feels like {Math.round(data.feels_like)}°C</span>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <Droplets className="w-5 h-5 text-white mx-auto mb-2" />
            <p className="text-white/70 text-xs mb-1">Humidity</p>
            <p className="text-white font-semibold">{data.humidity}%</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <Wind className="w-5 h-5 text-white mx-auto mb-2" />
            <p className="text-white/70 text-xs mb-1">Wind</p>
            <p className="text-white font-semibold">{Math.round(data.wind_speed)} m/s</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <Gauge className="w-5 h-5 text-white mx-auto mb-2" />
            <p className="text-white/70 text-xs mb-1">Pressure</p>
            <p className="text-white font-semibold">{Math.round(data.pressure)} mb</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <Cloud className="w-5 h-5 text-white mx-auto mb-2" />
            <p className="text-white/70 text-xs mb-1">Clouds</p>
            <p className="text-white font-semibold">{data.clouds}%</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <Eye className="w-5 h-5 text-white mx-auto mb-2" />
            <p className="text-white/70 text-xs mb-1">Visibility</p>
            <p className="text-white font-semibold">{(data.visibility / 1000).toFixed(1)} km</p>
          </motion.div>
        </div>

        {/* Sunrise & Sunset */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <p className="text-yellow-200 text-2xl mb-2">🌅</p>
            <p className="text-white/70 text-xs mb-1">Sunrise</p>
            <p className="text-white font-semibold">{sunrise}</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <p className="text-orange-200 text-2xl mb-2">🌅</p>
            <p className="text-white/70 text-xs mb-1">Sunset</p>
            <p className="text-white font-semibold">{sunset}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
