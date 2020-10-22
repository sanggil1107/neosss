import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ inputs, setInputs ] = useState([]);

  const calldata = async() => {
    const body = await axios.get('/api/list');
    console.log("callapi");
    setInputs(body.data);
  }

  useEffect(() => {
    calldata();
  }, []);

  return [inputs];
}

export { useFetch };