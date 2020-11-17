import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useFetch } from './FetchTeam';
import './Login.css';

const LoginMain = (props) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);
  const [ auth, setAuth ] = useState('N');
  const [ temp ] = useFetch();

  const resLogin = async(userid) => {
    const body = await axios.get(`/api/login/${userid}`);
    setUser(body.data);
  }
  const onChangeId = (e) => {
    setUserid(e.target.value);
  
  };
  const onLogin1 = () => {
    resLogin(userid);
    console.log("onLogin1");
  }

  useEffect(() => {
    if(user.length === 1) {
      console.log("user");
      localStorage.setItem("user", user);
      props.history.push("/login")
    }
    else {
      return;
    }
  }, []);

  useEffect(() => {
    const t = localStorage.getItem("user");
    console.log(t);
    if(t) {
      console.log("??")
      props.history.push("/login")
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
            <label>ID</label>
          </div>
          {user.length === 1 ? (
           <Redirect to="/main" ></Redirect>
          ) : (
            <p>dd</p>
          )}
          <input type="submit" value="Login" onClick={onLogin1}></input>
          <Link to="/main" onClick={onLogin1}>d</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;