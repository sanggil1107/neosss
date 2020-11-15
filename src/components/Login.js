import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
const Login = (props) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);
  const [ auth, setAuth ] = useState('N');

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
  const onLogin = () => {
  //   resLogin(userid).then(res => {
  //     if(res.length === 1) {
  //       setAuth('Y');
  //     }
  //   });
  //   if(auth === 'N') {
  //     console.log(user);
  //     props.history.push("/main");
  //   }
  // };

    // axios.post(`/api/login/${userid}`)
    // .then(res => {
    //  if(res.length === 1) {
    //    setAuth('Y');
    //  }
    // })
    // .catch(err => console.log(err))
    props.history.push("/main")
    
  }
  
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