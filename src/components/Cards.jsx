import React from "react";
import "./Cards.css";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
    </div>
  );
}
