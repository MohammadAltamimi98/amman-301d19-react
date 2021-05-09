import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {

  render() {
    // console.log(this.props);
    return (
      <div>
        <Header />
        <Main
          cityName='Irbid'
        />
      </div>
    )
  }
}

export default App
