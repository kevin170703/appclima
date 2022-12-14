import React, { useState } from "react";
import "./SearchBar.css";

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
      <input type="submit" className="boton" value="Buscar" />
    </form>
  );
}
