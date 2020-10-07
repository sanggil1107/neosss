import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required></input>
            <span></span>
            <label>사번</label>
          </div>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;