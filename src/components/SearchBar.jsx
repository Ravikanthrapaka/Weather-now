import React from "react";

export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mb-8">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-indigo-300 bg-white/70 backdrop-blur-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={onSearch}
        className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold shadow-md"
      >
        Search
      </button>
    </div>
  );
}
