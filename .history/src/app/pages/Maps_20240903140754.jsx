import React, { useState } from 'react';
import Map from './maps/Map';
import List from '../components/List/List';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';


const Maps = () => {
  const [places, setPlaces] = useState([]); // Load this data from your API or mock data
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <List places={places} onPlaceClick={handlePlaceClick} />
      </div>
      <div className="w-2/4">
        <Map places={places} onPlaceClick={handlePlaceClick} />
      </div>
      <div className="w-1/4">
        <PlaceDetails selectedPlace={selectedPlace} />
      </div>
    </div>
  );
};

export default Maps;
