import React from "react";



function Search() {
  return (
    <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Quick search..."
            aria-label="Search"
          />
          <button className="btn search-btn" type="submit">
            <i
              class="fa fa-search fa-lg"
              aria-hidden="true"
              id="search-icon"
            ></i>
          </button>
    </form>
  );
}

export default Search;
