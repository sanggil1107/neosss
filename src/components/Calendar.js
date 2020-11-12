import React from 'react';
import '../App.css';
import ControlView from './ControlView';
import CalendarView from './CalendarView';
import AddForm from './AddForm';
import ErrorPopup from './ErrorPopup';

const Calendar = ({ handleTitle }) => {
  
  handleTitle("조근 화면");
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