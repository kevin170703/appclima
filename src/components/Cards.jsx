import React from "react";
import "./Cards.css";
import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          temp={c.temp}
          humidity={c.humidity}
          wind_speed={c.wind_speed}
          feels_like={c.feels_like}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
    </div>
  );
}
