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
  isLoading,
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
    <div className="flex flex-col h-full w-full bg-gray-50 p-4 rounded-lg shadow-lg">
      {/* Header inside List */}
      <Header onSearch={onSearch} />

      {/* List Content with Filters and Places */}
      <div className="flex-grow p-6 mt-40 bg-white rounded-lg shadow-md">
        {/* Filters */}
        <Filters
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />

        {/* Scrollable list of places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto h-[75vh]">
          {places?.map((place, i) => (
            <div
              ref={elRefs[i]}
              key={i}
              className="w-full bg-white rounded-md p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
