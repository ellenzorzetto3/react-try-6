import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius")

    function convertToFahrenheit(){}
    if(unit === "celsius") {
  return (
    <div className="WeatherTemp">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        °C | <a href="/" onClick={convertToFahrenheit}>ºF</a>
      </span>
    </div>
  );
}else {return ("ºF")}}
