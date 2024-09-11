import React from "react";

const Filters = ({ type, setType, rating, setRating }) => {
  return (
    <div>
      {/* Heading */}
      <h4 className="text-lg font-semibold mb-2">
        Food & Dining around you
      </h4>
      {/* Changed text size to lg */}
      {/* Type Filter */}
      <div className="mb-8">
        <label className="block text-xs font-medium text-gray-700 mb-2">
          Type
        </label>
        <select
          className="mt-1 block w-full pl-3 pr-10 py-1 text-xs border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </div>
      {/* Rating Filter */}
      <div className="mb-8">
        <label className="block text-xs font-medium text-gray-700 mb-2">
          Rating
        </label>{" "}
        {/* Changed text size to xs */}
        <select
          className="mt-1 block w-full pl-3 pr-10 py-1 text-xs border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All</option>
          <option value="3">Above 3.0</option>
          <option value="4">Above 4.0</option>
          <option value="4.5">Above 4.5</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
