import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";
import debounce from "lodash.debounce";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
 
  const [coordinates, setCoordinates] = useState({ lat: -34.397, lng: 150.644 }); // Default to some coordinates
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
      },
      (error) => console.error("Error getting user location:", error), // Handle geolocation error
      { timeout: 10000 } // Optional timeout for geolocation request
    );
  }, []);

  // Debounced function to fetch places data
  const debouncedGetPlacesData = debounce(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setIsLoading(false);
          const validPlaces = data.filter((place) => place.name && place.num_reviews > 0);
          setPlaces(validPlaces);
          setFilteredPlaces([]); // Reset filtered places when new data comes in
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error fetching places data:", error);
        });
    }
  }, 1000);

  // Fetch data when type or bounds change
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      debouncedGetPlacesData();
    }
    return () => {
      debouncedGetPlacesData.cancel();
    };
  }, [type, bounds]);

  // Filter places based on rating
  useEffect(() => {
    const filtered = places.filter((place) => place.rating >= rating);
    setFilteredPlaces(filtered.length ? filtered : []); 
  }, [rating, places]);




  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen pt-[80px] pb-8">
      {/* List Section */}
      <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200 custom-scrollbar">
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
        
          selectedPlace={selectedPlace}
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
