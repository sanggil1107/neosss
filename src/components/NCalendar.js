import React, { Component, Fragment } from 'react';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const style = {
  height: "0px"
};

const container = document.getElementById('calendar');
const options = {
  defaultView: 'month'      // 캘린더가 초기에 그려지는 뷰 타입을 주간뷰로 지정
};

const calendar = new Calendar(container, options); // 캘린더 인스턴스 생성
/* ---------------------------------------------- */
/* 이동 및 뷰 타입 변경 버튼 이벤트 핸들러 */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dayViewBtn = document.getElementById('dayViewBtn');
const weekViewBtn = document.getElementById('weekViewBtn');
const monthViewBtn = document.getElementById('monthViewBtn');

class NCalendar extends Component { 
  render() {
		return (
        <div>


          <div id="calendar" style={style}></div>
        </div>
		);
	}
}

export default NCalendar;