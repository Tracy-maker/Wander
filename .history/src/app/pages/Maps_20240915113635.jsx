import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";
import debounce from "lodash.debounce";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");

  // Set initial coordinates based on user's geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // Debounced function to fetch places data
  const debouncedGetPlacesData = debounce(() => {
    if (bounds.sw && bounds.ne) {
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setFilteredPlaces([]);
        setIsLoading(false);
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      });
    }
  }, 1000);

  // Fetch data when type or bounds change
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true); // Set loading before calling the debounced function
      debouncedGetPlacesData();
    }
    return () => {
      // Clean up debounced function to prevent memory leaks
      debouncedGetPlacesData.cancel();
    };
  }, [type, bounds]);

  // Filter places based on rating
  useEffect(() => {
    const filtered = (filteredPlaces.length ? filteredPlaces : places).filter(
      (place) => place.rating >= rating
    );
    setFilteredPlaces(filtered);
  }, [rating]);

  // Handle place click in list
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  // Handle search functionality in list
  const handleSearch = (query) => {
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen pt-[80px] pb-8">
      {/* List Section */}
      <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200 custom-scrollbar">
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          onPlaceClick={handlePlaceClick}
          selectedPlace={selectedPlace}
          onSearch={handleSearch}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setTypes={setTypes}
          setRating={setRating}
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
          setChildClicked={setChildClicked}
        />
      </div>
    </div>
  );
};

export default Maps;
