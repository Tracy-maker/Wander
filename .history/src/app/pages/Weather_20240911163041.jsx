import React, { useState } from "react";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import LoadingPage from "./LoadingPage";
import LocationSearch from "../components/LocationSearch/LocationSearch";
import Loading from "../components/Loading";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentCity, setCurrentCity] = useState("Unknown Location");
  const [loading, setLoading] = useState(false);

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
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const fetchWeatherForLocation = (lat, lon) => {
    setLoading(true);
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          const city = currentWeatherResponse.name || "Unknown Location";
          setCurrentWeather({
            city: city,
            ...currentWeatherResponse,
          });
          setForecast({ city: city, ...forecastResponse });
          setCurrentCity(city);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There was an error fetching the weather data. Please try again."
        );
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative overflow-y-auto"
      style={{ backgroundImage: `url(${p1})` }} 
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between space-y-6 md:space-y-0 md:space-x-8 sm:mt-16"> {/* Reduced margin-top */}
        <div className="w-full md:w-1/3">
          <LocationSearch
            onSearchChange={handleOnSearchChange}
            onCurrentLocationClick={handleCurrentLocationClick}
          />
        </div>

        <div className="w-full md:w-2/3 bg-white bg-opacity-90 rounded-2xl shadow-xl p-1 text-gray-800">
          {currentWeather ? (
            <Current data={currentWeather} />
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-4">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-1">
          {forecast ? (
            <Forecast data={forecast} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
