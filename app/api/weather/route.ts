import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get("type")
  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 })
  }

  try {
    if (type === "geocode") {
      const lat = searchParams.get("lat")
      const lon = searchParams.get("lon")

      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`,
      )

      if (!response.ok) {
        const errorData = await response.json()
        return NextResponse.json(
          { error: errorData.message || "Failed to geocode coordinates" },
          { status: response.status },
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    } else if (type === "search") {
      const city = searchParams.get("city")

      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)

      if (!response.ok) {
        const errorData = await response.json()
        return NextResponse.json({ error: errorData.message || "Failed to search city" }, { status: response.status })
      }

      const data = await response.json()
      return NextResponse.json(data)
    } else if (type === "forecast") {
      const lat = searchParams.get("lat")
      const lon = searchParams.get("lon")

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
      )

      if (!response.ok) {
        const errorData = await response.json()
        return NextResponse.json(
          { error: errorData.message || "Failed to fetch forecast data" },
          { status: response.status },
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    }

    return NextResponse.json({ error: "Invalid request type" }, { status: 400 })
  } catch (error) {
    console.error("Weather API error:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}
