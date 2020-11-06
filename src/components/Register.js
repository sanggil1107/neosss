import { Button } from '@material-ui/core';
import React  from 'react';

const Register = (props) => {
	const handletest = () => {
		props.history.push("/")
	}

	return (
		<div>
			<h1>조근 등록화면_수정</h1>
			<Button onClick={handletest}>dd</Button>
		</div>
	);
}

export default Register;