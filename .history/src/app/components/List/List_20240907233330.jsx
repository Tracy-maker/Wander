import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="p-4 w-1/3 fixed bg-gray-300">
      <h4 className="text-xs font-semibold pb-2 text-white">Food & Dining Around You</h4> 
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div> 
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="type" className="block text-xs font-medium text-gray-700">
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
            <label htmlFor="rating" className="block text-xs font-medium text-gray-700">
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
          <div className="grid gap-2 grid-cols-1 overflow-auto h-1/5">
  {places?.map((place, i) => (
    <div ref={elRefs[i]} key={i} className="w-1/3 max-w-sm mx-auto">
      <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
    </div>
  ))}
</div>

        </>
      )}
    </div>
  );
};

export default List;
