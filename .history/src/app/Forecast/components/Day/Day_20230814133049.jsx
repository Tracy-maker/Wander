import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const Day = ({ dayOfWeek, weather, temperature }) => (
  <div className="text-center mx-16">
    <div className="mb-5">{dayOfWeek}</div>
    <WeatherImage className="w-16 h-16 mx-auto" weatherIcon={weather} />
    <div className="mt-5">
      <Temperature>{temperature}</Temperature>
    </div>
  </div>
);

export default Day;
