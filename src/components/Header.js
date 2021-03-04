import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/Auth'
import '../styles/components/header.css'

export default function Header({signOut}) {
  const classes = useStyles();
  const authContext = useAuth()
  const { isAuthenticated, userData } = authContext
  const history = useHistory();

  return (
    <header className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#313131"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
            Animals
          </Typography>
          {isAuthenticated ? 
            <div>
              { userData?.username }
              <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton> | &nbsp;
              <Button color="inherit" onClick={() => signOut()}>Signout</Button>
            </div>
            :
            <div>
              <Button color="inherit" onClick={() => history.push("/login")}>Login</Button> |
              <Button color="inherit" onClick={() => history.push("/register")}>Register</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </header>
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
