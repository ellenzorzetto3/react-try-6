import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" className="search" />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>

      <h1>New York</h1>
      <ul>
        <li>Friday 14:12, clear sky</li>
        <li>
          Humidity: 38%<div>Wind: 4.12km/h</div>{" "}
        </li>
      </ul>
    </div>
  );
}
