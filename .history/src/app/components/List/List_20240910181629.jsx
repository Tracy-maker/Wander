import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import Header from '../Header/Header';  // Import the Header

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading, onSearch }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className="flex flex-col h-full w-full bg-gray-300">
      {/* Header inside List */}
      <Header onSearch={onSearch} />
{/* List Content with Filters and Places */}
<div className="flex-grow p-6 mt-10">  {/* Increased mt-5 to mt-10 */}
  <h4 className="text-2xl font-semibold mb-4">Food & Dining around you</h4>

  {isLoading ? (
    <div className="flex h-96 justify-center items-center">
      <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
  ) : (
    <>
      {/* Filters */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
        <select
          className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
        <select
          className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All</option>
          <option value="3">Above 3.0</option>
          <option value="4">Above 4.0</option>
          <option value="4.5">Above 4.5</option>
        </select>
      </div>

      {/* Scrollable list of places */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto h-[75vh]">
        {places?.map((place, i) => (
          <div key={i} className="w-full">
            <PlaceDetails selected={Number(childClicked) === i} place={place} />
          </div>
        ))}
      </div>
    </>
  )}
</div>


            {/* Scrollable list of places */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto h-[75vh]">
              {places?.map((place, i) => (
                <div ref={elRefs[i]} key={i} className="w-full">
                  <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
