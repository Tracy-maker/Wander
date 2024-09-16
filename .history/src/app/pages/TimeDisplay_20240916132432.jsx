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
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-bold mb-6">
        Current Time & International Times
      </h1>

      {/* Olympic Rings Design */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 items-center">
        {/* Current Local Time */}
        <LocalTimeRing time={localTime} />

        {/* Four Random Cities */}
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
