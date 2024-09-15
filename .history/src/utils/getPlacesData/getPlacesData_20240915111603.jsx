import axios from "axios";
import {
  MAP_RAPIDAPI_URL,
  MAP_RAPIDAPI_KEY,
  MAP_RAPIDAPI_HOST,
} from "../../config";const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(`${MAP_RAPIDAPI_URL}${type}`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": MAP_RAPIDAPI_KEY,
        "x-rapidapi-host": MAP_RAPIDAPI_HOST,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching places data:", error.message);
    return []; // Return an empty array in case of error to avoid breaking the app
  }
};


const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(MAP_RAPIDAPI_URL${type}, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": MAP_RAPIDAPI_KEY,
        "x-rapidapi-host": MAP_RAPIDAPI_HOST,
      },
    });
    const placesData = response.data.data;
    return placesData;
  } catch (error) {
    console.error("Error fetching places data:", error.message);
    throw new Error("Failed to fetch data");
  }
};

export default getPlacesData;
