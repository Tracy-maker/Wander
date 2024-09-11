import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import Header from '../Header/Header';
import Filters from '../Filters/Filters'; // Import Filters

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
      <div className="flex-grow p-6 mt-40">  
        <h4 className="text-2xl font-semibold mb-4">Food & Dining around you</h4>

        {isLoading ? (
          <div className="flex h-96 justify-center items-center">
            <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          </div>
        ) : places?.length === 0 ? (
          <div className="text-center text-gray-500">No places found</div>
        ) : (
          <>
            {/* Filters */}
            <Filters type={type} setType={setType} rating={rating} setRating={setRating} />

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
