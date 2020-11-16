import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginMain = (props) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);
  const [ auth, setAuth ] = useState();
  const resLogin = async(userid) => {
    const body = await axios.get(`/api/login/${userid}`);
    setUser(body.data);
  }
  const onChangeId = (e) => {
    setUserid(e.target.value);
  };
  const onLogin1 = () => {
    resLogin(userid);
    setAuth('Y')
  }

  useEffect(() => {
    if(user.length === 1) {
      setAuth('Y');
    }
    else {
      return;
    }
  });

  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>

        <form >
          <div class="txt_field">
            <input type="text" onChange={onChangeId} required></input>
            <span></span>
            <label>ID</label>{auth}
          </div>
          {user.length === 1 ? (
            props.history.push("/main")
          ) : (
            <p>dd</p>
          )}
          <input type="submit" value="Login" onClick={onLogin1}></input>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;