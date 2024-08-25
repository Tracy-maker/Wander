import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

import React from "react";
import ImageIcon from "../ImageIcons/ImageIcon";

const ForeCastContainer = "text-center flex justify-center items-center";

const FutureTemperature = "pl-1";
const DailyBox = "flex flex-col justify-center items-center mr-14 text-gray-600";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Weeks({ dailyForecast }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  return (
    <div className={ForeCastContainer}>
      {dailyForecast.slice(0, 5).map((item, index) => (
        <div key={index} className={DailyBox}>
          <div className="text-lg font-medium">{forecastDays[index]}</div>
          <ImageIcon weather={item.weather[0]} />
          <div className={FutureTemperature}>{`${parseFloat(
            item.main.temp
          ).toFixed(0)}°`}</div>
        </div>
      ))}
    </div>
  );
}

export default Weeks;
