import React, { useState } from 'react';
import axios from 'axios';

const LoginMain = ({onLogin}) => {
  const [ userid, setUserid ] = useState();
  const [ user, setUser ] = useState([]);
  const [ auth, setAuth ] = useState();

  const onChangeId = (e) => {
    setUserid(e.target.value);
  };
  const onLogin1 = () => {
    axios.get(`/api/login/${userid}`)
    .then(res => {
     if(res.length === 1) {
       setAuth('Y');
       setUser(res.data);
     }
    })
    .catch(err => console.log(err))
    onLogin(user);
  }

  return (
    <div class="body">
      <div class="center">
        <h1>Login</h1>

        <form method="post">
          <div class="txt_field">
            <input type="text" onChange={onChangeId} required></input>
            <span></span>
            <label>ID</label>{auth}
          </div>
          <input type="submit" value="Login" onClick={onLogin1}></input>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;