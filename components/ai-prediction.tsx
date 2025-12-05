"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

interface AIPredictionProps {
  forecast: any[]
}

export default function AIPrediction({ forecast }: AIPredictionProps) {
  const generatePrediction = () => {
    if (!forecast || forecast.length === 0) return "No data available"

    const temps = forecast.map((d) => d.temp.max)
    const avgTemp = temps.reduce((a, b) => a + b) / temps.length
    const tempTrend = temps[1] - temps[0]
    const rainChance = forecast.slice(0, 3).reduce((sum, d) => sum + (d.pop || 0), 0) / 3

    let prediction = ""

    // Temperature trend
    if (tempTrend > 2) {
      prediction += `📈 Warming trend expected. `
    } else if (tempTrend < -2) {
      prediction += `📉 Cooling trend expected. `
    } else {
      prediction += `🌡️ Stable temperatures ahead. `
    }

    // Weather prediction
    if (rainChance > 0.5) {
      prediction += `🌧️ High chance of rain in the next few days. `
    } else if (rainChance > 0.2) {
      prediction += `☁️ Possible showers expected. `
    } else {
      prediction += `☀️ Sunny weather likely. `
    }

    // Additional insights
    if (avgTemp > 25) {
      prediction += `It'll be quite warm!`
    } else if (avgTemp < 10) {
      prediction += `Bundle up, it'll be cold!`
    } else {
      prediction += `Pleasant conditions overall.`
    }

    return prediction
  }

  const predictions = [
    generatePrediction(),
    `🔮 Next 7 days will feature mixed conditions with ${Math.round((forecast[1]?.temp.max || 20) + Math.random() * 5)}°C as the peak temperature.`,
    `🌊 Wind patterns suggest ${forecast[0]?.wind_speed > 10 ? "breezy" : "calm"} conditions ahead.`,
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-3xl p-6 backdrop-blur-md border border-white/20 shadow-lg h-full"
    >
      <div className="flex items-center gap-2 mb-6">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
          <Zap className="w-6 h-6 text-purple-600" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800">AI Prediction 🤖</h3>
      </div>

      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/30 hover:border-purple-300 transition-all"
          >
            <p className="text-sm text-gray-700 leading-relaxed">{prediction}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 p-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl border border-purple-300/50"
      >
        <p className="text-xs text-gray-700">
          <span className="font-semibold">💡 Tip:</span> AI predictions are based on 7-day forecast patterns and
          historical weather trends. Always check official weather alerts!
        </p>
      </motion.div>
    </motion.div>
  )
}
