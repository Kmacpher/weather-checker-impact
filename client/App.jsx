import React from 'react';
import ZipCode from './ZipCode.jsx';
import Weather from './Weather.jsx'
import axios from 'axios';

const key = '667149190f2cc955';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zipcode: '',
      weather: null
    }
    this.setZipCode = this.setZipCode.bind(this)

  }

  setZipCode(zip) {
    this.setState({
      zipcode: zip
    })
    axios.get(`http://api.wunderground.com/api/${key}/conditions/q/${zip}.json`)
    .then(res => res.data.current_observation)
    .then(data => {
      const weather = {
        location: data.display_location.full,
        temp: data.temp_f,
        feelslike: data.feelslike_f,
        weather: data.weather
      }
      console.log(weather);
      this.setState({
        weather: weather
      })
      .catch(err => {
        console.log(err)
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipCode setZipCode={this.setZipCode}/>
        {
          this.state.weather ?
          <Weather weather={this.state.weather}/> :
          <h2> You haven't entered a zipcode yet!</h2>
        }
      </div>
    )
  }
}

export default App;
