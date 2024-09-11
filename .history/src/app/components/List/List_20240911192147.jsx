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
      
    
      </div>
    </div>
  );
};

export default List;
