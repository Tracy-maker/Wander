import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  onSearch,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-md max-w-screen-lg mx-auto">
      {/* Header */}
      <Header onSearch={onSearch} />

      {/* Filters and List */}
      <div className="flex-grow mt-20 bg-white rounded-lg shadow-lg p-2">
        {/* Filters */}
        <Filters
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />

        {/* Scrollable list of places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 overflow-auto h-full">
          {places?.map((place, i) => (
            <div
              ref={elRefs[i]}
              key={i}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <PlaceDetails
                selected={Number(childClicked) === i}
                refProp={elRefs[i]}
                place={place}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
