import React from "react";
import Weeks from "./components/Weeks/Weeks";

function Forecast({ dailyForecast, currentCityId }) {
  return (
    <div className="p-7">
      <h2 className="text-xl font-semibold pb-4">FORECAST</h2>
      {dailyForecast.map((id) => {
        if (currentCityId === id) {
          return null;
        }
        return null; // You can replace this with your actual content or logic
      })}
      <Weeks dailyForecast={dailyForecast} />
    </div>
  );
}

export default Forecast;
