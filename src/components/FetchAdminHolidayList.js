import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ holiday, setHoliday ] = useState([]);

  const setHolidays = async() => {
    const body = await axios.get('/api/admin/holidaylist');
    setHoliday(body.data);
    console.log(body.data);
  } 

  useEffect(() => {
    setHolidays();
  }, []);

  return [holiday];
}

export { useFetch };