import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div class="body">
      <div class="login-box">
        <h1>Login</h1>
        <div class="textbox">
          <input type="text" placeholder="Username" name="" value=""></input>
        </div>
        <input class="btn" type="button" name="" value="Sing in"></input>
      </div>
    </div>
  );
};

export default Login;