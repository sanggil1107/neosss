import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
  
const LoginMain = (props) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);

  const resLogin = async(userid) => {
    const body = await axios.get(`/api/login/${userid}`);
    console.log(body.data)
    setUser(body.data);
  };
  const onChangeId = (e) => {
    setUserid(e.target.value);
  
  };
  const onLogin1 = () => {
    resLogin(userid);
  };

  useEffect(() => {
    if(user.length === 1) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    const getUser = localStorage.getItem("user");
    
    if(getUser) {
      props.history.push("/main")
    }
  }, [user]);

  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>

        <form >
          <div class="txt_field">
            <input type="text" onChange={onChangeId} required></input>
            <span></span>
            <label>ID</label>
          </div>
          <input type="submit" value="Login" onClick={onLogin1}></input>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;