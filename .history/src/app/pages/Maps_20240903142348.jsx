import React, { useState } from 'react';
import Map from './maps/Map';
import PlaceDetails from './maps/PlaceDetails';
import List from './maps/List';
import Header from '../../components/Header';  // Import Header component

const Maps = () => {
  const [places, setPlaces] = useState([]); // Load this data from your API or mock data
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState(null);

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
    <>
      <Header onSearch={handleSearch} /> {/* Include the Header with search */}
      <div className="flex">
        <div className="w-1/4">
          <List places={filteredPlaces} onPlaceClick={handlePlaceClick} />
        </div>
        <div className="w-2/4">
          <Map places={filteredPlaces} onPlaceClick={handlePlaceClick} />
        </div>
        <div className="w-1/4">
          <PlaceDetails selectedPlace={selectedPlace} />
        </div>
      </div>
    </>
  );
};

export default Maps;
