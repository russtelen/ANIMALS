import React, { useContext, useEffect, useState } from 'react'
import { getAllAnimals } from '../network'
const AnimalsContext = React.createContext()

export function useAnimals(){
  return useContext(AnimalsContext)
}

export function AnimalsProvider({children}){
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    queryAllAnimals()
  }, [])

  const queryAllAnimals = async () => {
    try {
      const results = await getAllAnimals()
      setAnimals(results)
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    animals,
    queryAllAnimals
  }

  return (
    <AnimalsContext.Provider value={value}>
      { children }
    </AnimalsContext.Provider>
  )
}