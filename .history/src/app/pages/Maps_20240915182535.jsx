import React, { useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";
import debounce from "lodash.debounce";
import Header from "../components/Header/Header";

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setTypes] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

  // Set initial coordinates based on user's geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error getting user location:", error),
      { timeout: 10000 }
    );
  }, []);

  // Debounced function to fetch places data
  const debouncedGetPlacesData = debounce(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          const validPlaces = data.filter(
            (place) => place.name && place.num_reviews > 0
          );
          setPlaces(validPlaces);
          setFilteredPlaces([]);
          setIsLoading(false);
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

  // Handle place load for Autocomplete
  const onLoad = (autoC) => setAutocomplete(autoC);

  // Handle place change from Autocomplete
  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoords({ lat, lng });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <div className="flex flex-col lg:flex-row h-full min-h-screen pt-[80px] pb-8">
        {/* Header Section */}
        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />

        {/* List Section */}
        <div className="lg:w-2/5 w-full lg:h-full h-1/2 overflow-y-auto bg-gray-200 custom-scrollbar">
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            rating={rating}
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
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </LoadScript>
  );
};

export default Maps;
