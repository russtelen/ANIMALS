import React, { useState }  from 'react'
import Register from '../components/auth/Register'

export default function RegisterCtrl() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPW] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()

  }

  return (
    <Register 
      setPW={setPW} 
      setEmail={setEmail} 
      setUsername={setUsername} 
      submitForm={submitForm}
      username={username}
      email={email}
      password={password}
    />
  )
}
