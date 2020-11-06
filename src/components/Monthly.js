import React, { useState, useEffect, Fragment } from 'react';
import '../App.css';
import MonthlyCell from './MonthlyCell';
import { getSchedule } from './UserDataController';
// store
import { useCalendarState } from '../stores/calendarState';
import { useUserData } from '../stores/userData';
import moment, { Moment as MomentTypes } from 'moment';
import { useFetch } from'./FetchData';
import { insertDate, deleteDate, editDate } from './UserDataController';
import axios from 'axios';
const Monthly = () => {
	const [ calendarState, setCalendarState ] = useCalendarState();
	const { date } = calendarState;
	const [ days ] = useState([ '일', '월', '화', '수', '목', '금', '토' ]);
	const [ dates, setDates ] = useState([]); // 달력의 행
	const [ userData, setUserData ] = useUserData();
	const { schedule } = userData; // 유저의 스케쥴
	const [ curSchedule, setCurSchedule ] = useState([]); // 현재 달력 날짜 안에 포함된 스케쥴
	const [ isLoading, setIsLoading ] = useState(false);	
	const [ newAddFormState ] = useFetch();
	const [ datas, setDatas ] = useState([]);

  // const setData = async() => {
  //   const body = await axios.get('/api/list');
	// 	setDatas(body.data);

	// }
	// setData();
	// useEffect(
	// 	() => {
		
	// 	}, [ datas ]
	// );
	useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  });

	useEffect(
		() => {
			
			console.log("date");
			const { firstDate, lastDate } = getFirstAndLastDate();
			setDates(makeCalendar(firstDate, lastDate));
			// setData();
			return () => {
				console.log("cleaned up");
			};
		}, [ date ]
	);

	useEffect(
		() => {
			// setData();
			setIsLoading(true);
			const { firstDate, lastDate } = getFirstAndLastDate();
			let newSchedule = ''
				
			newAddFormState.map((add, i) => (
				newSchedule = insertDate(add, schedule),
				schedule.push(add),
				setUserData({ ...userData, schedule: newSchedule }) // ???
			))
	
			setCurSchedule(getSchedule(firstDate, lastDate, schedule));
			setIsLoading(false);
			return () => {
				console.log("cleaned up");
			};
		}, [ newAddFormState ]
	);
	
	
	useEffect(
		() => {
			console.log("userdata");
			
			const { firstDate, lastDate } = getFirstAndLastDate();
			setDates(makeCalendar(firstDate, lastDate));
			setCurSchedule(getSchedule(firstDate, lastDate, schedule));
			// setData();
			return () => {
				console.log("cleaned up");
			};
		}, [ userData ]
		);
		
	const getFirstAndLastDate = () => {
		const year = date.getFullYear();
		const month = date.getMonth();
		let firstDate = new Date(year, month, 1);
		firstDate = new Date(year, month, -firstDate.getDay() + 1);
		let lastDate = new Date(year, month + 1, 0);
		lastDate = new Date(year, month + 1, 6 - lastDate.getDay());
		return { firstDate: firstDate, lastDate: lastDate };
	};
	
	const makeCalendar = (firstDate, lastDate) => {
		let tempDate = new Date(firstDate);
		let newDates = [];
		let index = 0;
		while (tempDate.getMonth() !== lastDate.getMonth() || tempDate.getDate() !== lastDate.getDate()) {
			if (index % 7 === 0) newDates[parseInt(index / 7)] = [];
			newDates[parseInt(index / 7)].push(tempDate);
			tempDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1);
			index++;
		}
		newDates[parseInt(index / 7)].push(tempDate); // 달력의 시작이 1일이고, 전 달이 30일로 끝나는 날 때문에 따로 배치
		setCurSchedule(getSchedule(firstDate, lastDate, schedule));
		return newDates.slice();
	};

	const getCurDateSchedule = (curDate) => {
		const curDateSchedule = [];
		curSchedule.forEach((date) => {
			if (moment(date.curDate).format('YYYY-MM-DD') === moment(curDate).format('YYYY-MM-DD')) {
				curDateSchedule.push(date);
			}
		});
	
		return curDateSchedule;
	};

	// function generate() {
  //   const today = moment();
  //   const startWeek = today.clone().startOf('month').week();
  //   const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  //   let calendar = [];
  //   for (let week = startWeek; week <= endWeek; week++) {
  //     calendar.push(
  //       <div className="row" key={week}>
  //         {
  //           Array(7).fill(0).map((n, i) => {
  //             let current = today.clone().week(week).startOf('week').add(n + i, 'day')
  //             let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
  //             let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
  //             return (
  //               <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
  //                 <span className={`text`}>{current.format('D')}</span>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     )
  //   }
  //   return calendar;
  // }

	return (
		<Fragment>
		{isLoading ? (
			<div>isLoading...</div>
		) : (
		<div id="monthly-view">
			<div className="day-row">
				{days.map((a, i) => (
					<div key={i} className="day-cell">
						{a}
					</div>
				))}
			</div>

			{dates.map((a, i) => (
				<div key={i} className="monthly-row">
					{a.map((b, j) => <MonthlyCell key={j} date={b} schedule={getCurDateSchedule(b)} />)}
				</div>
			))} 

		</div>
		)}
		</Fragment>
	);
};

export default Monthly;
