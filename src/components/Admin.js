import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin_Holiday from './Admin_Holiday';
import Admin_checker from './Admin_Checker';
import Admin_main from './Admin_Main';

const Admin = ({ handleTitle }) => {

  return (
    <div>
      <Router>
          <Route exact path="/admin" component={() => <Admin_main handleTitle={handleTitle}></Admin_main>}/>
          <Route exact path="/admin_holiday" component={Admin_Holiday}/>
          <Route exact path="/admin_checker" component={Admin_checker}/>
      </Router>
    </div>
  );
};

export default Admin;
