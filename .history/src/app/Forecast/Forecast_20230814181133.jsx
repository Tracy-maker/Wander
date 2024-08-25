import Day from "./components/Day/Day";

const WEEK_DAYS=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Forecast = ({dailyWeatherData}) => {
 const dayInAWeek=new Date().getDay();
 const startIndex =(dayInAWeek+1)%7;
 const forecastDay=[];

 for (let i = startIndex; forecastDays.length < 7; i = (i + 1) % 7) {
  forecastDays.push({
    day: WEEK_DAYS[i],
    weatherCondition: dailyWeatherData[forecastDays.length]?.weatherCondition || "Unknown",
  });
}

  return (
    <div className=" text-black text-xl">
      <h2 className="m-0.5 tracking-wide font-light">Forecast</h2>
      <div className="mt-5 flex">
        <Day dayOfWeek="MON" temperature="9" weather="rain"></Day>
        <Day dayOfWeek="TUE" temperature="19" weather="rain"></Day>
        <Day dayOfWeek="WED" temperature="29" weather="rain"></Day>
        <Day dayOfWeek="THU" temperature="31" weather="rain"></Day>
        <Day dayOfWeek="FRI" temperature="19" weather="rain"></Day>
        <Day dayOfWeek="SAT" temperature="9" weather="rain"></Day>
        <Day dayOfWeek="SUN" temperature="19" weather="rain"></Day>
      </div>
    </div>
  );
};

export default Forecast;
