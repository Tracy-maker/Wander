import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete from 'use-places-autocomplete';

const libraries = ['places']; // This includes the "places" library for autocomplete

const Header = ({ setCoordinates }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use your API key here
    libraries, // Load the "places" library
  });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async ({ description }) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      setCoordinates({ lat, lng });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="header">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search places..."
      />
      {status === 'OK' &&
        data.map(({ place_id, description }) => (
          <div key={place_id} onClick={() => handleSelect({ description })}>
            {description}
          </div>
        ))}
    </div>
  );
};

export default Header;
