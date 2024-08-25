import Day from "./components/Day/Day";

const WEEK_DAYS=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Forecast = ({data}) => {
 const dayInAWeek=new Date().getDay();
 const startIndex =(dayInAWeek+1)%7;
 const forecastDays=[];

 for (let i = startIndex; forecastDays.length < 7; i = (i + 1) % 7) {
  forecastDays.push({
    day: WEEK_DAYS[i],
    weatherCondition: data[forecastDays.length]?.weatherCondition || "Unknown",
  });
}

  return (
    <div className=" text-black text-xl">
      <h2 className="m-0.5 tracking-wide font-light">Forecast</h2>
      <div className="mt-5 flex">
        <div>MON</div>
        <Day  temperature="9" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="19" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="29" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="31" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="19" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="9" weather="rain"></Day>
        <div>MON</div>
        <Day  temperature="19" weather="rain"></Day>
        <div>MON</div>
      </div>
    </div>
  );
};

export default Forecast;
