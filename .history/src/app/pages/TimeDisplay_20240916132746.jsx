/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import LocalTimeRing from "../components/LocalTimeRing/LocalTimeRing";
import TimeRing from "../components/TimeRing/TimeRing";

const TimeDisplay = () => {
  const [localTime, setLocalTime] = useState("");
  const [cityTimes, setCityTimes] = useState([]);

  // List of time zones
  const timezones = moment.tz.names();

  // Function to get random time zones
  const getRandomTimeZones = (num) => {
    const shuffledTimezones = timezones.sort(() => 0.5 - Math.random());
    return shuffledTimezones.slice(0, num);
  };

  useEffect(() => {
    // Set the local time once
    setLocalTime(moment().format("HH:mm:ss"));

    // Get random 4 cities' times once
    const selectedTimeZones = getRandomTimeZones(4);
    const cityTimesData = selectedTimeZones.map((timezone) => {
      const parts = timezone.split("/");
      const cityName = parts.length > 1 ? parts[1].replace("_", " ") : parts[0];
      return {
        name: cityName,
        time: moment.tz(timezone).format("HH:mm:ss"),
      };
    });

    setCityTimes(cityTimesData);
  }, []);

  return (
    <div className="flex flex-col items-center mt-2、2">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Global Time Display
      </h1>

      {/* Olympic Rings Design */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Current Local Time in the center */}
        <div className="flex justify-center mb-4">
          <LocalTimeRing time={localTime} />
        </div>

        {/* Four Random Cities */}
        <div className="flex justify-center gap-6 mt-4">
          {cityTimes.map((city, index) => (
            <TimeRing
              key={index}
              city={city.name}
              time={city.time}
              ringColor={getRingColor(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Function to get different ring colors based on index (Olympic Rings colors)
const getRingColor = (index) => {
  const colors = [
    "border-blue-500",
    "border-black",
    "border-red-500",
    "border-yellow-500",
    "border-green-500",
  ];
  return colors[index % colors.length];
};

export default TimeDisplay;
