import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import {
  WiCloud,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";

import { IoClose } from "react-icons/io5";

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
      <div className="contentButtonandTitle">
        <h4 className="title">{name}</h4>
        <button onClick={onClose}>
          <IoClose size="30" className="buttonClose" />
        </button>
      </div>

      <div className="divMinMax">
        <div className="temp">
          <WiCloud size="120" />
          <h5>{temp} °C</h5>
        </div>
        <div className="extraData">
          <div className="parametros">
            <WiThermometer size="50" />
            <p>{feels_like} °C</p>
          </div>
          <div className="parametros">
            <WiHumidity size="50" />
            <p> {humidity} °C</p>
          </div>
          <div className="parametros">
            <WiStrongWind size="50" />
            <p>{wind_speed} km/h</p>
          </div>
        </div>
      </div>

      <NavLink to={`/ciudad/${id}`} className="moreDetails">
        Mas detalles
      </NavLink>
    </div>
  );
}
