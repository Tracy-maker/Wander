import React, { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";

const List = ({ places, childClicked }) => {
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [placeRefs, setPlaceRefs] = useState([]);

  useEffect(() => {
    const newRefs = places.map((_, index) => {
      return placeRefs[index] || createRef();
    });

    setPlaceRefs(newRefs);
  }, [places]);

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-md max-w-screen-lg mx-auto">
      {/* Header */}
      <Header />

      {/* Filters and List */}
      <div className="flex-grow mt-20 p-2">
        {/* Filters */}
        <Filters type={type} rating={rating} setRating={setRating} />

        {/* Scrollable list of places */}
        <div className="flex flex-col gap-6 mt-2 overflow-y-auto h-[605px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          {places?.map((place, i) => (
            <div ref={elRefs[i]} key={i} className="bg-white rounded-lg p-2">
              <PlaceDetails place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
