import React from "react";

function SearchBar({search, setSearch, setQuery}) {
  return (
    <div>
      <form onSubmit = {e => {e.preventDefault(); setQuery(search); setSearch("")}} className="searchForm">
        <h1 className="title">My Recipe App</h1>
        <div className="searchBarBtn">
          <input onChange = {e=>{setSearch(e.target.value)}} className="searchBar" type="text" value={search}/>
          <button className="searchButton" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
