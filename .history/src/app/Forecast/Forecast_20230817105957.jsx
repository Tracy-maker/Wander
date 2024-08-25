import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div className="p-1">
      <h2 className="mt-4 mb-4 text-xl pb-2">FORECAST</h2>
      <div className=" py-10 px-16" >
        <Day data={data} />
      </div>
    </div>
  );
};

export default Forecast;
