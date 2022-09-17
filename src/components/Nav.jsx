import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import nube from "../img/nube.png";

function Nav({ onSearch }) {
  return (
    <nav className="nav">
      <NavLink to="/" className="title">
        <img src={nube} alt="nube" />
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
