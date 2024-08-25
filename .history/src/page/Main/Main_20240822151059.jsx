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

      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
      </div>

      <div className="relative z-10 text-2xl sm:text-3xl lg:text-4xl text-white text-center font-light my-12 tracking-wider">
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

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-12">
        {currentWeather && (
          <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <Current data={currentWeather} />
          </div>
        )}
        {forecast && (
          <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
            <Forecast data={forecast} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
