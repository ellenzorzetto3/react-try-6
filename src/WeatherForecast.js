import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  useEffect(() => {
    if (!loaded) {
      const cityName = props.city;
      const forecastApiKey = `o3bfb209f55e8951210f40e6476fat3f`;
      const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${forecastApiKey}&units=metric`;

      axios.get(forecastApiUrl).then(displayData);
    }
  }, [loaded, props.city]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
