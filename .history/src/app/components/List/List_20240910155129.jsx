import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
  onSearch,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null); // To store the selected place

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  // Handler for when a place is clicked
  const handlePlaceClick = (place) => {
    setSelectedPlace(place); // Store the clicked place as the selected one
  };

  return (
    <div className="flex flex-col h-20 w-full bg-gray-300">
      {/* Header at the top */}
      <Header onSearch={onSearch} />

      {/* PlaceDetails card below the header */}
      {selectedPlace && (
        <div className="w-full lg:w-2/5 p-4 mx-auto mt-4 bg-white shadow-lg rounded-lg">
          <PlaceDetails selectedPlace={selectedPlace} />
        </div>
      )}

      <div className="flex-grow p-4 mt-4">
        <h4 className="text-xs font-semibold pb-2 text-white">
          Food & Dining Around You
        </h4>

        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div>
            {/* Filters */}
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-xs font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 block w-full pl-2 pr-10 py-1 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs rounded-md"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-xs font-medium text-gray-700"
              >
                Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-full pl-2 pr-10 py-1 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs rounded-md"
              >
                <option value="">All</option>
                <option value="3">Above 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </select>
            </div>

            {/* Scrollable List */}
            <div className="overflow-auto h-96">
              {" "}
              {/* Limit height to 96 (24rem) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {places?.map((place, i) => (
                  <div key={i} className="w-full max-w-xs mx-auto">
                    <PlaceDetails place={place} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
