"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface WeatherChartProps {
  forecast: any[]
}

export default function WeatherChart({ forecast }: WeatherChartProps) {
  const chartData = forecast.map((day) => ({
    day: new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
    high: Math.round(day.temp.max),
    low: Math.round(day.temp.min),
    humidity: day.humidity,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Temperature Trend</h3>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <defs>
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="day" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "none",
                borderRadius: "12px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="high"
              stroke="#3b82f6"
              name="High (°C)"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", r: 5 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="low"
              stroke="#06b6d4"
              name="Low (°C)"
              strokeWidth={3}
              dot={{ fill: "#06b6d4", r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}
