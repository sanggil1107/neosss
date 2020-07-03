import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Register from './components/Register';
import MenuBar from './components/Menubar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
      </div>
    );
  }
}

export default App;
