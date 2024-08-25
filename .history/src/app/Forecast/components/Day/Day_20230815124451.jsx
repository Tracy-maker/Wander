import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const Day = ({ weather, temperature }) => (
  <div className="text-center mx-12">
    <div className="mb-5"></div>
    <WeatherImage className="w-16 h-16 mx-auto" weather={weather} />
    <div className="mt-5">
      <Temperature>{temperature}</Temperature>
    </div>
  </div>
);

export default Day;
