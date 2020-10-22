import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [ userid, setUserid ] = useState();

  const onChangeId = (e) => {
    setUserid(e.target.value);
  };

  const onLogin = () => {
    props.history.push("/main");
  };

  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" onChange={onChangeId} required></input>
            <span></span>
            <label>ID</label>
          </div>
          <input type="submit" value="Login" onClick={onLogin}></input>
        </form>
      </div>
    </div>
  );
};

export default Login;