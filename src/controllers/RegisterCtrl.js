import React, { useState }  from 'react'
import Register from '../components/auth/Register'
import { Auth } from 'aws-amplify';
import { useAuth } from '../context/Auth'
import { useHistory } from 'react-router-dom';

export default function RegisterCtrl() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPW] = useState("")
  const [errorMsg, setErrorMsg]= useState("")
  const history = useHistory()
  const authContext = useAuth()
  const { setUserData } = authContext

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

      history.push("/")
    } catch (error) {
      setErrorMsg(error.message)
      console.log(error)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorMsg("");
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
      errorMsg={errorMsg}
      handleClose={handleClose}
    />
  )
}
