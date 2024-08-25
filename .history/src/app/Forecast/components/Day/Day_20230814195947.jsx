import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

import ImageIcon from "../ImageIcons/ImageIcon";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Weeks({ dailyForecast }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  return (
    <div className="flex justify-center items-center">
      {dailyForecast.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mr-8 text-gray-600"
        >
          <p className="text-lg font-medium">{forecastDays[index]}</p>
          <WeatherImage weather={item.weather[0]} />
          <p className="text-lg">{`${parseFloat(item.main.temp).toFixed(0)}°`}</p>
        </div>
      ))}
    </div>
  );
}

export default Weeks;

