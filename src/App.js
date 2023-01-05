import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import { Route } from "react-router-dom";
import Ciudad from "./components/Ciudad.jsx";
const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min) - 273,
            max: Math.round(recurso.main.temp_max) - 273,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp) - 273,
            humidity: recurso.main.humidity,
            wind_speed: recurso.wind.speed,
            feels_like: Math.round(recurso.main.feels_like) - 273,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />}></Route>
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      ></Route>
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      ></Route>
    </div>
  );
}

export default App;
