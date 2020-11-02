import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ inputs, setInputs ] = useState([]);

  const calldata = async() => {
    const body = await axios.get('/api/list');
    setInputs(body.data);
  }

  useEffect(() => {
    calldata();
  }, []);

  return [inputs];
}

export { useFetch };