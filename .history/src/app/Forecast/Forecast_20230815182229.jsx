import React from "react";
import Day from "./components/Day/Day";


const Forecast=({data})=> {
  return (
    <div className="p-2">
      <h2 className="text-xl pb-4">FORECAST</h2>
      <Day data={data} />
    </div>
  );
}

export default Forecast;
