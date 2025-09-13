import React from "react";
import Lottie from "react-lottie-player";
import sunny from "../animations/sunny.json";
import cloudy from "../animations/Clouds.json";
import rain from "../animations/Rainy.json";
import thunder from "../animations/Thunderstorm.json";
import snow from "../animations/Snowflakes.json";
import drizzle from "../animations/weather icon drizzle.json";

export default function WeatherCard({ weather }) {
  const getAnimation = () => {
    const code = weather.weathercode;
    if (code === 0) return sunny;
    if ([1, 2, 3, 45, 48].includes(code)) return cloudy;
    if ([51, 53, 55, 66, 67].includes(code)) return drizzle;
    if ([61, 63, 65, 80, 81, 82].includes(code)) return rain;
    if ([71, 73, 75, 77, 85, 86].includes(code)) return snow;
    if ([95, 96, 99].includes(code)) return thunder;
    return sunny;
  };

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8 text-center">
      {/* City Name */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        {weather.cityName}, {weather.country}
      </h2>

      {/* Animated Icon */}
      <Lottie
        loop
        animationData={getAnimation()}
        play
        style={{ width: 120, height: 120, margin: "0 auto" }}
      />

      {/* Weather Description */}
      <p className="capitalize text-lg sm:text-xl text-gray-700 mb-4">
        {weather.description}
      </p>

      {/* Extra Details */}
      <div className="flex flex-col sm:flex-row justify-around gap-4 text-gray-700 font-medium text-base sm:text-lg">
        <div>
          <p className="text-indigo-700 font-bold text-xl sm:text-2xl">
            {weather.temperature}°C
          </p>
          <p>Temperature</p>
        </div>
        <div>
          <p className="text-indigo-700 font-bold text-xl sm:text-2xl">
            {weather.windspeed} km/h
          </p>
          <p>Wind</p>
        </div>
        <div>
          <p className="text-indigo-700 font-bold text-xl sm:text-2xl">
            {weather.feels_like}°C
          </p>
          <p>Feels Like</p>
        </div>
      </div>
    </div>
  );
}
