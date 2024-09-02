import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">FORECAST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Day data={data} />
      </div>
    </div>
  );
};

export default Forecast;
