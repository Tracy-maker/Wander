import React, { useState } from "react";
import LocationSearch from "../components/LocationSearch";
import Current from "../components/Current/Current";
import Forecast from "../components/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import LoadingPage from "./LoadingPage";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = (searchData) => {
    // Handle search change logic
  };

  const handleCurrentLocationClick = () => {
    // Handle current location logic
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }}>
      <LocationSearch
        onSearchChange={handleOnSearchChange}
        onCurrentLocationClick={handleCurrentLocationClick}
      />
      {/* Additional code for weather display */}
    </div>
  );
};

export default Weather;
