import React from 'react'
import axios from 'axios';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: '',
      show: false
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_LOCATION_IQ_KEY);
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;


    const myApi = await axios.get(`${process.env.REACT_APP_CLIENT}/poki`);
    console.log(myApi.data);
    const req = await axios.get(url);
    console.log(req.data[0]); // target the data from our request
    this.setState({
      data: req.data[0],
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
        <form onSubmit={this.getLocation}>
          <input onChange={this.updateSearchQuery} type='text' placeholder='city name' />
          <input type="submit" value='get city' />
        </form>
        <p>
          {this.state.data.display_name}
        </p>
        <br />
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' />
      </div>
    )
  }
}

export default App
