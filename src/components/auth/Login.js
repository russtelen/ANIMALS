import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

export default function Login() {
  const classes = useStyles();
  const [password, setPW] = useState("")
  const [email, setEmail] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h6" style={{color: "white"}}>Login</Typography>
        <form onSubmit={submitForm}>
          <TextField label="Email" variant="filled" onChange={e => setEmail(e.target.value)} className={classes.field}/>
          <TextField label="Password" onChange={e => setPW(e.target.value)} type="password" variant="filled" className={classes.field}/>
          <Button type="submit" style={{width: "40%", backgroundColor: "pink"}}>Submit</Button>
        </form>
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
  field: {
    width: "100%",
    marginBottom: "1em"
  }
}));
