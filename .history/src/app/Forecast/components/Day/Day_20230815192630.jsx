import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";
import Temperature from "../../../../components/Temperature/Temperature";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({ data }) => {
  const [nextSevenDaysData, setNextSevenDaysData] = useState([]);

  // Define forecastDays at the component level
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 3) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 7; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  useEffect(() => {
    if (data && Array.isArray(data.list)) {
      const filteredData = filterNextSevenDaysData(data.list);
      setNextSevenDaysData(filteredData);
    } else {
      console.error("Data is not in the expected format:", data);
    }
  }, [data]);

  const filterNextSevenDaysData = (weatherData) => {
    const today = moment();
    const sevenDaysLater = moment().add(7, "days");

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

    // Filter and flatten grouped data
    const nextSevenDaysData = Object.values(groupedData)
      .filter((dataPoints) => {
        const date = moment(dataPoints[0].dt_txt, "YYYY-MM-DD HH:mm:ss");
        return date.isSameOrAfter(today) && date.isBefore(sevenDaysLater);
      })
      .map((dataPoints) => dataPoints[0]);

    return nextSevenDaysData;
  };

  return (
    <div className="text-center flex justify-center items-center">
      {nextSevenDaysData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mr-14 text-gray-600"
        >
          <div className="text-lg font-medium">{forecastDays[index]}</div>
          <WeatherImage weather={item.weather[0]} />
          <Temperature className="pl-1">{`${item.main.temp}`}</Temperature>
        </div>
      ))}
    </div>
  );
};

export default Day;
