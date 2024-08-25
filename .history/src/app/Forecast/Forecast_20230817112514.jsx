import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div >
      <h2 className="mt-4 mb-4 text-xl pb-2">FORECAST</h2>
      <div className="flex" >
        <Day data={data} />
      </div>
    </div>
  );
};

export default Forecast;
