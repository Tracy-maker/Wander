import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const Day = ({ dayOfWeek, weather, temperature }) => (
  <div className="text-center ml-11">
    <div className="mb-2">{dayOfWeek}</div>
    <WeatherImage className="w-16 h-16 mx-auto" weather={weather} />
    <div className="mt-2">
      <Temperature>{temperature}</Temperature>
    </div>
  </div>
);

export default Day;
