import React from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";
import { APP_GOOGLE_MAP_KEY } from "../../../config";

const libraries = ["places"];

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <LoadScript
      googleMapsApiKey={APP_GOOGLE_MAP_KEY} 
      libraries={libraries}
    >
      <div className="bg-blue-600 text-white p-4 mt-16 flex items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
        <div className="flex flex-row w-full items-center">
          <span className="text-sm mr-4">Explore new places</span>
          <div onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="relative rounded bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 flex items-center">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                placeholder="Search…"
                className="pl-10 pr-4 py-2 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default Header;
