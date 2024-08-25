import Day from "./components/Day/Day";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];

  for (let i = startIndex; forecastDays.length < 7; i = (i + 1) % 7) {
    forecastDays.push({
      day: WEEK_DAYS[i],
      ...data[forecastDays.length],
    });
  }

  return (
    <div className="text-black text-xl">
      <h2 className="m-0.5 tracking-wide font-light">Forecast</h2>
      <div className="mt-5 flex">
        {forecastDays.map((dayData, index) => {
          console.log("Current dayData:", dayData); // Add this line for debugging
          const weather = dayData.weather ? dayData.weather[1] : null;

          return (
            <Day
              key={index}
              dayOfWeek={dayData.day}
              weather={weather}
              temperature={dayData.temperature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
