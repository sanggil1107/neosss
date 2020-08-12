import React, { Component, Fragment } from 'react';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import moment, { Moment as MomentTypes } from 'moment';
import '../Calendar.scss';

const style = {
  height: "0px"
};

const container = document.getElementById('calendar');
const options = {
  defaultView: 'month',      // 캘린더가 초기에 그려지는 뷰 타입을 주간뷰로 지정
  useCreationPopup: true,
  useDetailPopup: true
};

const calendar = new Calendar(container, options); // 캘린더 인스턴스 생성
/* ---------------------------------------------- */
/* 이동 및 뷰 타입 변경 버튼 이벤트 핸들러 */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dayViewBtn = document.getElementById('dayViewBtn');
const weekViewBtn = document.getElementById('weekViewBtn');
const monthViewBtn = document.getElementById('monthViewBtn');

calendar.setCalendars([
  {
    id: 'Major Subject',
    name: '전공 필수',
    color: '#ffffff',
    bgColor: '#ff5583',
    dragBgColor: '#ff5583',
    borderColor: '#ff5583'
  },
  {
    id: 'Elective Subject',
    name: '전공 선택',
    color: '#ffffff',
    bgColor: '#ffbb3b',
    dragBgColor: '#ffbb3b',
    borderColor: '#ffbb3b'
  },
  {
    id: 'General Subject',
    name: '일반 교양',
    color: '#ffffff',
    bgColor: '#03bd9e',
    dragBgColor: '#03bd9e',
    borderColor: '#03bd9e'
  }
]);

calendar.createSchedules([
  {
    id: '8',
    calendarId: 'Travel',
    title: '강촌 OT',
    category: 'allday',              // 종일 일정
    start: '2020-08-29',
    end: '2020-08-29',
    color: '#ffffff',
    bgColor: '#ff4040',              // 일정 색상을 직접 지정할 수 있어요
    dragBgColor: '#ff4040',
    borderColor: '#ff4040'
  }
]);
calendar.on('beforeUpdateSchedule', event => {
  const {schedule, changes} = event;

  calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
});
class NCalendar extends Component { 
  render() {
		return (
      <div>
        <div className="Calendar">
          <div className="head">
            <button><MdChevronLeft /></button>
            <span className="title">{moment().format('MMMM YYYY')}</span>
            <button><MdChevronRight /></button>
          </div>
        <div id="calendar" style={style}></div>
        </div>
      </div>
		);
	}
}

export default NCalendar;