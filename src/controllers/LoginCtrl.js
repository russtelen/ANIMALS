import React, { useState, useEffect } from 'react'
import Login from '../components/auth/Login'

export default function LoginCtrl() {
  const [username, setUsername] = useState("")
  const [password, setPW] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
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
