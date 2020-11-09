import { userData } from "../stores/userData";

export const getSchedule = (startDate, endDate, schedule) => {
	if (schedule.length === 0) return [];
	if (schedule === false) return [];
	console.log(schedule);
	console.log(schedule.length);
	const start = new Date(schedule[0].curDate).getTime();
	const end = new Date(schedule[schedule.length - 1].curDate).getTime();
	if (endDate.getTime() < start) return [];
	else if (startDate.getTime() > end) return [];

	const newSchedule = [];
	for (let i = 0; i < schedule.length; i++) {
		const curDate = new Date(schedule[i].curDate).getTime();
		if (startDate.getTime() <= curDate && endDate.getTime() >= curDate) {
			newSchedule.push(schedule[i]);
		} else if (newSchedule.length !== 0) {
			break;
		}
	}

	return newSchedule;
};

export const isConflict = (curDate, startHour, endHour, schedule) => {
	let i = 0;
	for (i = 0; i < schedule.length; i++) {
		let diffmonth = new Date(curDate).getMonth() - new Date(schedule[i].curDate).getMonth(); 
		let diffdate = new Date(curDate).getDate() - new Date(schedule[i].curDate).getDate();
	
		if (diffmonth == 0 && diffdate == 0) {
			i = -1
			break;
		}
	}

	return i;
};

export const insertDate = (addFormState, schedule) => {
	const { title, curDate, startHour, endHour } = addFormState;
	const index = isConflict(curDate, startHour, endHour, schedule);

	if (index !== -1) {
		const newItem = { title, curDate, startHour, endHour };
		return [ ...schedule.slice(0, index), newItem, ...schedule.slice(index) ];
	} else {
		return false;
	}
};

export const editDate = (addFormState, beforeEdit, schedule) => {
	const { title, curDate, startHour, endHour } = addFormState;
	console.log(beforeEdit)
	// 이전 할일을 지우고
	const newSchedule = deleteDate(beforeEdit.curDate, beforeEdit.startHour, beforeEdit.endHour, schedule);
	// 새 할일을 추가하는데
	const index = isConflict(curDate, startHour, endHour, newSchedule);
	if (index !== -1) {
		// 추가에 성공
		const newItem = { title, curDate, startHour, endHour };
		return [ ...newSchedule.slice(0, index), newItem, ...newSchedule.slice(index) ];
	} else {
		// 추가하려는 곳이 중복이면 작업 취소
		return false;
	}
};

export const deleteDate = (curDate, startHour, endHour, schedule) => {
	let index = schedule.findIndex(
		(el) =>
			new Date(el.curDate).getTime() === new Date(curDate).getTime() && el.startHour === startHour && el.endHour === endHour
				? true
				: false
	);

	if (index !== -1) {
		return [ ...schedule.slice(0, index), ...schedule.slice(index + 1) ];
	}

	return schedule;
};
