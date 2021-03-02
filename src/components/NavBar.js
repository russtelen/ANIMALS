import React, { useState } from 'react';
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom'

export default function NavBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#313131"}}>
        <Toolbar>
          {
            auth &&
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          }
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
            Animals
          </Typography>
          {auth ? 
            <div>
              <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" keepMounted open={open} onClose={handleClose} anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
            :
            <div>
              <Button color="inherit" onClick={() => history.push("/login")}>Login</Button> |
              <Button color="inherit" onClick={() => history.push("/register")}>Register</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '&:hover':{
      cursor: "pointer"
    }
  },
}));
