import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';

const AuthForm = ({type, form, onChange, onSubmit}) => {
  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
          <div class="txt_field">
            <input type="text" required onChange={onchange}></input>
            <span></span>
            <label>ID</label>
          </div>
          <input type="submit" value="Login" ></input>
          <Link to="/main" >Login</Link>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;