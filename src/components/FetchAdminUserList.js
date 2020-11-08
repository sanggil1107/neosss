import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ users, setUsers ] = useState([]);

  const setUser = async() => {
    const body = await axios.get('/api/admin/userlist');
    setUsers(body.data);
    console.log(body.data);
  } 

  useEffect(() => {
    setUser();
  }, []);

  return [users];
}

export { useFetch };