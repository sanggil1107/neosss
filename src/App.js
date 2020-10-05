import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import Calendar from './components/Calendar';
import Login from './components/Login';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <div className="App" >
      <Router>
        <MenuBar/>
        {/* <Calendar /> */}
        <Login/>
      </Router>
    </div>
  );
}
export default App;
