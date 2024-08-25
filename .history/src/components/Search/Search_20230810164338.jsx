import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../config";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
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
