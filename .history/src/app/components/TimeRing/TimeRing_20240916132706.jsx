import React from "react";

const TimeRing = ({ city, time, ringColor }) => {
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
    </div>
  );
};

export default TimeRing;
