import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";
import Temperature from "../../../../components/Temperature/Temperature";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({ data }) => {
  const [nextFiveDaysData, setNextFiveDaysData] = useState([]);

  // Define forecastDays at the component level
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  console.log(data)
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

    // Group data by day
    weatherData.forEach((dataPoint) => {
      const date = moment(dataPoint.dt_txt, "YYYY-MM-DD HH:mm:ss").format(
        "YYYY-MM-DD"
      );
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(dataPoint);
    });

    // Filter and flatten grouped data for the next 5 days
    const nextFiveDaysData = Object.values(groupedData)
      .filter((dataPoints) => {
        const date = moment(dataPoints[0].dt_txt, "YYYY-MM-DD HH:mm:ss");
        return date.isSameOrAfter(today) && date.isBefore(fiveDaysLater);
      })
      .map((dataPoints) => dataPoints[0]);

    return nextFiveDaysData;
  };

  return (
    <div className=" mx-5 mb-4 text-center flex justify-center items-center">
      {nextFiveDaysData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mr-20 text-gray-600"
        >
          <div className="text-lg font-medium">{forecastDays[index]}</div>
          <WeatherImage weather={item.weather[0]} />
          <Temperature className="pl-1">{`${item.main.temp_max}`}</Temperature>
        </div>
      ))}
    </div>
  );
};

export default Day;
