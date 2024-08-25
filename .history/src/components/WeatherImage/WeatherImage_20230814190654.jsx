import React from "react";

const WeatherImage = ({ weather }) => {
  if (!weather) {
    // Handle case where weather is null
    return <div>No weather data available</div>;
  }

  // Assuming 'icon' is a property of the weather object
  const { icon } = weather;

  return <img src={`URL_TO_WEATHER_ICONS/${icon}.png`} alt="Weather Icon" />;
};

export default WeatherImage;