import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AsyncPaginate } from "react-select-async-paginate";
import getLoadOptions from "../../../utils/getLoadOptions/getLoadOptions";

const LocationSearch = ({ onSearchChange, onCurrentLocationClick }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
setSearch(searchData);
if (searchData && searchData.value) {
    
      onSearchChange(searchData.value);
    } else {
      setSearch(null); // Reset the search if searchData is invalid
    }
  };

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto mt-[-8rem] flex justify-center items-center space-x-4">
      <div className="flex-1">
        <AsyncPaginate
          placeholder="Search for city ..."
          debounceTimeout={600}
          value={search}
          onChange={handleChange}
          loadOptions={getLoadOptions}
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
