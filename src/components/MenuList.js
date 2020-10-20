import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

class MenuList extends Component {
	render() {
		return (
			<Fragment>
				<List>
					<Link to="/main" style={{ textDecoration: 'none', color: 'black' }}>
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
					<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
						<ListItem button key={"[환경설정]"}>
							<ListItemIcon> <SettingsIcon /> </ListItemIcon>
							<ListItemText primary={"환경설정"} />
						</ListItem>
					</Link>
				</List>
				<List>
					<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
						<ListItem button key={"[Admin]"}>
							<ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
							<ListItemText primary={"Admin"} />
						</ListItem>
					</Link>
				</List>
			</Fragment>
		);
	}
}

export default MenuList;