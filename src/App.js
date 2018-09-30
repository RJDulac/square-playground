import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <SimpleSquare color="red" size={200} />
          <Square showTitle={true} size={100} initialColor="red" />
          <Square showTitle={true} size={50} initialColor="green" />
          <Square showTitle={false} size={25} initialColor="blue" />
        </div>
      </div>
    );
  }
}

export default App;
