import React from "react";


function Forecast({data}) {
  return (
    <div className="p-7">
      <h2 className="text-xl font-semibold pb-4">FORECAST</h2>
    
      <DynamicsCo data={data} />
    </div>
  );
}

export default Forecast;
