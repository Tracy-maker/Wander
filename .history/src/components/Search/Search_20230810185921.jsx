import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../config";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      );
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const data = await response.json();
  
      const options = data.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name},${city.countryCode}`,
      }));
  
      return { options: options };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };
  
  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
export default Search;
