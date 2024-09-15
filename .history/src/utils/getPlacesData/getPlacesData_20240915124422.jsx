import axios from "axios";
import {
  MAP_RAPIDAPI_URL,
  MAP_RAPIDAPI_KEY,
  MAP_RAPIDAPI_HOST,
} from "../../config";

const getPlacesData = async (type, sw, ne) => {
  try {
    // Ensure the URL is correctly formatted with a slash
    const response = await axios.get(`${MAP_RAPIDAPI_URL}/${type}/list-in-boundary`, {
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
    throw new Error("Failed to fetch data");
  }
};

export default getPlacesData;
