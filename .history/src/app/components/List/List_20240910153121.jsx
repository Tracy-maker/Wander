import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Header from "../Header/Header";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
  onSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 10; // Set number of places to show per page

  const [elRefs, setElRefs] = useState([]);
  const [paginatedPlaces, setPaginatedPlaces] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  // Update paginated places whenever the places or current page changes
  useEffect(() => {
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    setPaginatedPlaces(places.slice(indexOfFirstPlace, indexOfLastPlace));
  }, [places, currentPage]);

  const totalPages = Math.ceil(places.length / placesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-300">
      {/* Header at the top */}
      <Header onSearch={onSearch} />

      {/* List Content below the header and PlaceDetails */}
      <div className="flex-grow overflow-y-auto p-4 mt-4">
        <h4 className="text-xs font-semibold pb-2 text-white">
          Food & Dining Around You
        </h4>

        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedPlaces?.map((place, i) => (
                <div key={i} className="w-full max-w-xs mx-auto">
                  <PlaceDetails place={place} />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-500 text-white py-1 px-3 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <p className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </p>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-500 text-white py-1 px-3 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
