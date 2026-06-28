import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';

const WeatherDashboard = () => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // OpenWeatherMap API Key (Replace with your own from https://openweathermap.org/api)
  const API_KEY = 'YOUR_API_KEY_HERE';

  // Fetch current weather
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      fetchForecast(data.coord.lat, data.coord.lon);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch 5-day forecast
  const fetchForecast = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      // Get forecast for next 5 days (one per day at noon)
      const dailyForecasts = data.list.filter((item, index) => index % 8 === 0);
      setForecast(dailyForecasts.slice(0, 5));
    } catch (err) {
      console.error('Forecast error:', err);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return <Sun size={64} className="text-yellow-400" />;
      case 'Clouds':
        return <Cloud size={64} className="text-gray-400" />;
      case 'Rain':
        return <CloudRain size={64} className="text-blue-400" />;
      default:
        return <Cloud size={64} className="text-gray-400" />;
    }
  };

  const getBackgroundGradient = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return 'from-blue-400 to-blue-600';
      case 'Clouds':
        return 'from-gray-400 to-gray-600';
      case 'Rain':
        return 'from-blue-600 to-gray-700';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">🌤️ Weather Dashboard</h1>
          <p className="text-xl text-gray-600">Real-time weather information at your fingertips</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="flex-1 px-4 py-3 rounded-lg border-2 border-blue-300 outline-none focus:border-blue-600 transition"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8 text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin">
              <Cloud size={64} className="text-blue-600" />
            </div>
            <p className="text-xl text-gray-600 mt-4">Loading weather data...</p>
          </div>
        )}

        {/* Current Weather Card */}
        {weather && !loading && (
          <>
            <div className={`bg-gradient-to-br ${getBackgroundGradient(weather.weather[0].main)} rounded-3xl shadow-2xl p-8 mb-8 text-white`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left - Temperature & Main Info */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-2">{weather.name}, {weather.sys.country}</h2>
                  <p className="text-xl opacity-90 mb-6 capitalize">{weather.weather[0].description}</p>
                  <div className="text-7xl font-bold mb-4">{Math.round(weather.main.temp)}°C</div>
                  <div className="space-y-2 text-lg">
                    <p>Feels like: <span className="font-semibold">{Math.round(weather.main.feels_like)}°C</span></p>
                    <p>Min: <span className="font-semibold">{Math.round(weather.main.temp_min)}°C</span> | Max: <span className="font-semibold">{Math.round(weather.main.temp_max)}°C</span></p>
                  </div>
                </div>

                {/* Right - Weather Icon */}
                <div className="flex items-center justify-center">
                  {getWeatherIcon(weather.weather[0].main)}
                </div>
              </div>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Humidity */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets size={32} className="text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Humidity</h3>
                </div>
                <p className="text-4xl font-bold text-blue-600">{weather.main.humidity}%</p>
                <p className="text-gray-600 mt-2">Water vapor in air</p>
              </div>

              {/* Wind Speed */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-3">
                  <Wind size={32} className="text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Wind Speed</h3>
                </div>
                <p className="text-4xl font-bold text-green-600">{weather.wind.speed} m/s</p>
                <p className="text-gray-600 mt-2">{Math.round(weather.wind.speed * 3.6)} km/h</p>
              </div>

              {/* Pressure */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-3">
                  <Gauge size={32} className="text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Pressure</h3>
                </div>
                <p className="text-4xl font-bold text-orange-600">{weather.main.pressure} hPa</p>
                <p className="text-gray-600 mt-2">Atmospheric pressure</p>
              </div>

              {/* Visibility */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-3">
                  <Eye size={32} className="text-purple-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Visibility</h3>
                </div>
                <p className="text-4xl font-bold text-purple-600">{(weather.visibility / 1000).toFixed(1)} km</p>
                <p className="text-gray-600 mt-2">Horizontal visibility</p>
              </div>
            </div>

            {/* 5-Day Forecast */}
            {forecast.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">5-Day Forecast</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {forecast.map((day, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition"
                    >
                      <p className="font-semibold text-gray-700 mb-3">
                        {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </p>
                      <div className="flex justify-center mb-3">
                        {getWeatherIcon(day.weather[0].main)}
                      </div>
                      <p className="capitalize text-gray-600 mb-3 text-sm">{day.weather[0].main}</p>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-blue-600">{Math.round(day.main.temp)}°C</p>
                        <p className="text-sm text-gray-600">High: {Math.round(day.main.temp_max)}°</p>
                        <p className="text-sm text-gray-600">Low: {Math.round(day.main.temp_min)}°</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Initial State */}
        {!weather && !loading && !error && (
          <div className="text-center py-16">
            <Cloud size={80} className="text-blue-400 mx-auto mb-4" />
            <p className="text-2xl text-gray-600">Enter a city name to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
