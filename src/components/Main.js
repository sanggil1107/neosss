import React, { useState } from 'react';
import MenuBar from './Menubar';
import Calendar  from './Calendar'

const Main = () => {

  return (
    <div>
      <MenuBar/>
      <Calendar/>
    </div>
  );
};

export default Main;