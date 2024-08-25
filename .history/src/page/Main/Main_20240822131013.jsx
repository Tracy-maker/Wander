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
    <>
     
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base relative"
        style={{ backgroundImage: `url(${p1})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0"></div>
        
        <div className="relative z-10 w-full max-w-3xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          <Search onSearchChange={handleOnSearchChange} />
        </div>

        <div className="relative z-10 text-2xl text-white text-center font-custom my-8 px-4">
          <Typewriter
            options={{
              strings: ["Please enter the city you are searching for..."],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center space-y-8">
          {currentWeather && (
            <div className="w-full bg-white bg-opacity-90 rounded-xl shadow-lg p-6 text-gray-900">
              <Current data={currentWeather} />
            </div>
          )}
          {forecast && (
            <div className="w-full bg-white bg-opacity-90 rounded-xl shadow-lg p-6 text-gray-900">
              <Forecast data={forecast} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
