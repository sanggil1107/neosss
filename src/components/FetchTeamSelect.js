import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useTeamFetch = ()=> {
  const [ teamcode, setTeamcode ] = useState();
  const [ id, setId ] = useState();
  const user = localStorage.getItem("user");

  const setUserTeamcode = async(id) => {
    console.log(id)
    const body = await axios.get(`/api/userlist/teamcode${id}`)
      .then(response => response.data[0].TEAMCODE);
    console.log(body)
    setTeamcode(body);
  } 

  useEffect(() => {
    JSON.parse(user).forEach(use => {
      setUserTeamcode(use.USERID);
    })
  },[]);


  return [teamcode];
}

export { useTeamFetch };