import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Admin_Main = ({ handleTitle }) => {
  const classes = useStyles();
  handleTitle("Admin");
  return (
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <Link to="/admin_checker" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button>
            <ListItemText primary="조근자 등록/삭제" />
          </ListItem>
          <Divider />
        </Link>
        <Link to="/admin_holiday" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button divider>
            <ListItemText primary="휴일 등록/삭제" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText primary="다음 조근 조정" />
        </ListItem>
      </List>
  );
};

export default Admin_Main;
