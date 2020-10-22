import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import { insertDate, deleteDate, editDate } from './UserDataController';
// store
import { useAddFormState } from '../stores/addFormState';
import { useUserData } from '../stores/userData';
import { useErrorState } from '../stores/errorState';
import axios from 'axios';

const AddForm = () => {
	const [ addFormState, setAddFormState ] = useAddFormState();
	const { active, mode } = addFormState;
	const [ newAddFormState, setNewAddFormState ] = useState({
		title: '',
		curDate: new Date()
	});
	const { title, curDate, startHour, endHour } = newAddFormState;
	const [ userData, setUserData ] = useUserData();
	const { schedule } = userData;
	const [ beforeEdit, setBeforeEdit ] = useState();
	const [ errorState, setErrorState ] = useErrorState();
	
	const inserttitle = () => {
		axios.post('/api/insert', {
			newtitle: title
		})
	};
	const updatetitle = (newtitle) => {
		axios.put('/api/update', {title: newtitle});
	};
	const deletetitle = (title) => {
		axios.delete(`/api/delete/${title}`);
	};

	useEffect(
		() => {
			if (active) {
				const { title, curDate, startHour, endHour } = addFormState;
				setNewAddFormState({ title, curDate, startHour, endHour });
				
				if (mode === 'edit') {
					setBeforeEdit({ title, curDate, startHour, endHour });
				}
			}
		},
 		[ active ]
	);

	const onChangeCurDate = (value) => {
		console.log(value)
		setNewAddFormState({ ...newAddFormState, curDate: value });
	};

	const onChangeNewAddFormState = (e) => {
		const { id, value } = e.target;
		switch (id) {
			case 'input-title':
				setNewAddFormState({ ...newAddFormState, title: value });
				break;
			case 'hour-start-select':
				const newStartHour = value * 1;
				const newEndHour = newStartHour < endHour ? endHour : newStartHour + 1;
				setNewAddFormState({ ...newAddFormState, startHour: newStartHour, endHour: newEndHour });
				break;
			case 'hour-end-select':
				setNewAddFormState({ ...newAddFormState, endHour: value * 1 });
				break;
			default:
				break;
		}
	};

	const onClickCancel = () => {
		setAddFormState({ ...addFormState, active: false });
	};

	const onClickAdd = () => {
		if (title === '') return;

		const newSchedule = insertDate(newAddFormState, schedule);
		if (newSchedule !== false) {
			setUserData({ ...userData, schedule: newSchedule });
			setAddFormState({ ...addFormState, active: false });
			inserttitle();
			setErrorState({
				...errorState,
				active: true,
				mode: 'add',
				message: [ [ '조근이 추가 되었습니다.' ] ]
			});
		} else {
			setErrorState({
				...errorState,
				active: true,
				mode: 'fail',
				message: [ [ '조근을 추가할 수 없습니다.' ], [ '해당 날에 이미 조근이 존재합니다.' ] ]
			});
		}
	};

	const onClickEdit = () => {
		if (title === '') return;
		const newSchedule = editDate(newAddFormState, beforeEdit, schedule);
		if (newSchedule !== false) {
			setUserData({ ...userData, schedule: newSchedule });
			setAddFormState({ ...addFormState, active: false });
			updatetitle(title);
			setErrorState({
				...errorState,
				active: true,
				mode: 'edit',
				message: [ [ '조근이 수정 되었습니다.' ] ]
			});
		} else {
			setErrorState({
				...errorState,
				active: true,
				mode: 'fail',
				message: [ [ '조근을 수정할 수 없습니다.' ], [ '해당 날에 이미 조근이 존재합니다.' ] ]
			});
		}
	};

	const onClickDelete = () => {
		const newSchedule = deleteDate(curDate, startHour, endHour, schedule);
		setUserData({ ...userData, schedule: newSchedule });
		setAddFormState({ ...addFormState, active: false });
		deletetitle(title);
		setErrorState({
			...errorState,
			active: true,
			mode: 'delete',
			message: [ [ '조근이 삭제 되었습니다.' ] ]
		});
	};

	if (!active) return null;
	else if (active)
		return (
			<div id="panel">
				<div id="add-form">
					<div id="add-form-title">{mode === 'add' ? '조근 추가' : '조근 수정'}</div>
					<div id="input-form">
						<div className="label">이름</div>
						<input id="input-title" value={title} onChange={onChangeNewAddFormState} />
					</div>
					{/* <div id="date-picker-form">
						<div className="label">날짜</div>
						<div id="date-picker">
							<DatePicker selected={new Date(curDate)} onChange={onChangeCurDate} />
						</div>
					</div> */}
					<div id="option-form">
						{mode === 'add' ? (
							<div id="add-btn" className="btn" onClick={onClickAdd}>
								저장
							</div>
						) : null}
						{mode === 'edit' ? (
							<div id="edit-btn" className="btn" onClick={onClickEdit}>
								수정
							</div>
						) : null}

						{mode === 'edit' ? (
							<div id="delete-btn" className="btn" onClick={onClickDelete}>
								삭제
							</div>
						) : null}
						<div id="cancel-btn" className="btn" onClick={onClickCancel}>
							취소
						</div>
					</div>
				</div>
			</div>
		);
};

export default AddForm;
