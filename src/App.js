import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Register from './components/Register';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        main
        <User></User>
        <Register></Register>
        <Toolbar></Toolbar>
      </div>
    );
  }
}

export default App;
