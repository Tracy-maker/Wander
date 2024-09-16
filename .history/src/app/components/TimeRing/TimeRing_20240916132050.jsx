import React from "react";

const TimeRing = ({ city, time, ringColor }) => {
  return (
    <div className={`flex items-center justify-center w-36 h-36 rounded-full border-4 ${ringColor}`}>
      <div className="text-center">
        <h2 className="text-xl font-semibold">{city}</h2>
        <p className="text-2xl">{time}</p>
      </div>
    </div>
  );
};

export default TimeRing;
