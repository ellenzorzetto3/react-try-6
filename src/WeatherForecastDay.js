import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function maxTemp (){
    let temperature = Math.round(props.data.temperature.maximum)
return `${temperature}`}

function minTemp() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}`;
}

function day(){
    let date = new Date(props.data.time * 1000);
    let day = date.getDay()
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[day];
}

    const { data } = props;
    return (
      <div className="WeatherForecastDay">
        <div className="forecast-day">{day()}</div>
        <WeatherIcon code={data.condition.icon} size={40} />
        <div className="temperatures">
          <span className="max-temp">{maxTemp()}º</span>
          <span className="min-temp">{minTemp()}º</span>
        </div>
      </div>
    );
}