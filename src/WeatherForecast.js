import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);


  function displayData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    
     
    const cityName = `Paris`; 
    const forecastApiKey = `o3bfb209f55e8951210f40e6476fat3f`; 
    const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${forecastApiKey}&units=metric`;

        axios.get(forecastApiUrl).then(displayData);
      
    
  }
}
