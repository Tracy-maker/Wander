import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";
import Temperature from "../../../../components/Temperature/Temperature";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({ data }) => {
  const [nextFiveDaysData, setNextFiveDaysData] = useState([]);

  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  useEffect(() => {
    if (data && Array.isArray(data.list)) {
      const filteredData = filterNextFiveDaysData(data.list);
      setNextFiveDaysData(filteredData);
    } else {
      console.error("Data is not in the expected format:", data);
    }
  }, [data]);

  const filterNextFiveDaysData = (weatherData) => {
    const today = moment();
    const fiveDaysLater = moment().add(5, "days");
    const groupedData = {};

    weatherData.forEach((dataPoint) => {
      const date = moment(dataPoint.dt_txt, "YYYY-MM-DD HH:mm:ss").format(
        "YYYY-MM-DD"
      );
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(dataPoint);
    });

    const nextFiveDaysData = Object.values(groupedData)
      .filter((dataPoints) => {
        const date = moment(dataPoints[0].dt_txt, "YYYY-MM-DD HH:mm:ss");
        return date.isSameOrAfter(today) && date.isBefore(fiveDaysLater);
      })
      .map((dataPoints) => dataPoints[0]);

    return nextFiveDaysData;
  };

  return (
    <div className="mb-2 flex justify-center ">
      {nextFiveDaysData.map((item, index) => (
        <div
          key={index}
          className="flex-col mx-4 p-2 text-gray-600 text-center  "
        >
          <div className="text-lg font-medium">{forecastDays[index]}</div>
          <div className="flex justify-center">
            <WeatherImage weather={item.weather[0]} />
          </div>
          <div className="flex justify-center">
            <Temperature>
              {`${parseFloat(item.main.temp_min).toFixed(1)}`} /{" "}
              {`${parseFloat(item.main.temp_max).toFixed(1)}`}
            </Temperature>
          </div>
        </div>
      ))}
    </div>
  );
}  
export default Day;
