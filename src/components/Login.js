import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import LoginMain from './LoginMain';

const Login = (props) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);
  const [ auth, setAuth ] = useState();

  const onChangeId = (e) => {
    setUserid(e.target.value);
  };
  const resLogin = async(userid) => {
    const body = await axios.get(`/api/login/${userid}`);
    setUser(body.data);
    return body.data;
  }
  // const doLogin = () => {
  //   console.log(user);
  //   // props.history.push("/main");
  // }
  const onLogin = (userid) => {
    // alert(userid);
  }

  return (
    <LoginMain onLogin={onLogin}/>
  );
};

export default Login;