import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ()=> {
  const [ datas, setDatas ] = useState([]);

  const setData = async() => {
    const body = await axios.get('/api/list');
    setDatas(body.data);
  }

  useEffect(() => {
    setData();
  }, []);

  return [datas];
}

export { useFetch };