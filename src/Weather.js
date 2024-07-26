import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";

import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [cityName, setCityName] = useState(props.defaultCity);

 function Search(){   const apiKey = `o3bfb209f55e8951210f40e6476fat3f`;
 const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayData);

 }
  
  function handleSubmit(event){
    event.preventDefault()
    Search()
  }

  function handleCityChange(event){
    setCityName(event.target.value)
  }

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
      date: new Date(response.data.time * 1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input type="search" className="form-control" autoFocus="on" onChange={handleCityChange} />
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
          <WeatherData weather={weather} />
        </div>
      </div>
    );
  } else {
 Search()
    return "Loading...";
  }
}
