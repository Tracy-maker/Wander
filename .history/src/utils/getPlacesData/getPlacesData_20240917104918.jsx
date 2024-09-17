import axios from "axios";
import {
  MAP_RAPIDAPI_KEY,
  MAP_RAPIDAPI_HOST,
} from "../../config";

const getPlacesData = async (type, sw, ne) => {
  try {
    // Correct the URL and make the Axios request
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": MAP_RAPIDAPI_KEY,
        "x-rapidapi-host": MAP_RAPIDAPI_HOST,
      },
    });

    // Log the response for debugging
    console.log("Response data:", response.data.data);

    // Return the data
    return response.data.data;
  } catch (error) {
    if (error.response) {
      // Server responded with an error status code
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
