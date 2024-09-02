import React from "react";

const Day = ({ data }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg text-center shadow-md">
      <h3 className="text-xl font-semibold">{data.day}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].main}
        className="mx-auto my-2"
      />
      <p>{data.weather[0].main}</p>
      <p className="mt-2 text-lg font-bold">
        {Math.round(data.temp.max)}°C / {Math.round(data.temp.min)}°C
      </p>
    </div>
  );
};

export default Day;
