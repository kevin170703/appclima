import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({
  temp,
  humidity,
  wind_speed,
  feels_like,
  min,
  max,
  name,
  img,
  onClose,
  id,
}) {
  return (
    <div className="cardStyle">
      <NavLink to={`/ciudad/${id}`} className="link">
        <div className="contentButtonandTitle">
          <h4 className="title">{name}</h4>
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
          <div className="divMinMax">
            <div className="temp">
              <h5>{temp} °C</h5>
            </div>
            <div className="extraData">
              <div className="parametros">
                <p>Sensacion termica:</p>
                <p>{feels_like} °C</p>
              </div>
              <div className="parametros">
                <p>Humedad:</p>
                <p> {humidity} °C</p>
              </div>
              <div className="parametros">
                <p>Viento:</p>
                <p>{wind_speed} km/h</p>
              </div>
            </div>
            {/* <div className="divMin">
            <h5>Min</h5>
            <p>{min} °C</p>
          </div>
          <div className="divMax">
            <h5>Max</h5>
            <p>{max} °C</p>
          </div> */}
          </div>
        </div>
      </NavLink>
    </div>
  );
}
