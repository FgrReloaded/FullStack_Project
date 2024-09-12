import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <>
      <div className="container">
        <input
          className="search-bar"
          type="search"
          placeholder="search for a skill..."
        />
      </div>
    </>
  );
}

export default SearchBar;
