import React from "react";

const LoadingPage = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${p1})`, marginTop: "40px" }} // Background with same style
    >
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid mb-4"></div>
        <div className="text-white text-2xl font-semibold">
          Fetching the Latest Weather Data...
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
