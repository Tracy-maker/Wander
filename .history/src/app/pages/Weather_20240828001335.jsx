import React, { useState } from "react";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import { FaMapMarkerAlt, FaSearchLocation } from "react-icons/fa"; // Importing location and search icons
import LoadingPage from "./LoadingPage";
import LocationSearch from "../components/LocationSearch";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [currentCity, setCurrentCity] = useState("Unknown Location"); // State for city name
  const [loading, setLoading] = useState(false); // State for loading

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

  const fetchWeatherForLocation = (lat, lon, isCurrentLocation = false) => {
    setLoading(true); // Start loading
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          const city = isCurrentLocation
            ? "Current Location"
            : "Searched Location";
          setCurrentWeather({
            city: city,
            ...currentWeatherResponse,
          });
          setForecast({ city: city, ...forecastResponse });
          if (isCurrentLocation) {
            setCurrentCity(currentWeatherResponse.name || "Current Location"); // Update city name
          }
        }
      })
      .finally(() => setLoading(false)) // End loading
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }} // Added marginTop
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-8rem] flex justify-center items-center space-x-4">
        {" "}
        {/* Adjusted negative margin */}
        <div className="flex-1">
        <LocationSearch
        onSearchChange={handleOnSearchChange}
        onCurrentLocationClick={handleCurrentLocationClick}
      />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-start space-x-8 mt-8 mb-[-25px]">
        {" "}
        {/* Added bottom margin */}
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
            <div className="flex flex-col items-center justify-center h-64">
              <div className="bg-gray-200 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <FaSearchLocation className="text-6xl text-blue-500 mb-4" />
                <div className="text-2xl font-semibold mb-2 text-gray-700">
                  No Weather Data Available
                </div>
                <div className="text-lg text-gray-500">
                  Please search for a location or use your current location to
                  display weather data.
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/3 flex flex-col space-y-6">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Current City</h3>
            <p>{currentCity}</p> {/* Display the current city name */}
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">
              Additional Component 2
            </h3>
            <p>This is where your second additional component content goes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
