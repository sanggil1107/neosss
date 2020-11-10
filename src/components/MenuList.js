import React, { Component, Fragment, useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useUserData } from '../stores/userData';

const MenuList = (props) => {

	const { setTitle } = props
	const [text, setText] = useState();
	const handleText = (e) => {
		setText(e.target.text);
		setTitle(text);
	}
	return (
		<Fragment>
			<List>
				<Link to="/main" style={{ textDecoration: 'none', color: 'black' }} >
					<ListItem button >
						<ListItemIcon> <HomeIcon /> </ListItemIcon>
						<ListItemText primary={"Home"}/>
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