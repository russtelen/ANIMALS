import React, { useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const [userData, setUserData] = useLocalStorage('userData', null)
  const [isAuthenticated, setAuthentication] = useState(false)

  const value = {
    setUserData,
    userData,
    isAuthenticated
  }

  useEffect(() => {
    !userData ? setAuthentication(false) : setAuthentication(true)
  }, [userData])

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}