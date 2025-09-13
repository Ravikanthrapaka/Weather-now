import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [city, setCity] = useState(""); // User input
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const DEFAULT_CITY = "Delhi";

  const getWeatherDescription = (code) => {
    if (code === 0) return "Clear";
    if ([1, 2, 3, 45, 48].includes(code)) return "Clouds";
    if ([51, 53, 55, 66, 67].includes(code)) return "Drizzle";
    if ([61, 63, 65, 80, 81, 82].includes(code)) return "Rain";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";
    return "Clear";
  };

  const fetchWeather = async (queryCity) => {
    if (!queryCity.trim()) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // 1. Geocoding
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${queryCity}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error("City not found");

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Current Weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      const current = weatherData.current_weather;

      // 3. Feels-like approximation: Open-Meteo doesn’t provide directly.
      //    We'll assume: feels_like = temperature for simplicity.
      setWeather({
        temperature: Math.round(current.temperature),
        windspeed: Math.round(current.windspeed),
        feels_like: Math.round(current.temperature),
        weathercode: current.weathercode,
        cityName: name,
        country,
        description: getWeatherDescription(current.weathercode),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-10 drop-shadow">
        Weather Now
      </h1>

      <SearchBar city={city} setCity={setCity} onSearch={() => fetchWeather(city)} />

      {loading && (
        <div className="flex items-center gap-2 text-indigo-700 font-medium">
          <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-600 bg-red-100 px-4 py-2 rounded-lg">
          ⚠️ {error}
        </p>
      )}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
