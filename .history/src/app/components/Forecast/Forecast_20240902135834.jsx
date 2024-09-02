import React from "react";
import Day from "./components/Day/Day";

const Forecast = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">FORECAST</h2>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* 假设 `data` 是一个数组，映射到多个 `Day` 组件 */}
        {data.map((dayData, index) => (
          <div key={index} className="w-full md:w-1/5 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
            <Day data={dayData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
