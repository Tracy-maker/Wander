import React from "react";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex justify-center items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row items-center w-full justify-between">
        <span className="text-sm">Explore new places</span>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search…"
            className="pl-4 pr-4 py-2 text-black focus:outline-none w-full rounded-md"
            style={{ marginLeft: "20px", width: "300px" }}
          />
        </Autocomplete>
      </div>
    </div>
  );
};

export default Header;
