import React, { useState, useEffect } from 'react';
import '../App.css';
import ControlView from './ControlView';
import CalendarView from './CalendarView';
import AddForm from './AddForm';
import ErrorPopup from './ErrorPopup';

const Calendar = () => {
  return (
    <div id="calendar">
      <ControlView />
      <CalendarView />     
      <AddForm />
      <ErrorPopup />
    </div>
  );
};

export default Calendar;