import React, { useState, useEffect, createRef } from "react";
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
        <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200 custom-scrollbar">
  <List
    places={places}
    onPlaceClick={handlePlaceClick}
    selectedPlace={selectedPlace}
    onSearch={handleSearch}
  />
</div>
v>
      </div>
    </div>
  );
};

export default List;
