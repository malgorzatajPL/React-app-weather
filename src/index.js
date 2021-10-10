import ReactDOM from 'react-dom'; 
import React from 'react';

import Lottie from "lottie-react";
import winter from './animations/winter.json';
import summer from './animations/summer.json';
import Spiner from './components/Loading';
import Error from './components/error';
import CheckSeason from './components/weather';

/*

https://github.com/lottie-react-native/lottie-react-native


import React, { useState } from 'react';
const api = {
  key: "a97e81c96efb3e270010981f4ae910b6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result =>         {
        setWeather(result);
        setQuery('');
          console.log(result);
        }); 
      }
    }

       
    const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <div className="ui action input">
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
       <div className="ui items"> 
                 <div className="item"> 
         <div className="content">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        </div>
                 <div className="item"> 
                 <div className="image"> 
                 <Lottie animationData={winter} />, 
</div>
                 </div>

</div>
        ) : ('')}
    </div>
  );
}
*/

const App = () => {
  
    return (
      
<CheckSeason />
  );
  }
export default App;


ReactDOM.render(

    <App />,
    document.querySelector('#root')
);