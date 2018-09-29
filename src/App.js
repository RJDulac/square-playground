import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Square showTitle={true} initialColor="red" />
          <Square showTitle={true} initialColor="green" />
          <Square showTitle={false} initialColor="blue" />
        </div>
      </div>
    );
  }
}

export default App;
