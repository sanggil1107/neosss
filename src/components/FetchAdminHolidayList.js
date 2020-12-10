import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ Holiday, setUHoliday ] = useState([]);

  const setHoliday = async() => {
    const body = await axios.get('/api/admin/holidaylist');
    setHoliday(body.data);
    console.log(body.data);
  } 

  useEffect(() => {
    setHoliday();
  }, []);

  return [Holiday];
}

export { useFetch };