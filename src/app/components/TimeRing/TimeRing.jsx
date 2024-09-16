import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const TimeRing = ({ city, time, ringColor, isDayTime }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-40 h-40 rounded-full border-8 ${ringColor} flex justify-center items-center`}
      >
        <div className="text-xl font-semibold">{time}</div>
      </div>
      <div className="mt-2 text-center text-gray-700 text-lg font-medium">
        {city}
      </div>
     
      <div className="text-center mt-2 flex items-center">
        {isDayTime ? (
          <FaSun className="text-yellow-500 mr-2" />
        ) : (
          <FaMoon className="text-blue-500 mr-2" />
        )}
        <span>{isDayTime ? "Daytime" : "Nighttime"}</span>
      </div>
    </div>
  );
};

export default TimeRing;
