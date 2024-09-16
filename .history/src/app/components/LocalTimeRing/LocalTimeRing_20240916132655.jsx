import React from "react";

const LocalTimeRing = ({ time }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full border-8 border-gray-700 flex justify-center items-center">
        <div className="text-3xl font-semibold">{time}</div>
      </div>
      <div className="mt-2 text-center text-gray-900 text-xl font-bold">
        Local Time
      </div>
    </div>
  );
};

export default LocalTimeRing;
