import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";

const List = ({ places }) => {
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <div className="flex flex-col h-full w-full rounded-lg shadow-md max-w-screen-lg mx-auto">
      {/* Header */}
      <Header />

      {/* Filters and List */}
      <div className="flex-grow mt-20 p-2">
        {/* Filters */}
        <Filters type={type} rating={rating} setRating={setRating} />

        {/* Scrollable list of places */}
        <div className="flex flex-col gap-6 mt-2 overflow-y-auto h-[604px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          {places?.map((place, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <PlaceDetails place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
