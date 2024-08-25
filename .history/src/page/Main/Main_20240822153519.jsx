<div className="w-2/3">
    {currentWeather && (
      <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800 mb-8">
        <Current data={currentWeather} />
      </div>
    )}
    {forecast && (
      <div className="w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 text-gray-800">
        <Forecast data={forecast} />
      </div>
    )}
  </div>