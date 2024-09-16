import React from "react";

const LocalTimeRing = ({ time }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 rounded-full border-8 border-gray-700 flex justify-center items-center">
        <div className="text-2xl font-semibold">{time}</div>
      </div>
      <div className="mt-2 text-center text-gray-900 text-lg font-bold">
        Local Time
      </div>
    </div>
  );
};

export default LocalTimeRing;
