import React, { useState } from "react";
import {
  usePlacesAutocomplete,
  getGeocode,
  getLatLng,
} from "@react-google-maps/api";


const Header = ({ setCoordinates }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => {
    setValue(description, false);
    clearSuggestions();

    // Geocode and get lat/lng
    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      setCoordinates({ lat, lng });
    });
  };

  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search places..."
          className="p-2 rounded text-black flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {status === "OK" && (
          <ul className="absolute top-full bg-white shadow-lg rounded-lg z-20 w-full">
            {data.map(({ place_id, description }) => (
              <li
                key={place_id}
                onClick={() => handleSelect({ description })}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
