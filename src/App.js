import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MenuBar/>
        </Router>
      </div>
    );
  }
}

export default App;
