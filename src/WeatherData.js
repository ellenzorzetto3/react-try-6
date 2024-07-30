import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherData(props) {
  const { weather } = props;

  // Mapeamento dos ícones da API para os ícones do ReactAnimatedWeather
  const iconMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "partly-cloudy-day": "PARTLY_CLOUDY_DAY",
    "partly-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    cloudy: "CLOUDY",
    rain: "RAIN",
    sleet: "SLEET",
    snow: "SNOW",
    wind: "WIND",
    fog: "FOG",
  };

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
            <div className="float-left">
              <ReactAnimatedWeather
                icon={iconMapping[weather.icon]}
                color="goldenrod"
                size={64}
                animate={true}
              />
            </div>
            <WeatherTemp celsius={weather.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {Math.round(weather.precipitation)}%</li>
            <li>Humidity: {Math.round(weather.humidity)}%</li>
            <li>Wind: {Math.round(weather.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
