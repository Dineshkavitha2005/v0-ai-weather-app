export const getDemoWeatherData = () => {
  const now = new Date()
  return {
    current: {
      temp: 22,
      feels_like: 20,
      humidity: 65,
      pressure: 1013,
      wind_speed: 12,
      wind_deg: 230,
      clouds: 45,
      visibility: 10000,
      uvi: 5,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      sunrise: Math.floor((now.getTime() - 8 * 3600000) / 1000),
      sunset: Math.floor((now.getTime() + 8 * 3600000) / 1000),
    },
    daily: [
      {
        dt: Math.floor(now.getTime() / 1000),
        temp: { max: 26, min: 16 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
      },
      {
        dt: Math.floor((now.getTime() + 86400000) / 1000),
        temp: { max: 28, min: 18 },
        weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      },
      {
        dt: Math.floor((now.getTime() + 172800000) / 1000),
        temp: { max: 25, min: 17 },
        weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
      },
      {
        dt: Math.floor((now.getTime() + 259200000) / 1000),
        temp: { max: 24, min: 15 },
        weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
      },
      {
        dt: Math.floor((now.getTime() + 345600000) / 1000),
        temp: { max: 27, min: 19 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
      },
      {
        dt: Math.floor((now.getTime() + 432000000) / 1000),
        temp: { max: 29, min: 20 },
        weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      },
      {
        dt: Math.floor((now.getTime() + 518400000) / 1000),
        temp: { max: 26, min: 18 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
      },
    ],
  }
}
