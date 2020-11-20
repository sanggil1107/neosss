import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ teamcode, setTeamcode ] = useState();

  const setUserTeamcode = async() => {
    const body = await axios.get('/api/admin/userlist/teamcode',{ userid: 'mink93' });
    setTeamcode(body.data);
    console.log(body.data);
  } 

  useEffect(() => {
    setUserTeamcode();
  }, []);

  return [teamcode];
}

export { useFetch };