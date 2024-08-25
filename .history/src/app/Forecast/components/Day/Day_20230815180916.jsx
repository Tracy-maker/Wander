import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  return (
    <div className="text-center flex justify-center items-center">
      {data.slice(0, 5).map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center mr-14 text-gray-600"Ç>
          <div className="text-lg font-medium">{forecastDays[index]}</div>
          <WeatherImage weather={item.weather[0]} />
          <Temperature className="pl-1">{`${parseFloat(item.main.temp).toFixed(
            0
          )}°`}</Temperature>
        </div>
      ))}
    </div>
  );
};

export default Day;
