import React, { useState, useEffect } from 'react';
import moment from 'moment'; // Make sure to import the moment library
import Temperature from './components/Temperature/Temperature'; // Update the path
import WeatherImage from './components/WeatherImage/WeatherImage'; // Update the path

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Day = ({data}) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    
  }, []);

  const filterNextSevenDaysData = () => {
    const today = moment();
    const sevenDaysLater = moment().add(7, 'days');

    const nextSevenDaysData = [];
    weatherData.forEach(dayData => {
      dayData.forEach(dataPoint => {
        const date = moment(dataPoint[0], 'YYYY-MM-DD');
        if (date.isSameOrAfter(today) && date.isBefore(sevenDaysLater)) {
          nextSevenDaysData.push(dataPoint);
        }
      });
    });

    return nextSevenDaysData;
  };

  const nextSevenDaysData = filterNextSevenDaysData();
  const dayInAWeek = new Date().getDay();
  const startIndex = (dayInAWeek + 1) % 7;
  const forecastDays = [];
  for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
    forecastDays.push(WEEK_DAYS[i]);
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div className="text-center flex justify-center items-center">
        {nextSevenDaysData.slice(0, 5).map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center mr-14 text-gray-600">
            <div className="text-lg font-medium">{forecastDays[index]}</div>
            <WeatherImage weather={item.weather[0]} />
            <Temperature className="pl-1">{`${parseFloat(item.main.temp).toFixed(0)}°`}</Temperature>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
