import axios from "axios";
import {
  MAP_RAPIDAPI_URL,
  MAP_RAPIDAPI_KEY,
  MAP_RAPIDAPI_HOST,
} from "../../config";

const getPlacesData = async (type, sw, ne) => {
  try {
    // Correct the URL
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

    // Log the response
    console.log("Response data:", response.data.data);

    // Return the data
    return response.data.data;
  } catch (error) {
    if (error.response) {
      // Server response with error status code
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);
      throw new Error(`Failed to fetch data: ${error.response.status}`);
    } else if (error.request) {
      // No response from the server
      console.error("Error request:", error.request);
      throw new Error("No response received from the server");
    } else {
      // Other errors
      console.error("Error:", error.message);
      throw new Error("Failed to fetch data");
    }
  }
};

export default getPlacesData;
