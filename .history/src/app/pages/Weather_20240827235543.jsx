import React, { useState } from "react";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing a location icon

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentCity, setCurrentCity] = useState("Unknown Location"); // State for city name
  const [loading, setLoading] = useState(false); // State for loading

  const handleOnSearchChange = (event) => {
    const searchData = event.target.value;
    const [lat, lon] = searchData.split(" ");
    fetchWeatherForLocation(lat, lon);
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
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const fetchWeatherForLocation = (lat, lon, isCurrentLocation = false) => {
    setLoading(true); // Start loading
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          const city = isCurrentLocation ? "Current Location" : "Searched Location";
          setCurrentWeather({
            city: city,
            ...currentWeatherResponse,
          });
          setForecast({ city: city, ...forecastResponse });
          if (isCurrentLocation) {
            setCurrentCity(currentWeatherResponse.name || "Current Location"); // Update city name
          }
        }
      })
      .finally(() => setLoading(false)) // End loading
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div
        className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }} // Background with same style
      >
        <div className="text-white text-3xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }} // Added marginTop
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-8rem] flex justify-center items-center space-x-4"> {/* Adjusted negative margin */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleOnSearchChange}
          />
        </div>
        <div className="flex-initial">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
            onClick={handleCurrentLocationClick}
          >
            <FaMapMarkerAlt className="mr-2" /> Current Location
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-start space-x-8 mt-8 mb-[-25px]"> {/* Added bottom margin */}
        <div className="w-2/3 bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 text-gray-800">
          {currentWeather || forecast ? (
            <>
              {currentWeather && (
                <div className="mb-6">
                  <Current data={currentWeather} />
                </div>
              )}
              {forecast && (
                <div>
                  <Forecast data={forecast} />
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-xl">Please search for a location or use your current location to display weather data.</div>
          )}
        </div>

        <div className="w-1/3 flex flex-col space-y-6">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 text-gray-800">
