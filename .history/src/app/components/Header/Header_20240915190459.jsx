import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search…"
            className="pl-10 pr-4 py-2 text-black focus:outline-none"
          />
        </Autocomplete>
      </div>
    </div>
  );
};

export default Header;
