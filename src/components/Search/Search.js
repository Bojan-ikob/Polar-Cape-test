import React from "react";
import "../Search/Search.css";
const Search = ({ handleSearch, searchCard }) => {
  return (
    <div className="search">
      <input
        onChange={handleSearch}
        value={searchCard}
        placeholder="Search by name or text"
      ></input>
    </div>
  );
};

export default Search;
