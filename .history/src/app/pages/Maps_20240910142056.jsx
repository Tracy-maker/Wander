import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    getPlacesData();
  }, []);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const handleSearch = (query) => {
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* List Section */}
      <div className="lg:w-1/3 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-300">
        <List
          places={filteredPlaces}
          onPlaceClick={handlePlaceClick}
          selectedPlace={selectedPlace}
          onSearch={handleSearch}  // Passing the handleSearch to List
        />
      </div>

      {/* Map Section */}
      <div className="lg:w-2/3 w-full lg:h-full h-1/2">
        <Map places={filteredPlaces} onPlaceClick={handlePlaceClick} />
      </div>
    </div>
  );
};

export default Maps;
