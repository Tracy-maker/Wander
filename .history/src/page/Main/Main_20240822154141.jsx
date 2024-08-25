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

      <div className="relative z-10 w-full max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Typewriter Text */}
        <div className="text-xl sm:text-2xl lg:text-3xl text-white text-left font-light tracking-wider">
          <Typewriter
            options={{
              strings: ["Discover your city's weather...", "Plan your day with confidence!"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </div>

        {/* Right: Search Component */}
        <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <Search onSearchChange={handleOnSearchChange} className="text-2xl" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-start space-x-8 mt-12">
        {/* Left-side Combined Card */}
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

        {/* Right-side Components */}
        <div className="w-1/3 flex flex-col space-y-8">
          {/* Additional Components */}
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Additional Component 1</h3>
            <p>This is where your first additional component content goes.</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Additional Component 2</h3>
            <p>This is where your second additional component content goes.</p>
          </div>
          {/* Add more components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Main;
