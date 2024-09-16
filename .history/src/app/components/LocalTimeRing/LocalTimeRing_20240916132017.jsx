import React from "react";

const LocalTimeRing = ({ time }) => {
  return (
    <div className="flex items-center justify-center w-36 h-36 rounded-full border-4 border-black">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Local Time</h2>
        <p className="text-2xl">{time}</p>
      </div>
    </div>
  );
};

export default LocalTimeRing;
