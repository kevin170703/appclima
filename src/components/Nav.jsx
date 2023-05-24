import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="contendorNav">
      <nav className="nav">
        {/* <NavLink to="/">
          <img src={nube} alt="nube" />
        </NavLink> */}
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}

export default Nav;
