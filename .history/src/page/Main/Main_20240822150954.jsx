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
      {/* Darker Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-0"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <Search onSearchChange={handleOnSearchChange} />
      </div>

      <div className="relative z-10 text-xl sm:text-2xl lg:text-3xl text-white text-center font-medium my-8 px-4">
        <Typewriter
          options={{
            strings: ["Enter a city to get started...", "Search your city's weather now!"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-8">
        {currentWeather && (
          <div className="w-full bg-white bg-opacity-80 rounded-lg shadow-md p-6 text-gray-900">
            <Current data={currentWeather} />
          </div>
        )}
        {forecast && (
          <div className="w-full bg-white bg-opacity-80 rounded-lg shadow-md p-6 text-gray-900">
            <Forecast data={forecast} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
