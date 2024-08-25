const WeatherImage = ({ weatherIcon }) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${weatherIcon[0]}.png`}
      alt={weatherIcon.main}
    />
  );
};
export default WeatherImage;
