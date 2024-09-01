import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaSearchLocation className="text-6xl text-blue-500 mb-4" />
        <div className="text-2xl font-semibold mb-2 text-gray-700">
          No Weather Data Available
        </div>
        <div className="text-lg text-gray-500">
          Please search for a location or use your current location to display
          weather data.
        </div>
      </div>
    </div>
  );
};

export default Loading;
