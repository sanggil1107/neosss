import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Menu, MenuItem, Link, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuList from './MenuList';
import Calendar  from './Calendar';
import Register from './Register';
import Setting_Main from './Setting_Main';
import Admin from './Admin';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const MenuBar = (props) => {
  const classes = useStyle();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [left, setLeft] = useState(false);
  const [title, setTitle] = useState('dfd');
  const open = Boolean(anchorEl);

  const sideList = (
    <div className={classes.list}>
      <MenuList setTitle={setTitle}/>        
    </div>
  );

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (side, open) => () => {
    setLeft(open)
  };
  
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
              open={left}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}>
              <div
                  tabIndex={0}
                  role="button"
                  onClick={toggleDrawer('left', false)}
                  onKeyDown={toggleDrawer('left', false)}>
                  {sideList}
              </div>
          </SwipeableDrawer>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            조근등록 {title} 
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path="/main" component={Calendar}/>
          <Route exact path="/register" component={() => <Register title = {title}></Register>}/>
          <Route exact path="/settings" component={Setting_Main}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
    </div>
  );
}

export default MenuBar;