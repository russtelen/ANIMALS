import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Register() {
  const classes = useStyles();
  const [password, setPW] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <div className={classes.root}>
        <form onSubmit={submitForm} className={classes.form}>
          <Typography className={classes.title} variant="h6">Register</Typography>
          <TextField 
            label="Username" 
            variant="filled" 
            onChange={e => setUsername(e.target.value)} 
            className={classes.field}
            color="tertiary"
            InputProps={{
              className: classes.field
            }}
            InputLabelProps={{
              style: { color: '#fff'}, 
            }}
          />
          <TextField 
            label="Email" 
            variant="filled" 
            onChange={e => setEmail(e.target.value)} 
            className={classes.field}
            color="tertiary"
            InputProps={{
              className: classes.field
            }}
            InputLabelProps={{
              style: { color: '#fff'}, 
            }}
          />
          <TextField 
            label="Password" 
            onChange={e => setPW(e.target.value)} 
            type="password" variant="filled" 
            className={classes.field}
            color="tertiary"
            InputProps={{
              className: classes.field
            }}
            InputLabelProps={{
              style: { color: '#fff'}, 
            }}
          />
          <Button type="submit" style={{width: "100%", backgroundColor: "var(--highlight)", marginTop: 7, marginBottom: 7}}>Register</Button>
        </form>
        <div className={classes.meta}>
          <p style={{color: 'white'}}>Already have an account? <Link style={{color: 'var(--highlight)'}} to="/login">Log in.</Link></p>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    textAlign: "center",
    display: "block",
    margin: "0 auto"
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '20px 0'
  },
  meta: {
    background: '#202020',
    marginTop: -2,
    border: '2px solid #333'
  },
  form: {
    padding: '10px 20px',
    background: '#262626'
  },
  field: {
    width: "100%",
    marginBottom: "7px",
    color: '#ffffff !important'
  },
  button: {
    width: '100%'
  }
}));
