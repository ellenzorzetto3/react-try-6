import React from "react";
import FormattedDate from "./FormattedDate"

export default function WeatherData(props){
    const { weather } = props; 
    return (
    <div className="WeatherData">
      <h1>{weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weather.date} />
        </li>
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
    )
}