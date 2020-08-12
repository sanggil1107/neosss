import React, { Component, Fragment } from 'react';

class User extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		userid: '',
		username: '',
		status: ''
	  }
	}
  
	componentDidMount() {
	  this.callApi() 
		.then(res => this.setState({userid: res.userid, username: res.username, status: res.status}))
		.catch(err => console.log(err));
	}
  
	callApi = async () => {
	  const reponse = await fetch('/userList');
	  const body = await reponse.json();
	  console.log(reponse);
	  return body;
	}

	render() {
		return selectUserList();
	}
}

// async function selectUserDB()
// {
// 	const { connPool } = require('./connect')

// 	const pool = await connPool

// 	await pool.request()
// 	.input('TEAMCODE', 1)
// 	.output('USERID')
// 	.execute('UP_USERLIST_SELECT')
// 	.then(result => {
// 		console.log(result)
// 	})
// }



function selectUserList()
{
	return (
		<Fragment>
			<head>사용자 명단 관리</head>
			<body>
				<h1>사용자 명단 관리</h1>
				<div>
					<table>
						<thead>
							<tr>
								<td>아이디</td>
								<td>이름</td>
								<td>사용여부</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{userid}</td>
								<td>{username}</td>
								<td>{status}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</body>
		</Fragment>
	);
}

export default User;