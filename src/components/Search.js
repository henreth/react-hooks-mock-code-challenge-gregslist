import React, {useState} from "react";

function Search({searchText, onSearchChange}) {
  let [newSearch,setNewSearch]=useState('')
  function handleSubmit(e) {
    e.preventDefault();
    onSearchChange(newSearch);
  }

  function handleChange(event){
    setNewSearch(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={newSearch}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
