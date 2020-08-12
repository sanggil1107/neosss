import React, { useState, useEffect } from 'react';
import '../Calendar.scss';
import { useCalendarState } from '../stores/calendarState';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ControlView = () => {

  const [ calendarState, setCalendarState ] = useCalendarState();
	const { mode, date } = calendarState;
  const [ curDateStr, setCurDateStr ] = useState('');
  
  useEffect(
		() => {
			let newCurDate;
			if (mode === 'monthly') {
				newCurDate = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월';
			}
			setCurDateStr(newCurDate);
		},
		[ date, mode ]
  );
  
	const onClickLeft = () => {
		changeDate(-1);
	};

	const onClickRight = () => {
		changeDate(1);
	};

	const onClickDateView = () => {
		setCalendarState({ ...calendarState, date: new Date() });
  };
  
	const changeDate = (value) => {
    let newDate;
    if (mode === 'monthly') {
      newDate = new Date(date.getFullYear(), date.getMonth() + value, date.getDate());
      setCalendarState({ ...calendarState, date: newDate });
    }
  };
  
  return (
    <div className="Calendar">
      <div className="head" id="week-contoller">
        <button className="arrow-btn" onClick={onClickLeft}><MdChevronLeft /></button>
        <span className="title" id="date-view" onClick={onClickDateView}>
          {curDateStr}
        </span>
        <button onClick={onClickRight}><MdChevronRight /></button>
      </div>
    </div>
  );
};

export default ControlView;