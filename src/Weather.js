import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" className="form-control" autoFocus="on" />
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
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                alt="Cloudy"
                className="float-left"
              />
              <span className="temperature">25</span>
              <span className="unit">°C</span>
            </div>
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
