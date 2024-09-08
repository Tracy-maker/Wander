import axios from "axios";

const getPlacesData = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_MAP_RAPIDAPI_URL, {
      params: {
        bl_latitude: process.env.REACT_APP_MAP_BL_LATITUDE,
        tr_latitude: process.env.REACT_APP_MAP_TR_LATITUDE,
        bl_longitude: process.env.REACT_APP_MAP_BL_LONGITUDE,
        tr_longitude: process.env.REACT_APP_MAP_TR_LONGITUDE,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_MAP_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_MAP_RAPIDAPI_HOST,
      },
    });
    const placesData = response.data.data;
    return placesData;
  } catch (error) {
    console.error("Error fetching places data:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch data");
  }
};

export default getPlacesData;
