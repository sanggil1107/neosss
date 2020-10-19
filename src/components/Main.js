import React, { useState } from 'react';
import MenuBar from './Menubar';
import Calendar  from './Calendar';
import Register from './Register';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

const Main = () => {

  return (
    <div>
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/main" component={Calendar}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;