import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = ({ places, onPlaceClick }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="h-screen w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(place => (
        <Marker 
          key={place.id}
          position={place.location}
          eventHandlers={{ click: () => onPlaceClick(place) }}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
