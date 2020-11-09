import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import { useFetch } from './FetchAdminUserList';


const Admin_Checker = (props) => {
  const classes = useStyles();
  const [ dense, setDense ] = useState(false);
  const [ checked, setChecked ] = useState(['push']);
  const [ users ] = useFetch();

  const back = () => {
    props.history.push('/admin');
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" size="small" style= { { float: "left", margin: "10px" } } onClick={back}>뒤로가기</Button>
      <Button variant="outlined" size="small" style= { { float: "right", margin: "10px" } }>조근자등록</Button>
      <Typography className={classes.title}>
        조근자 목록
      </Typography>
      <br></br>
      <Divider />
      <div className={classes.demo}>
        <List dense={dense}>
          { users.map((user) =>
            <ListItem Button key = { user.USERID }>
              <ListItemText 
                primary={ user.USERNAME + " (" + user.USERID + ")"}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(2,2,2),
    textAlign: "center",
    justifyContent: "center",
  },
}));




export default Admin_Checker;