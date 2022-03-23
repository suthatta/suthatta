import React, { useState } from 'react';
import './TheWeather.css';
import dateBuilder from "../utils/dateBuilder"

const api ={
    key: "dc5fdc61b858659847117f935bc2d70a",
    base:"https://api.openweathermap.org/data/2.5/"
}

function TheWeather(){
    const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
    return(
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'bgApp warm' : 'bgApp') : 'bgApp'}>
        <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }
  
export default TheWeather;