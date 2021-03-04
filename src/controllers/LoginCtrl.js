import React, { useState } from 'react'
import Login from '../components/auth/Login'
import { Auth } from 'aws-amplify';
import { useAuth } from '../context/Auth'
import { useAnimals } from '../context/Animals'
import { useHistory } from 'react-router-dom';

export default function LoginCtrl() {
  const [username, setUsername] = useState("")
  const [password, setPW] = useState("")
  const history = useHistory()
  const authContext = useAuth()
  const { setUserData } = authContext

  const AnimalsContext = useAnimals()
  const { setMessage, setError } = AnimalsContext

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await Auth.signIn({
        username,
        password,
      })
      setUserData({username: response.username})
      setMessage(response.message)
      history.push("/")
    } catch (error) {
      setMessage(error.message)
      setError(true)
      console.log(error.message)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage("");
  };

  return (
    <Login 
      setPW={setPW} 
      setUsername={setUsername} 
      submitForm={submitForm}
      username={username}
      password={password}
      handleClose={handleClose}
    />
  )
}
