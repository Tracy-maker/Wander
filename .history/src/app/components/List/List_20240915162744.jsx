import React, { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import { FaSpinner } from "react-icons/fa";

const List = ({ places, childClicked, isLoading, type, rating, setRating, setType,onPlaceChanged,onLoad }) => {
  const [placeRefs, setPlaceRefs] = useState([]);

  useEffect(() => {
    const newRefs = Array(places?.length)
      .fill()
      .map((_, index) => {
        return placeRefs[index] || createRef();
      });

    setPlaceRefs(newRefs);
  }, [places]);

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-md max-w-screen-lg mx-auto">
      {/* Header */}
      <Header setCoordinates={setCoordinates} />

      {isLoading ? (
        <div className="flex justify-center items-center h-[600px]">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
        </div>
      ) : (
        <div className="flex-grow mt-20 p-2">
          {/* Filters */}
          <Filters type={type} rating={rating} setRating={setRating} />

          {/* Scrollable list of places */}
          <div className="flex flex-col gap-4 mt-2 overflow-y-auto h-[605px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
            {places?.map((place, i) => (
              <div key={i} className="bg-white rounded-lg p-2">
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={placeRefs[i]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
