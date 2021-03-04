import React, {useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

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
        <Typography variant="h6" style={{color: "white"}}>Register</Typography>
        <form onSubmit={submitForm}>
          <TextField label="Username"  onChange={e => setUsername(e.target.value)} className={classes.field} color="secondary"/>
          <TextField label="Email" onChange={e => setEmail(e.target.value)} className={classes.field} color="secondary"/>
          <TextField label="Password" onChange={e => setPW(e.target.value)} type="password" className={classes.field} color="secondary"/>
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
    margin: "0 auto",
    color: "white"
  },
  field: {
    width: "100%",
    marginBottom: "1em",
    '& label': {
      color: "white"
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: "white",
      borderBottom: "1px solid #b9b9b9"
    },
    // '& .MuiFilledInput-underline:before': {
    //   borderBottom: "1px solid #b9b9b9"
    // }
  }
}));
