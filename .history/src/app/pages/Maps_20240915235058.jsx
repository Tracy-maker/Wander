import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import getPlacesData from "../../utils/getPlacesData";
import debounce from "lodash.debounce";
import Header from "../components/Header/Header";


const debouncedFetchPlacesData = debounce((type, bounds, setIsLoading, setPlaces) => {
  if (bounds.sw && bounds.ne) {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        const validPlaces = data.filter((place) => place.name && place.num_reviews > 0);
        setPlaces(validPlaces);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching places data:", error);
      });
  }
}, 1000);

const Maps = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error getting user location:", error),
      { timeout: 10000 }
    );
  }, []);

  
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      debouncedFetchPlacesData(type, bounds, setIsLoading, setPlaces);
    }
  }, [type, bounds]); 


  useEffect(() => {
    const filtered = places.filter((place) => place.rating >= rating);
    setFilteredPlaces(filtered.length ? filtered : []);
  }, [rating, places]);


  const onLoad = (autoC) => setAutocomplete(autoC);


  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCoords({ lat, lng });
      } else {
        console.error("No geometry found for the selected place.");
      }
    }
  };

  return (
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
          setType={setType}
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
  );
};

export default Maps;
