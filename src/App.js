import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import Calendar from './components/Calendar';
import { Switch, Route } from 'react-router-dom';
import { Register } from './Routes/index';
import Login from './components/Login';


const App = () => {

  return (
    <Switch>
		  <Route path="/Register" component={Register} />
	  </Switch>
  );
}
export default App;
