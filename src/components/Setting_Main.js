import React, { useState } from 'react';
import './Settings.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import { Divider, Button } from '@material-ui/core';
import SettingCheck from './Setting_Check';
import SettingAlarm from './Setting_Alarm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Setting_Main = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(['wifi']);
  const [opencheck, setOpencheck] = useState(false);
  const [openalarm, setOpenalarm] = useState(false);

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

  const handleSettingCheck = () => {
    setOpencheck(true);
  };

  const handleSettingAlarmk = () => {
    setOpenalarm(true);
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
            <ListItemText primary="조근 수행 팀 설정" />
            <Button variant="contained" color="primary" onClick={handleSettingCheck}>설정</Button>
            <SettingCheck open={opencheck} setOpen={setOpencheck}/>  
          </ListItem>
          <ListItem button disableRipple>
            <ListItemText primary="조근 알림 팀 설정"/>
            <Button variant="contained" color="primary" onClick={handleSettingAlarmk}>설정</Button>
            <SettingAlarm open={openalarm} setOpen={setOpenalarm} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Setting_Main;