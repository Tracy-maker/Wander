const WeatherImage = ({ weatherIcon }) => {
    return (
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon.icon}.png`}
          alt={weatherIcon.main}
        />
      );
    }
export default WeatherImage;
