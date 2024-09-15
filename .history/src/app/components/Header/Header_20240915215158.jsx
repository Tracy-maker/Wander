import React from "react";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex items-center justify-between fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row items-center w-full">
        <span className="text-sm" style={{ paddingRight: '40px' }}>Explore new places</span> {/* Add 40px padding */}
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search…"
            className="pl-10 pr-2 py-2 text-black focus:outline-none w-full"
            style={{ flexGrow: 1 }}
          />
        </Autocomplete>
      </div>
    </div>
  );
};

export default Header;
