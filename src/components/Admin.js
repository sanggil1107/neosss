import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="조근자 등록/삭제" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="휴일 등록/삭제" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="다음 조근 조정" />
      </ListItem>
    </List>
  );
};

export default Admin;
