import React, { useState, useEffect } from 'react';
import '../App.css';
import Monthly from './Monthly';
// store
import { useCalendarState } from '../stores/calendarState';
const CalendarView = () => {
	const [ calendarState, setCalendarState ] = useCalendarState();
	return <div id="calendar-view"> <Monthly /> </div>;
};

export default CalendarView;
