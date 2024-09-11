import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Initialize coordinates with default values (latitude and longitude)
  const [coordinates, setCoordinates] = useState({
    lat: 40.7128,
    lng: -74.006,
  }); // Default to New York
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      getPlacesData(bounds.ne, bounds.sw).then((data) => setPlaces(data));
    }
  }, [coordinates, bounds]);

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
    <div className="flex flex-col lg:flex-row h-full min-h-screen pt-[80px] pb-8">
      {/* List Section */}
      <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200">
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          onPlaceClick={handlePlaceClick}
          selectedPlace={selectedPlace}
          onSearch={handleSearch}
        />
      </div>

      {/* Map Section */}
      <div className="lg:w-4/5 w-full lg:h-full h-1/2">
        <Map
          places={filteredPlaces.length ? filteredPlaces : places}
          onPlaceClick={handlePlaceClick}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
};

export default Maps;
