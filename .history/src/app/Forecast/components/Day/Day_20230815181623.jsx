import React, { useEffect, useState } from "react";
import moment from "moment";
import Temperature from "../../../../components/Temperature/Temperature";
import WeatherImage from "../../../../components/WeatherImage/WeatherImage";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({ data }) => {
  const [nextSevenDaysData, setNextSevenDaysData] = useState([]);

  useEffect(() => {
    filterNextSevenDaysData();
  }, []);

  const filterNextSevenDaysData = () => {
    const today = moment(); // Get today's date
    const sevenDaysLater = moment().add(7, 'days'); // Calculate date 7 days later

    const filteredData = data.reduce((acc, dayData) => {
      const filteredDayData = dayData.filter(dataPoint => {
        const date = moment(dataPoint[0], 'YYYY-MM-DD');
        return date.isSameOrAfter(today) && date.isBefore(sevenDaysLater);
      });
      
      if (filteredDayData.length > 0) {
        acc.push(filteredDayData);
      }
      
      return acc;
    }, []);

    setNextSevenDaysData(filteredData);
  };

  return (
    <div className="text-center flex justify-center items-center">
      {nextSevenDaysData.map((dayData, index) => (
        <div key={index} className="flex flex-col justify-center items-center mr-14 text-gray-600">
          <div className="text-lg font-medium">{WEEK_DAYS[index]}</div>
          <WeatherImage weather={dayData[0].weather[0]} />
          <Temperature className="pl-1">{`${parseFloat(dayData[0].main.temp).toFixed(0)}°`}</Temperature>
        </div>
      ))}
    </div>
  );
};

export default Day;
