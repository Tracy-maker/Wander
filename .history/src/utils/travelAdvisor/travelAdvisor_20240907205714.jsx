import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-key": "48c08cd048mshf967bfa1e3ff7e3p19fe1ajsn95ec75c402bd",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};

const getPlacesData = async () => {
  try {
    const {
      data: { data }
    } = await axios.get();
  } catch (error) {}
};
