import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, selectedPlace, onPlaceClick, isLoading }) => {
  return (
    <div className="p-4 w-full bg-gray-300">
      <h4 className="text-xs font-semibold pb-2 text-white">
        Food & Dining Around You
      </h4>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          <div className="grid gap-2 grid-cols-1 overflow-auto h-1/5">
            {places?.map((place, i) => (
              <div
                key={i}
                className={`p-2 border-b-2 cursor-pointer ${selectedPlace === place ? "bg-blue-200" : ""}`}
                onClick={() => onPlaceClick(place)}
              >
                <h5 className="text-sm font-medium">{place.name}</h5>
                <p className="text-xs">{place.address}</p>
              </div>
            ))}
          </div>
          {selectedPlace && (
            <div className="mt-4 p-4 bg-white shadow-md">
              <PlaceDetails place={selectedPlace} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default List;
