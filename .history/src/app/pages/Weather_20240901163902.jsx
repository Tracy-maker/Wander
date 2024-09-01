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
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-8rem] flex justify-center items-center space-x-4">
        <LocationSearch
          onSearchChange={handleOnSearchChange}
          onCurrentLocationClick={handleCurrentLocationClick}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-start space-x-8 mt-8 mb-[-25px]">
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
            <Loading />
          )}
        </div>

       
      </div>
    </div>
  );
};

export default Weather;
