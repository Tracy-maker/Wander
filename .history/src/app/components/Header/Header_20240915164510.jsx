import React from "react";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <input
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          placeholder="Search places..."
          className="p-2 rounded text-black flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

       
      </div>
    </div>
  );
};

export default Header;
