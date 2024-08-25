import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const Day = ({ dayOfWeek, weather, temperature }) => (
  <div className="text-center ml-10">
    <div className="mb-4">{dayOfWeek}</div>
    <WeatherImage className="w-16 h-16 mx-auto" weather={weather} />
    <div className="mt-4">
      <Temperature>{temperature}</Temperature>
    </div>
  </div>
);

export default Day;
