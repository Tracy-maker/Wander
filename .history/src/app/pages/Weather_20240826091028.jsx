import React, { useState } from "react";
import Search from "../components/Search/Search";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    fetchWeatherForLocation(lat, lon);
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherForLocation(latitude, longitude);
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

  const fetchWeatherForLocation = (lat, lon) => {
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          setCurrentWeather({
            city: "Current Location",
            ...currentWeatherResponse,
          });
          setForecast({ city: "Current Location", ...forecastResponse });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-10rem] flex justify-center items-center space-x-4">
        <div className="flex-1">
          <div className="w-full bg-white bg-opacity-20 p-4 rounded-lg shadow-lg backdrop-blur-sm">
            <Search onSearchChange={handleOnSearchChange} className="text-2xl" />
          </div>
        </div>
        <div className="flex-initial">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handleCurrentLocationClick}
          >
            Current Location
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-start space-x-8 mt-12">
        <div className="w-2/3 bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
          {currentWeather && (
            <div className="mb-8">
              <Current data={currentWeather} />
            </div>
          )}
          {forecast && (
            <div>
              <Forecast data={forecast} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
