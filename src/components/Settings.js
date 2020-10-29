import React, { useState } from 'react';
import './Settings.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import { Divider } from '@material-ui/core';
import Team1 from './team1';
import Team2 from './team2';

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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

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

  const team1 = () => {
    setOpen1(true);
  };

  const team2 = () => {
    setOpen2(true);
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
            <ListItemText primary="알림팀 설정" onClick={team1}/>
            <Team1 open={open1} setOpen={setOpen1} />
          </ListItem>
          <ListItem button disableRipple>
            <ListItemText primary="조근팀 설정" onClick={team2}/>
            <Team2 open={open2} setOpen={setOpen2} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Settings;