import GetWeather from './GetWeather';
import ListWeather from './ListWeather';

import {useState} from "react"

function WeatherForecast(props) {
  const [weatherData, setWeatherData] = useState()

  function handleWeatherData(data) {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">
      <GetWeather phrase={props.phrase} onSubmitData={handleWeatherData}/>
      <ListWeather phrase={props.phrase} weatherData={weatherData}/>
      <p>{props.phrase["The data is obtained"]}: <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  );
}

export default WeatherForecast;
