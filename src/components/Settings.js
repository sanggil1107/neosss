import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

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

  return (
    <div>
      <div  class="s_center">
        <List subheader={<ListSubheader></ListSubheader>} >
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
        </List>
      </div>
      <div class="c_center">
        <Card>
          <CardHeader
            subheader="Update password"
            title="Password"
          />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
            // onChange={handleChange}
              type="password"
            // value={values.password}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm password"
              margin="normal"
              name="confirm"
              //onChange={handleChange}
              type="password"
              //value={values.confirm}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <Box
            display="flex"
            justifyContent="flex-end"
            p={2}
          >
            <Button
              color="primary"
              variant="contained"
            >
              Update
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default Settings;