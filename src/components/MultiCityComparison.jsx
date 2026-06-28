import React, { useState } from 'react';
import { MapPin, Calendar, Cloud, Droplets, Wind } from 'lucide-react';

const MultiCityComparison = () => {
  const [cities, setCities] = useState(['London', 'Paris', 'Tokyo']);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCity, setNewCity] = useState('');

  const API_KEY = 'YOUR_API_KEY_HERE';

  const fetchWeatherForCity = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) return null;
      return await response.json();
    } catch (err) {
      console.error('Error fetching weather:', err);
      return null;
    }
  };

  const loadAllWeather = async () => {
    setLoading(true);
    const data = [];
    for (let city of cities) {
      const weatherInfo = await fetchWeatherForCity(city);
      if (weatherInfo) {
        data.push(weatherInfo);
      }
    }
    setWeatherData(data);
    setLoading(false);
  };

  React.useEffect(() => {
    loadAllWeather();
  }, [cities]);

  const addCity = () => {
    if (newCity.trim() && !cities.includes(newCity)) {
      setCities([...cities, newCity]);
      setNewCity('');
    }
  };

  const removeCity = (cityName) => {
    setCities(cities.filter(c => c !== cityName));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Compare Multiple Cities</h2>

        {/* Add City Form */}
        <div className="mb-8 flex gap-2">
          <input
            type="text"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addCity()}
            placeholder="Add a city..."
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-600"
          />
          <button
            onClick={addCity}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Add City
          </button>
        </div>

        {/* Cities Comparison Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading weather data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData.map((weather) => (
              <div key={weather.id} className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-6 shadow-lg">
                {/* City Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{weather.name}</h3>
                    <p className="text-blue-100 flex items-center gap-1 mt-1">
                      <MapPin size={16} />
                      {weather.sys.country}
                    </p>
                  </div>
                  <button
                    onClick={() => removeCity(weather.name)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
                  >
                    ×
                  </button>
                </div>

                {/* Temperature */}
                <div className="text-5xl font-bold mb-3">{Math.round(weather.main.temp)}°C</div>
                <p className="text-blue-100 capitalize mb-4">{weather.weather[0].description}</p>

                {/* Details */}
                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Droplets size={18} />
                      Humidity
                    </span>
                    <span className="font-semibold">{weather.main.humidity}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Wind size={18} />
                      Wind
                    </span>
                    <span className="font-semibold">{weather.wind.speed} m/s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Cloud size={18} />
                      Clouds
                    </span>
                    <span className="font-semibold">{weather.clouds.all}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiCityComparison;
