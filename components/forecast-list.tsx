"use client"

import { motion } from "framer-motion"

interface ForecastListProps {
  forecast: any[]
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

export default function ForecastList({ forecast }: ForecastListProps) {
  const getDayName = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">7-Day Forecast</h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-7 gap-4"
      >
        {forecast.map((day, index) => {
          const icon = weatherIcons[day.weather[0].icon] || "🌤️"
          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4 text-center backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">{getDayName(day.dt)}</p>
              <p className="text-3xl mb-3">{icon}</p>
              <p className="text-xs text-gray-600 mb-3 capitalize">{day.weather[0].main}</p>
              <div className="space-y-1">
                <p className="text-lg font-bold text-gray-800">{Math.round(day.temp.max)}°</p>
                <p className="text-xs text-gray-600">{Math.round(day.temp.min)}°</p>
              </div>
              <p className="text-xs text-blue-600 mt-2 font-medium">💧 {(day.pop * 100) | 0}%</p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
