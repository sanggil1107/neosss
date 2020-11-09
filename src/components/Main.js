import React, { useState } from 'react';
import MenuBar from './Menubar';
import Calendar  from './Calendar';
import Register from './Register';
import Setting_Main from './Setting_Main';
import Admin from './Admin';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import { MenuList } from '@material-ui/core';
import CalendarView from './CalendarView';

const Main = () => {

  const changeTitle = (title) => {
    alert(title);
  }
  return (
    <div>
      <Router>
      <MenuBar/>
        <Admin/>
        <Switch>
          <Route exact path="/main" component={Calendar}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/settings" component={Setting_Main}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;