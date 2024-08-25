import React, { Component } from 'react';
import moment from 'moment'; // Make sure to import the moment library

import Temperature from '../../../../components/Temperature/Temperature';
import WeatherImage from '../../../../components/WeatherImage/WeatherImage';

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

class Day extends Component {
  state = {
    nextSevenDaysData: [], // Initialize the state
  };

  componentDidMount() {
    this.filterNextSevenDaysData();
  }

  filterNextSevenDaysData = () => {
    const { data } = this.props; // Using the 'data' prop passed to the component
    const today = moment();
    const sevenDaysLater = moment().add(7, 'days');

    const nextSevenDaysData = [];
    data.forEach(dayData => {
      dayData.forEach(dataPoint => {
        const date = moment(dataPoint[0], 'YYYY-MM-DD');
        if (date.isSameOrAfter(today) && date.isBefore(sevenDaysLater)) {
          nextSevenDaysData.push(dataPoint);
        }
      });
    });

    this.setState({ nextSevenDaysData });
  };

  render() {
    const { nextSevenDaysData } = this.state;
    const dayInAWeek = new Date().getDay();
    const startIndex = (dayInAWeek + 1) % 7;
    const forecastDays = [];
    for (let i = startIndex; forecastDays.length < 5; i = (i + 1) % 7) {
      forecastDays.push(WEEK_DAYS[i]);
    }

    return (
      <div className="text-center flex justify-center items-center">
        {nextSevenDaysData.slice(0, 5).map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center mr-14 text-gray-600">
            <div className="text-lg font-medium">{forecastDays[index]}</div>
            <WeatherImage weather={item.weather[0]} />
            <Temperature className="pl-1">{`${parseFloat(item.main.temp).toFixed(0)}°`}</Temperature>
          </div>
        ))}
      </div>
    );
  }
}

export default Day;
