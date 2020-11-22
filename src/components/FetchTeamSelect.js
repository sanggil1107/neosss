import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useTeamFetch = ()=> {
  const [ teamcode, setTeamcode ] = useState([]);
  const [ id, setId ] = useState();
  const user = localStorage.getItem("user");

  const setUserTeamcode = async(id) => {
    console.log(id)
    const body = await axios.get(`/api/userlist/teamcode${id}`);
    console.log(body.data)
    setTeamcode(body.data);
  } 

  useEffect(() => {
    JSON.parse(user).forEach(use => {
      setUserTeamcode(use.USERID);
    })
  },[]);

  console.log(teamcode)
  return [teamcode];
}

export { useTeamFetch };