import React from "react";

const TimeRing = ({ city, time, ringColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-32 h-32 rounded-full border-8 ${ringColor} flex justify-center items-center`}
      >
        <div className="text-lg font-semibold">{time}</div>
      </div>
      <div className="mt-2 text-center text-gray-700 text-sm font-medium">
        {city}
      </div>
    </div>
  );
};

export default TimeRing;
