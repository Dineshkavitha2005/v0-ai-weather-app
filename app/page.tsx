"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SearchBar from "@/components/search-bar"
import CurrentWeather from "@/components/current-weather"
import ForecastList from "@/components/forecast-list"
import AIPrediction from "@/components/ai-prediction"
import WeatherChart from "@/components/weather-chart"
import LoadingAnimation from "@/components/loading-animation"

interface WeatherData {
  current: any
  forecast: any[]
}

const getDemoWeatherData = (): WeatherData => {
  return {
    current: {
      temp: 15,
      weather: [{ main: "Clouds", description: "scattered clouds" }],
      name: "Demo City",
    },
    forecast: Array.from({ length: 7 }, (_, i) => ({
      dt: Date.now() + i * 24 * 60 * 60 * 1000,
      temp: { max: 18 + i, min: 12 + i },
      weather: [{ main: "Clouds", description: "scattered clouds" }],
    })),
  }
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [city, setCity] = useState("London")

  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/weather?type=forecast&lat=${lat}&lon=${lon}`)

      if (!response.ok) {
        const errorData = await response.json()
        if (errorData.error?.includes("Invalid API key")) {
          setWeatherData(getDemoWeatherData())
          setError(null)
          setLoading(false)
          return
        }
        throw new Error(errorData.error || "Failed to fetch weather data")
      }

      const data = await response.json()

      setWeatherData({
        current: data.current,
        forecast: data.daily.slice(0, 7),
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const fetchCityCoordinates = async (cityName: string) => {
    try {
      const response = await fetch(`/api/weather?type=search&city=${encodeURIComponent(cityName)}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to find city")
      }

      const data = await response.json()

      if (data.length > 0) {
        setCity(data[0].name)
        localStorage.setItem("lastCity", data[0].name)
        await fetchWeather(data[0].lat, data[0].lon)
      } else {
        setError("City not found")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to find city")
    }
  }

  const handleSearch = (searchCity: string) => {
    fetchCityCoordinates(searchCity)
  }

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity") || "London"
    setCity(lastCity)
    fetchCityCoordinates(lastCity)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white">
      <div className="relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              AI Weather Forecast
            </h1>
            <p className="text-gray-600 text-lg">Powered by AI-driven predictions</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl mb-6 text-center backdrop-blur-md bg-white/50"
            >
              {error}
            </motion.div>
          )}

          {loading ? (
            <LoadingAnimation />
          ) : weatherData ? (
            <>
              {/* Current Weather */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CurrentWeather data={weatherData.current} city={city} />
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/* AI Prediction */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-1"
                >
                  <AIPrediction forecast={weatherData.forecast} />
                </motion.div>

                {/* Weather Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2"
                >
                  <WeatherChart forecast={weatherData.forecast} />
                </motion.div>
              </div>

              {/* 7-Day Forecast */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <ForecastList forecast={weatherData.forecast} />
              </motion.div>
            </>
          ) : null}

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 text-gray-500 text-sm"
          ></motion.footer>
        </div>
      </div>
    </main>
  )
}
