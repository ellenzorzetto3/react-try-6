import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Friday 14:12, </li>
          <li>clear sky</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              alt="Cloudy"
            />
            <span>25°C</span>
          </div>
          <div className="col-6">
            <ul>
              {" "}
              <li>Precipitation: 15%</li>
              <li>Humidity: 38</li>
              <li>Wind: 4.12km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
