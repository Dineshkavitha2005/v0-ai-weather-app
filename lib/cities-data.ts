// Comprehensive world cities and states database for search suggestions
export interface City {
  name: string
  state: string
  country: string
  lat: number
  lon: number
}

export const citiesDatabase: City[] = [
  // United States
  { name: "New York", state: "NY", country: "United States", lat: 40.7128, lon: -74.006 },
  { name: "Los Angeles", state: "CA", country: "United States", lat: 34.0522, lon: -118.2437 },
  { name: "Chicago", state: "IL", country: "United States", lat: 41.8781, lon: -87.6298 },
  { name: "Houston", state: "TX", country: "United States", lat: 29.7604, lon: -95.3698 },
  { name: "Phoenix", state: "AZ", country: "United States", lat: 33.4484, lon: -112.074 },
  { name: "Philadelphia", state: "PA", country: "United States", lat: 39.9526, lon: -75.1652 },
  { name: "San Antonio", state: "TX", country: "United States", lat: 29.4241, lon: -98.4936 },
  { name: "San Diego", state: "CA", country: "United States", lat: 32.7157, lon: -117.1611 },
  { name: "Dallas", state: "TX", country: "United States", lat: 32.7767, lon: -96.797 },
  { name: "San Jose", state: "CA", country: "United States", lat: 37.3382, lon: -121.8863 },
  { name: "Austin", state: "TX", country: "United States", lat: 30.2672, lon: -97.7431 },
  { name: "Jacksonville", state: "FL", country: "United States", lat: 30.3322, lon: -81.7625 },
  { name: "Fort Worth", state: "TX", country: "United States", lat: 32.7555, lon: -97.3308 },
  { name: "Columbus", state: "OH", country: "United States", lat: 39.9612, lon: -82.9988 },
  { name: "Charlotte", state: "NC", country: "United States", lat: 35.2271, lon: -80.8431 },
  { name: "San Francisco", state: "CA", country: "United States", lat: 37.7749, lon: -122.4194 },
  { name: "Indianapolis", state: "IN", country: "United States", lat: 39.7684, lon: -86.158 },
  { name: "Seattle", state: "WA", country: "United States", lat: 47.6062, lon: -122.3321 },
  { name: "Denver", state: "CO", country: "United States", lat: 39.7392, lon: -104.9903 },
  { name: "Boston", state: "MA", country: "United States", lat: 42.3601, lon: -71.0589 },
  { name: "Miami", state: "FL", country: "United States", lat: 25.7617, lon: -80.1918 },
  { name: "Atlanta", state: "GA", country: "United States", lat: 33.749, lon: -84.388 },
  { name: "Las Vegas", state: "NV", country: "United States", lat: 36.1699, lon: -115.1398 },
  { name: "Portland", state: "OR", country: "United States", lat: 45.5152, lon: -122.6784 },
  { name: "Detroit", state: "MI", country: "United States", lat: 42.3314, lon: -83.0458 },

  // United Kingdom
  { name: "London", state: "England", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
  { name: "Manchester", state: "England", country: "United Kingdom", lat: 53.4808, lon: -2.2426 },
  { name: "Birmingham", state: "England", country: "United Kingdom", lat: 52.5085, lon: -1.8845 },
  { name: "Leeds", state: "England", country: "United Kingdom", lat: 53.8008, lon: -1.5491 },
  { name: "Glasgow", state: "Scotland", country: "United Kingdom", lat: 55.8642, lon: -4.2518 },
  { name: "Liverpool", state: "England", country: "United Kingdom", lat: 53.4084, lon: -2.9916 },
  { name: "Edinburgh", state: "Scotland", country: "United Kingdom", lat: 55.9533, lon: -3.1883 },
  { name: "Bristol", state: "England", country: "United Kingdom", lat: 51.4545, lon: -2.5879 },

  // Canada
  { name: "Toronto", state: "Ontario", country: "Canada", lat: 43.6532, lon: -79.3832 },
  { name: "Montreal", state: "Quebec", country: "Canada", lat: 45.5017, lon: -73.5673 },
  { name: "Vancouver", state: "British Columbia", country: "Canada", lat: 49.2827, lon: -123.1207 },
  { name: "Calgary", state: "Alberta", country: "Canada", lat: 51.0447, lon: -114.0719 },
  { name: "Ottawa", state: "Ontario", country: "Canada", lat: 45.4215, lon: -75.6972 },
  { name: "Edmonton", state: "Alberta", country: "Canada", lat: 53.5461, lon: -113.4938 },

  // India
  { name: "Mumbai", state: "Maharashtra", country: "India", lat: 19.076, lon: 72.8777 },
  { name: "Delhi", state: "Delhi", country: "India", lat: 28.7041, lon: 77.1025 },
  { name: "Bangalore", state: "Karnataka", country: "India", lat: 12.9716, lon: 77.5946 },
  { name: "Hyderabad", state: "Telangana", country: "India", lat: 17.385, lon: 78.4867 },
  { name: "Chennai", state: "Tamil Nadu", country: "India", lat: 13.0827, lon: 80.2707 },
  { name: "Kolkata", state: "West Bengal", country: "India", lat: 22.5726, lon: 88.3639 },
  { name: "Pune", state: "Maharashtra", country: "India", lat: 18.5204, lon: 73.8567 },
  { name: "Ahmedabad", state: "Gujarat", country: "India", lat: 23.0225, lon: 72.5714 },

  // China
  { name: "Beijing", state: "Beijing", country: "China", lat: 39.9042, lon: 116.4074 },
  { name: "Shanghai", state: "Shanghai", country: "China", lat: 31.2304, lon: 121.4737 },
  { name: "Guangzhou", state: "Guangdong", country: "China", lat: 23.1291, lon: 113.2644 },
  { name: "Shenzhen", state: "Guangdong", country: "China", lat: 22.5431, lon: 114.0579 },
  { name: "Chengdu", state: "Sichuan", country: "China", lat: 30.5728, lon: 104.0668 },
  { name: "Xi'an", state: "Shaanxi", country: "China", lat: 34.3416, lon: 108.9398 },

  // Japan
  { name: "Tokyo", state: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
  { name: "Osaka", state: "Osaka", country: "Japan", lat: 34.6937, lon: 135.5023 },
  { name: "Yokohama", state: "Kanagawa", country: "Japan", lat: 35.4437, lon: 139.638 },
  { name: "Kyoto", state: "Kyoto", country: "Japan", lat: 35.0116, lon: 135.7681 },
  { name: "Kobe", state: "Hyogo", country: "Japan", lat: 34.6901, lon: 135.1955 },

  // Australia
  { name: "Sydney", state: "New South Wales", country: "Australia", lat: -33.8688, lon: 151.2093 },
  { name: "Melbourne", state: "Victoria", country: "Australia", lat: -37.8136, lon: 144.9631 },
  { name: "Brisbane", state: "Queensland", country: "Australia", lat: -27.4698, lon: 153.0251 },
  { name: "Perth", state: "Western Australia", country: "Australia", lat: -31.9505, lon: 115.8605 },
  { name: "Adelaide", state: "South Australia", country: "Australia", lat: -34.9285, lon: 138.6007 },

  // Germany
  { name: "Berlin", state: "Berlin", country: "Germany", lat: 52.52, lon: 13.405 },
  { name: "Munich", state: "Bavaria", country: "Germany", lat: 48.1351, lon: 11.582 },
  { name: "Frankfurt", state: "Hesse", country: "Germany", lat: 50.1109, lon: 8.6821 },
  { name: "Hamburg", state: "Hamburg", country: "Germany", lat: 53.5511, lon: 9.4769 },
  { name: "Cologne", state: "North Rhine-Westphalia", country: "Germany", lat: 50.9375, lon: 6.9603 },

  // France
  { name: "Paris", state: "Île-de-France", country: "France", lat: 48.8566, lon: 2.3522 },
  { name: "Marseille", state: "Provence-Alpes-Côte d'Azur", country: "France", lat: 43.2965, lon: 5.3698 },
  { name: "Lyon", state: "Auvergne-Rhône-Alpes", country: "France", lat: 45.764, lon: 4.8357 },
  { name: "Toulouse", state: "Occitanie", country: "France", lat: 43.6047, lon: 1.4442 },
  { name: "Nice", state: "Provence-Alpes-Côte d'Azur", country: "France", lat: 43.7102, lon: 7.262 },

  // Spain
  { name: "Madrid", state: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
  { name: "Barcelona", state: "Catalonia", country: "Spain", lat: 41.3851, lon: 2.1734 },
  { name: "Valencia", state: "Valencia", country: "Spain", lat: 39.4699, lon: -0.3763 },
  { name: "Seville", state: "Andalusia", country: "Spain", lat: 37.3886, lon: -5.9823 },

  // Italy
  { name: "Rome", state: "Lazio", country: "Italy", lat: 41.9028, lon: 12.4964 },
  { name: "Milan", state: "Lombardy", country: "Italy", lat: 45.4642, lon: 9.19 },
  { name: "Naples", state: "Campania", country: "Italy", lat: 40.8518, lon: 14.2681 },
  { name: "Florence", state: "Tuscany", country: "Italy", lat: 43.7696, lon: 11.2558 },
  { name: "Venice", state: "Veneto", country: "Italy", lat: 45.4408, lon: 12.3155 },

  // Brazil
  { name: "São Paulo", state: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
  { name: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729 },
  { name: "Brasília", state: "Federal District", country: "Brazil", lat: -15.8267, lon: -47.8711 },
  { name: "Salvador", state: "Bahia", country: "Brazil", lat: -12.9714, lon: -38.5014 },
  { name: "Fortaleza", state: "Ceará", country: "Brazil", lat: -3.7319, lon: -38.5433 },

  // Mexico
  { name: "Mexico City", state: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332 },
  { name: "Guadalajara", state: "Jalisco", country: "Mexico", lat: 20.6597, lon: -103.3496 },
  { name: "Monterrey", state: "Nuevo León", country: "Mexico", lat: 25.6866, lon: -100.3161 },
  { name: "Cancún", state: "Quintana Roo", country: "Mexico", lat: 21.1629, lon: -86.8515 },

  // Russia
  { name: "Moscow", state: "Moscow", country: "Russia", lat: 55.7558, lon: 37.6173 },
  { name: "St. Petersburg", state: "Saint Petersburg", country: "Russia", lat: 59.9311, lon: 30.3609 },
  { name: "Novosibirsk", state: "Novosibirsk Oblast", country: "Russia", lat: 55.0415, lon: 82.9346 },
  { name: "Yekaterinburg", state: "Sverdlovsk Oblast", country: "Russia", lat: 56.8389, lon: 60.6057 },

  // United Arab Emirates
  { name: "Dubai", state: "Dubai", country: "United Arab Emirates", lat: 25.2048, lon: 55.2708 },
  { name: "Abu Dhabi", state: "Abu Dhabi", country: "United Arab Emirates", lat: 24.4539, lon: 54.3773 },

  // Thailand
  { name: "Bangkok", state: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018 },
  { name: "Chiang Mai", state: "Chiang Mai", country: "Thailand", lat: 18.7883, lon: 98.9853 },
  { name: "Pattaya", state: "Chon Buri", country: "Thailand", lat: 12.9271, lon: 100.8765 },

  // Singapore
  { name: "Singapore", state: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },

  // South Korea
  { name: "Seoul", state: "Seoul", country: "South Korea", lat: 37.5665, lon: 126.978 },
  { name: "Busan", state: "Busan", country: "South Korea", lat: 35.1796, lon: 129.0756 },
  { name: "Incheon", state: "Incheon", country: "South Korea", lat: 37.2756, lon: 126.7313 },

  // South Africa
  { name: "Johannesburg", state: "Gauteng", country: "South Africa", lat: -26.2023, lon: 28.0436 },
  { name: "Cape Town", state: "Western Cape", country: "South Africa", lat: -33.9249, lon: 18.4241 },
  { name: "Durban", state: "KwaZulu-Natal", country: "South Africa", lat: -29.8587, lon: 31.0218 },

  // Egypt
  { name: "Cairo", state: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357 },
  { name: "Alexandria", state: "Alexandria", country: "Egypt", lat: 31.2001, lon: 29.9187 },

  // New Zealand
  { name: "Auckland", state: "Auckland", country: "New Zealand", lat: -37.0882, lon: 174.7765 },
  { name: "Wellington", state: "Wellington", country: "New Zealand", lat: -41.2865, lon: 174.7762 },

  // Philippines
  { name: "Manila", state: "Metro Manila", country: "Philippines", lat: 14.5995, lon: 120.9842 },
  { name: "Cebu", state: "Cebu", country: "Philippines", lat: 10.3157, lon: 123.8854 },

  // Indonesia
  { name: "Jakarta", state: "Jakarta", country: "Indonesia", lat: -6.2088, lon: 106.8456 },
  { name: "Surabaya", state: "East Java", country: "Indonesia", lat: -7.2575, lon: 112.7521 },

  // Malaysia
  { name: "Kuala Lumpur", state: "Kuala Lumpur", country: "Malaysia", lat: 3.139, lon: 101.6869 },
  { name: "George Town", state: "Penang", country: "Malaysia", lat: 5.4164, lon: 100.3327 },

  // Vietnam
  { name: "Hanoi", state: "Hanoi", country: "Vietnam", lat: 21.0285, lon: 105.8542 },
  { name: "Ho Chi Minh City", state: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lon: 106.6297 },

  // Pakistan
  { name: "Karachi", state: "Sindh", country: "Pakistan", lat: 24.8607, lon: 67.0011 },
  { name: "Lahore", state: "Punjab", country: "Pakistan", lat: 31.5204, lon: 74.3587 },

  // Bangladesh
  { name: "Dhaka", state: "Dhaka", country: "Bangladesh", lat: 23.8103, lon: 90.4125 },

  // Turkey
  { name: "Istanbul", state: "Istanbul", country: "Turkey", lat: 41.0082, lon: 28.9784 },
  { name: "Ankara", state: "Ankara", country: "Turkey", lat: 39.9334, lon: 32.8597 },

  // Argentina
  { name: "Buenos Aires", state: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816 },

  // Chile
  { name: "Santiago", state: "Santiago Metropolitan", country: "Chile", lat: -33.4489, lon: -70.6693 },

  // Colombia
  { name: "Bogotá", state: "Bogotá", country: "Colombia", lat: 4.711, lon: -74.0721 },
  { name: "Medellín", state: "Antioquia", country: "Colombia", lat: 6.2442, lon: -75.5812 },

  // Peru
  { name: "Lima", state: "Lima", country: "Peru", lat: -12.0464, lon: -77.0428 },

  // Greece
  { name: "Athens", state: "Attica", country: "Greece", lat: 37.9838, lon: 23.7275 },

  // Portugal
  { name: "Lisbon", state: "Lisbon", country: "Portugal", lat: 38.7223, lon: -9.1393 },

  // Poland
  { name: "Warsaw", state: "Masovia", country: "Poland", lat: 52.2297, lon: 21.0122 },
  { name: "Krakow", state: "Lesser Poland", country: "Poland", lat: 50.0647, lon: 19.945 },

  // Sweden
  { name: "Stockholm", state: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },

  // Norway
  { name: "Oslo", state: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522 },

  // Finland
  { name: "Helsinki", state: "Helsinki", country: "Finland", lat: 60.1695, lon: 24.9354 },

  // Denmark
  { name: "Copenhagen", state: "Copenhagen", country: "Denmark", lat: 55.6761, lon: 12.5683 },

  // Netherlands
  { name: "Amsterdam", state: "North Holland", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
  { name: "Rotterdam", state: "South Holland", country: "Netherlands", lat: 51.9225, lon: 4.4792 },

  // Belgium
  { name: "Brussels", state: "Brussels", country: "Belgium", lat: 50.8503, lon: 4.3517 },
  { name: "Antwerp", state: "Flanders", country: "Belgium", lat: 51.2195, lon: 4.4017 },

  // Austria
  { name: "Vienna", state: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },

  // Switzerland
  { name: "Zurich", state: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5472 },
  { name: "Geneva", state: "Geneva", country: "Switzerland", lat: 46.2044, lon: 6.1432 },

  // Czech Republic
  { name: "Prague", state: "Prague", country: "Czech Republic", lat: 50.0755, lon: 14.4378 },

  // Hungary
  { name: "Budapest", state: "Budapest", country: "Hungary", lat: 47.4979, lon: 19.0402 },

  // Romania
  { name: "Bucharest", state: "Bucharest", country: "Romania", lat: 44.4268, lon: 26.1025 },

  // Israel
  { name: "Tel Aviv", state: "Tel Aviv", country: "Israel", lat: 32.0853, lon: 34.7818 },
  { name: "Jerusalem", state: "Jerusalem", country: "Israel", lat: 31.7683, lon: 35.2137 },

  // Saudi Arabia
  { name: "Riyadh", state: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lon: 46.6753 },
  { name: "Jeddah", state: "Mecca", country: "Saudi Arabia", lat: 21.5433, lon: 39.1728 },

  // Lebanon
  { name: "Beirut", state: "Beirut", country: "Lebanon", lat: 33.8886, lon: 35.4955 },

  // Jordan
  { name: "Amman", state: "Amman", country: "Jordan", lat: 31.9454, lon: 35.9284 },

  // Iraq
  { name: "Baghdad", state: "Baghdad", country: "Iraq", lat: 33.2232, lon: 43.6793 },

  // Iran
  { name: "Tehran", state: "Tehran", country: "Iran", lat: 35.6892, lon: 51.389 },

  // Kazakhstan
  { name: "Almaty", state: "Almaty", country: "Kazakhstan", lat: 43.238, lon: 76.9389 },

  // Ukraine
  { name: "Kyiv", state: "Kyiv", country: "Ukraine", lat: 50.4501, lon: 30.5234 },

  // Nigeria
  { name: "Lagos", state: "Lagos", country: "Nigeria", lat: 6.5244, lon: 3.3792 },

  // Ghana
  { name: "Accra", state: "Greater Accra", country: "Ghana", lat: 5.6037, lon: -0.187 },

  // Kenya
  { name: "Nairobi", state: "Nairobi", country: "Kenya", lat: -1.2921, lon: 36.8219 },

  // Ethiopia
  { name: "Addis Ababa", state: "Addis Ababa", country: "Ethiopia", lat: 9.032, lon: 38.7469 },
]

export function searchCities(query: string): City[] {
  const lowerQuery = query.toLowerCase()
  return citiesDatabase
    .filter(
      (city) =>
        city.name.toLowerCase().includes(lowerQuery) ||
        city.state.toLowerCase().includes(lowerQuery) ||
        city.country.toLowerCase().includes(lowerQuery),
    )
    .slice(0, 8) // Return top 8 matches
}
