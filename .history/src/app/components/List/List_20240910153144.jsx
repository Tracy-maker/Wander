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
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="flex flex-col h-full w-full bg-gray-300">
      {/* Header at the top */}
      <Header onSearch={onSearch} />

      {/* List Content with a scrollable section */}
      <div className="flex-grow overflow-y-auto p-4 mt-4">
        <h4 className="text-xs font-semibold pb-2 text-white">
          Food & Dining Around You
        </h4>

        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="overflow-auto h-96"> {/* Set max height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {places?.map((place, i) => (
                <div key={i} className="w-full max-w-xs mx-auto">
                  <PlaceDetails place={place} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
