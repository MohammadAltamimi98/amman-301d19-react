import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import User from './User';

export class App extends Component {
  render() {
    return (
      <div>
        <LoginButton />
        <LogoutButton />
        <User />
      </div>
    )
  }
}

export default App
