import React from 'react';

const Weather = props => {
  const weather = props.weather;
  console.log(props);
  return (
    <div>
      <h2>In {weather.location}, it is {weather.temp} degrees F.</h2>
      <h2>The weather is {weather.weather} and it feels like {weather.feelslike} degrees F.</h2>
    </div>
  )
}

// function Weather(props) {

// }

export default Weather;
