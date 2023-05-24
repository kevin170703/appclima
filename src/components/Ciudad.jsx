import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div className="contentData">
            <b>Temperatura:</b> {Math.round(city.temp) - 273} ºC
          </div>
          <div className="contentData">
            <b>Clima:</b> {city.weather}
          </div>
          <div className="contentData">
            <b>Viento:</b> {city.wind} km/h
          </div>
          <div className="contentData">
            <b>Cantidad de nubes:</b> {city.clouds}
          </div>
          <div className="contentData">
            <b>Latitud:</b> {city.latitud}º
          </div>
          <div className="contentData">
            <b>Longitud:</b> {city.longitud}º
          </div>
        </div>
      </div>
    </div>
  );
}
