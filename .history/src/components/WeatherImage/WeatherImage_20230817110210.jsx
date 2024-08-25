import React from "react";

const WeatherImage = ({ weather }) => {
  if (!weather) {
    return <div>No weather data available</div>;
  }

  const { icon } = weather;

  return <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />;
};

export default WeatherImage;