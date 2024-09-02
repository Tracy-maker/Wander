import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">FORECAST</h2>
      <div className="flex justify-center items-center overflow-x-auto space-x-4">
        <Day data={data} />
      </div>
    </div>
  );
};

export default Forecast;
