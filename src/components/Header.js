import React from "react";
import Search from "./Search";

function Header({searchText,onSearchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        onSearchChange={onSearchChange}
        searchText={searchText}
        />
    </header>
  );
}

export default Header;
