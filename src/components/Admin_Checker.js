import React from 'react';
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
import { useFetch } from './FetchAdminUserList';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const Admin_Checker = (props) => {
  const back = () => {
    props.history.push('/admin');
  }

  const classes = useStyles();
  const [ dense, setDense ] = React.useState(false);
  const [ users ] = useFetch();

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
            <ListItem key = { user.USERID }>
              <ListItemText 
                primary={ user.USERNAME }
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