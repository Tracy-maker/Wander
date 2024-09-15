import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (bounds) {
      const timer = setTimeout(() => {
        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
          console.log(data);
          setIsLoading(false);
          setPlaces(data);
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [type, coordinates, bounds]);

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
      <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200 custom-scrollbar">
        <List
          places={places}
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
      <div className="lg:w-4/5 w-full lg:h-full h-1/2 ">
        <Map
          places={filteredPlaces}
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
