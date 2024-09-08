import React, { useState } from 'react';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';

const Maps = () => {
  const [places, setPlaces] = useState([]); 
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
      <Header onSearch={handleSearch} /> 
      <div className="flex">
        <div className="w-1/4 mt-32"> 
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
