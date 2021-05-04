import React from 'react'
import axios from 'axios';
import Map from './components/Map';
import Info from './components/Info';
import Form from './components/Form';
import WeatherData from './components/WeatherData';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: '',
      weatherData: '',
      show: false
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;


    const req = await axios.get(url);

    // console.log(req.data[0]); // target the data from our request

    this.setState({
      data: req.data[0]
    });
    this.getWeatherData();
  };

  getWeatherData = async () => {
    const expressWeatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    const expressReq = await axios.get(expressWeatherUrl);
    console.log(expressReq.data);
    this.setState({
      weatherData: expressReq.data,
      show: true
    })
  };

  updateSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });
    console.log(this.state.searchQuery);
  }

  render() {
    return (
      <div>
        <h1>City Exploder</h1>
        <Form
          getLocation={this.getLocation}
          updateSearchQuery={this.updateSearchQuery}
        />
        {this.state.show &&
          <>
            <Info
              name={this.state.data.display_name}
            />
            <br />
            <Map
              lat={this.state.data.lat}
              lon={this.state.data.lon}
            />
            <WeatherData
              weatherInfo={this.state.weatherData}
            />
          </>
        }

      </div>
    )
  }
}

export default App
