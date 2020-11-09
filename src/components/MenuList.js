import React, { Component, Fragment } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Calendar  from './Calendar';
import { useUserData } from '../stores/userData';


const MenuList = (props) => {
  const handleLink = () => {
		 props.history.push("/main")
	}
	const {title, setTitle} = props
	const [ userData, setUserData ] = useUserData();
	const { schedule } = userData; // 유저의 스케쥴


	return (
		<Fragment>
			<List>
				<Link to="/main" style={{ textDecoration: 'none', color: 'black' }} onClick={setTitle("메인")}>
					<ListItem button >
						<ListItemIcon> <HomeIcon /> </ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
			</List>
			<List>
				<Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button key={"[등록]"}>
						<ListItemIcon> <InboxIcon /> </ListItemIcon>
						<ListItemText primary={"등록"} />
					</ListItem>
				</Link>
			</List>
			<List>
				<Link to="/settings" style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button key={"[설정]"}>
						<ListItemIcon> <SettingsIcon /> </ListItemIcon>
						<ListItemText primary={"설정"} />
					</ListItem>
				</Link>
			</List>
			<List>
				<Link to="/admin" style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button key={"[Admin]"}>
						<ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
						<ListItemText primary={"Admin"} />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	);
}

export default MenuList;