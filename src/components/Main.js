import React, { useState } from 'react';
import MenuBar from './Menubar';
import Calendar  from './Calendar';
import Register from './Register';
import Settings from './Settings';
import Admin from './Admin';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

const Main = () => {

  return (
    <div>
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/main" component={Calendar}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;