import React, { useState } from "react";
import Search from "../../app/Search/Search";
import Current from "../../app/Current/Current";
import Forecast from "../../app/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import Typewriter from "typewriter-effect";

const Main = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          setCurrentWeather({
            city: searchData.label,
            ...currentWeatherResponse,
          });
          setForecast({ city: searchData.label, ...forecastResponse });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})` }}
    >
      {/* Subtle Blur Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12">
        {/* Left Side: Weather Card */}
        <div className="w-full sm:w-2/5 bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
          {currentWeather && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {currentWeather.city} Weather
              </h2>
              <Current data={currentWeather} />
            </div>
          )}
          {forecast && (
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-4">Forecast</h2>
              <Forecast data={forecast} />
            </div>
          )}
        </div>

        {/* Right Side: Other Components */}
        <div className="w-full sm:w-3/5 flex flex-col space-y-8">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 text-gray-900">
            {/* Replace with your other component */}
            <div>Additional Component 1</div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 text-gray-900">
            {/* Replace with your other component */}
            <div>Additional Component 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
