import React, { useState }  from 'react'
import Register from '../components/auth/Register'
import { Auth } from 'aws-amplify';
import { useAuth } from '../context/Auth'
import { useHistory } from 'react-router-dom';
import { useAnimals } from '../context/Animals'

export default function RegisterCtrl() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPW] = useState("")
  const history = useHistory()
  const authContext = useAuth()
  const { setUserData } = authContext
  const AnimalsContext = useAnimals()
  const { setMessage, setError } = AnimalsContext

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      })
      
      setUserData({username: response.user.username})
      setMessage(response.message)
      setError(false)
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
    <Register 
      setPW={setPW} 
      setEmail={setEmail} 
      setUsername={setUsername} 
      submitForm={submitForm}
      username={username}
      email={email}
      password={password}
      handleClose={handleClose}
    />
  )
}
