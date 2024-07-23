import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
   const [weather, setWeather] = useState({ ready: false });

  function displayData(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      precipitation: 15,
      date: "Friday, 18:44"
    });
    
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-9">
                <input type="search" className="form-control" autoFocus="on" />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <h1>{weather.city}</h1>
          <ul>
            <li>{weather.date}, </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="float-left"
                />
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                {" "}
                <li>Precipitation: {Math.round(weather.precipitation)}%</li>
                <li>Humidity: {Math.round(weather.humidity)}%</li>
                <li>Wind: {Math.round(weather.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    
    const apiKey = `o3bfb209f55e8951210f40e6476fat3f`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayData);
    return "Loading...";
  }
}
