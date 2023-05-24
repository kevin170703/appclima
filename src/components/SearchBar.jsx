import React, { useState } from "react";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className="from"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="busqueda"
      />
      <button type="submit" className="boton">
        <CiSearch size="35" />
      </button>
    </form>
  );
}
