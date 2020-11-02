import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ teams, setTeams ] = useState([]);

  const setTeam = async() => {
    const body = await axios.get('/api/teamlist');
    setTeams(body.data);
  }

  useEffect(() => {
    setTeam();
  }, []);

  return [teams];
}

export { useFetch };