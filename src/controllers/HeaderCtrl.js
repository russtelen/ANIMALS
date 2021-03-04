import React from 'react'
import Header from '../components/Header'
import { Auth } from 'aws-amplify';
import { useAuth } from '../context/Auth'

export default function HeaderCtrl() {
  const authContext = useAuth()
  const { setUserData } = authContext
  
  const handleSignOut = async () => {
    try {
      const result = await Auth.signOut({global: true})
      console.log(result)
      setUserData(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Header signOut={handleSignOut}/>
  )
}
