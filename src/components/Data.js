import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  // const { firstDate, lastDate } = getFirstAndLastDate();
  //const response = await fetch('/test');
  const [ inputs, setInputs ] = useState([]);

  const calldata = async() => {
    const body = await axios.get('/api/list');
    //const body = await response.json();
    console.log("callapi");
    setInputs(body.data);
  }

  useEffect(() => {
    calldata();
  }, []);

  return [inputs];
}

export { useFetch };