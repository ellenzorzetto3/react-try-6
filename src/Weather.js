import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [cityName, setCityName] = useState(props.defaultCity);

  useEffect(() => {
    Search();
  }, []);

  function Search() {
    const apiKey = `o3bfb209f55e8951210f40e6476fat3f`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  function displayData(response) {
    const data = response.data;
    if (data && data.temperature && data.temperature.current !== undefined) {
      setWeather({
        ready: true,
        coordinates: response.data.coordinates,
        temperature: data.temperature.current,
        humidity: data.temperature.humidity,
        wind: data.wind.speed,
        city: data.city,
        description: data.condition.description,
        icon: data.condition.icon,
        date: new Date(data.time * 1000),
      });
    } else {
      console.error("Dados de resposta inválidos", response.data);
    }
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherData data={weather} />
          <WeatherForecast city={weather.city} />
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
