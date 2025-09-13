Weather Now 🌤️🌧️

Weather Now is a responsive web application that provides real-time weather updates for any city worldwide. It features animated weather icons, a default city view, loading spinners, and proper error handling. Built using React, Tailwind CSS, and the Open-Meteo API, this project showcases practical frontend development with LLM-assisted implementation.

Features

Default city weather displayed on page load (Delhi).

Search and display weather for any city worldwide.

Animated weather icons for different conditions: sunny, cloudy, rain, snow, drizzle, thunder.

Responsive design for desktop and mobile.

Loading spinner while fetching weather data.

Error handling for invalid city names or API errors.

Tailwind CSS styling with gradient backgrounds.

Tech Stack

Frontend: React.js

Styling: Tailwind CSS

Animations: Lottie JSON animations (react-lottie-player)

API: Open-Meteo Geocoding & Weather API

State Management: React useState & useEffect

Installation

Clone the repository:

git clone https://github.com/yourusername/weather-now.git


Navigate to the project folder:

cd weather-now


Install dependencies:

npm install


Run the app:

npm start


The app will run at http://localhost:5173.

Usage

On load, the app displays Delhi’s weather by default.

Enter a city name in the search bar and click Search to fetch its weather.

Weather details (temperature, description, animated icon) update dynamically.

If the city is invalid, an error message is displayed.

Folder Structure
weather-now/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── Loader.jsx
│   ├── animations/
│   │   ├── sunny.json
│   │   ├── cloudy.json
│   │   ├── rain.json
│   │   ├── snow.json
│   │   ├── drizzle.json
│   │   └── thunder.json
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── tailwind.config.js

LLM Assistance

This project was developed with guidance from ChatGPT to:

Structure the project and components

Integrate Open-Meteo API for weather data

Implement animated weather icons

Handle default city, loading, errors, and responsive design

Live Demo

View on CodeSandbox

License

This project is confidential and developed for the Aganitha take-home assignment. It is not intended for public use.
