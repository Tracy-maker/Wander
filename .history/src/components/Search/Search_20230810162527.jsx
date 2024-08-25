import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  

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
