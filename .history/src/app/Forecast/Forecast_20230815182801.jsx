import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl pb-4">FORECAST</h2>
      <div className="flex space-x-4">
        <Day data={data} />
      </div>
    </div>
  );
};

export default Forecast;
