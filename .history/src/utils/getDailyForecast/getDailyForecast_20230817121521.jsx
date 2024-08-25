import axios from "axios";
import { OPEN_WEATHER_MAP_BASE_URL, APP_ID } from "../../config";

const getDailyForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPEN_WEATHER_MAP_BASE_URL}/forecast`, {
      params: {
        lat: lat,
        lon: lon,
        appid: APP_ID,
        units: "metric",
      },
    });
  } catch {}
};
export default getDailyForecast;
