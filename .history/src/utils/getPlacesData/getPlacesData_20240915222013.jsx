import axios from "axios";
import {
  MAP_RAPIDAPI_URL,
  MAP_RAPIDAPI_KEY,
  MAP_RAPIDAPI_HOST,
} from "../../config";

const getPlacesData = async (type, sw, ne) => {
  try {
    // Correct the URL construction
    const url = `${MAP_RAPIDAPI_URL}/list-in-boundary`;

    // Log the full URL and parameters
    console.log("Fetching data from URL:", url);
    console.log("Parameters:", {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
      type,
    });

    const response = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        type,
      },
      headers: {
        "x-rapidapi-key": MAP_RAPIDAPI_KEY,
        "x-rapidapi-host": MAP_RAPIDAPI_HOST,
      },
    });

    console.log("Response data:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching places data:", error.message);
    throw new Error("Failed to fetch data");
  }
};
