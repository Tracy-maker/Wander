import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; 

const LocationSearch = ({ onSearchChange, onCurrentLocationClick }) => {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-8rem] flex justify-center items-center space-x-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter location..."
          className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={onSearchChange}
        />
      </div>
      <div className="flex-initial">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
          onClick={onCurrentLocationClick}
        >
          <FaMapMarkerAlt className="mr-2" /> Current Location
        </button>
      </div>
    </div>
  );
};

export default LocationSearch;
