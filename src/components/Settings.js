import React, { useState } from 'react';
import './Settings.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import Team1 from './team1';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(['wifi']);
  const [open, setOpen] = useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const team = () => {
    setOpen(true);
  };

  return (
    <div>
      <div  class="s_center">
        {/* <List subheader={<ListSubheader></ListSubheader>} >
          <ListItem>
            <ListItemText id="switch-list-label-wifi" primary="Push On/Off" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle('wifi')}
                checked={checked.indexOf('wifi') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List> */}
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem button>
            <ListItemText id="switch-list-label-wifi" primary="Push 알림" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle('wifi')}
                checked={checked.indexOf('wifi') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button divider disableRipple >
            <ListItemText primary="알림팀 설정" onClick={team}/>
            <Team1 open={open} setOpen={setOpen} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="조근팀 설정" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Settings;