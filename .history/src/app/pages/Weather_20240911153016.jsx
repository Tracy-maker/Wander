import React, { useState } from "react";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import Loading from "../components/Loading";
import LocationSearch from "../components/LocationSearch/LocationSearch";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentCity, setCurrentCity] = useState("Unknown Location");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For error messages

  const handleOnSearchChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      const coordinates = selectedOption.value.split(" ");
      if (coordinates.length === 2) {
        const [lat, lon] = coordinates;
        fetchWeatherForLocation(lat, lon);
      } else {
        console.error("Invalid coordinates format:", selectedOption.value);
      }
    }
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherForLocation(latitude, longitude, true);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const fetchWeatherForLocation = async (lat, lon) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        getCurrentWeather(lat, lon),
        getDailyForecast(lat, lon),
      ]);

      if (currentWeatherResponse && forecastResponse) {
        const city = currentWeatherResponse.name || "Unknown Location";
        setCurrentWeather({
          city: city,
          ...currentWeatherResponse,
        });
        setForecast({ city: city, ...forecastResponse });
        setCurrentCity(city);
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative p-4 overflow-y-auto"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between space-y-6 md:space-y-0 md:space-x-8 sm:mt-20">
        <div className="w-full md:w-1/3">
          <LocationSearch
            onSearchChange={handleOnSearchChange}
            onCurrentLocationClick={handleCurrentLocationClick}
          />
        </div>

        <div className="w-full md:w-2/3 bg-white bg-opacity-90 rounded-2xl shadow-xl p-1 text-gray-800">
          {loading ? (
            <Loading />
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : currentWeather ? (
            <Current data={currentWeather} />
          ) : (
            <p>No weather data available</p>
          )}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-4">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-1">
          {loading ? (
            <Loading />
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : forecast ? (
            <Forecast data={forecast} />
          ) : (
            <p>No forecast data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
