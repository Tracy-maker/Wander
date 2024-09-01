import React, { useState } from "react";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleOnSearchChange}
          />
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
        <div className="w-2/3 bg-white bg-opacity-90 rounded-2xl shadow-xl p-2 text-gray-800">
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

        <div className="w-1/3 flex flex-col space-y-8">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Additional Component 1</h3>
            <p>This is where your first additional component content goes.</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Additional Component 2</h3>
            <p>This is where your second additional component content goes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
