import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="cardStyle">
      <button onClick={onClose}>X</button>
      <NavLink to={`/ciudad/${id}`} className="title">
        {name}
      </NavLink>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
        <div className="divMinMax">
          <div className="divMin">
            <h5>Min</h5>
            <p>{min} °C</p>
          </div>
          <div className="divMax">
            <h5>Max</h5>
            <p>{max} °C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
