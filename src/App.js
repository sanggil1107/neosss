import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import Calendar from './components/Calendar';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';

const App = () => {

  return (
    <div className="App" >
      <Router>
        <MenuBar/>
        <Calendar />
      </Router>
      {/* <Login/> */}
    </div>
  );
}
export default App;
