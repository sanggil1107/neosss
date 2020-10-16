import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/calendar" component={Calendar}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
