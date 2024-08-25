import React from "react";
import Day from "./components/Day/Day";


function Forecast({data}) {
  return (
    <div className="p-7">
      <h2 className="text-xl font-semibold pb-4">FORECAST</h2>
    
      <Day data={data} />
    </div>
  );
}

export default Forecast;
