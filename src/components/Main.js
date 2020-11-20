import React, { useState } from 'react';
import MenuBar from './Menubar';
import Calendar  from './Calendar';
import Register from './Register';
import Setting_Main from './Setting_Main';
import Admin from './Admin';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

const Main = () => {
  const [title, setTitle] = useState();

  const handleTitle = (text) => {
    setTitle(text);
  }
  
  return (
    <div>
      <Router>
      <MenuBar title = {title}/>
        <Admin/>
        <Switch>
          <Route exact path="/main" component={() => <Calendar handleTitle={handleTitle}></Calendar>}/>
          <Route exact path="/register" component={() => <Register handleTitle={handleTitle}></Register>}/>
          <Route exact path="/settings" component={() => <Setting_Main handleTitle={handleTitle}></Setting_Main>}/>
          <Route exact path="/admin" component={() => <Admin handleTitle={handleTitle}></Admin>}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;