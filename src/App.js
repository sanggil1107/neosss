import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
