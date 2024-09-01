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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-4"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <LocationSearch
        onSearchChange={handleOnSearchChange}
        onCurrentLocationClick={handleCurrentLocationClick}
      />
      
      <div className="w-full max-w-4xl mt-8">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          {currentWeather ? (
            <Current data={currentWeather} />
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-6">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
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
