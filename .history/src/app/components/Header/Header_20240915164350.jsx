import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const Header = ({ onPlaceChanged,onLoad }) => {


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
       
          <ul className="absolute top-full bg-white shadow-lg rounded-lg z-20 w-full">
          
              <li
                key={place_id}
                onClick={() => handleSelect({ description })}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {description}
              </li>
         
          </ul>
   
      </div>
    </div>
  );
};

export default Header;
