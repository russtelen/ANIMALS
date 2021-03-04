import React, { useState, useEffect } from 'react'
import Login from '../components/auth/Login'
import { Auth } from 'aws-amplify';
import { useAuth } from '../context/Auth'
import { useHistory } from 'react-router-dom';

export default function LoginCtrl() {
  const [username, setUsername] = useState("")
  const [password, setPW] = useState("")
  const history = useHistory()
  const authContext = useAuth()
  const { setUserData } = authContext

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await Auth.signIn({
        username,
        password,
      })
      setUserData({username: response.username})

      history.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Login 
      setPW={setPW} 
      setUsername={setUsername} 
      submitForm={submitForm}
      username={username}
      password={password}
    />
  )
}
