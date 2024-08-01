import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="temperatures">
            <span className="max-temp">19º</span>
            <span className="min-temp">10º</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
