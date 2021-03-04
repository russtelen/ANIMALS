import React, { useContext, useEffect, useState } from 'react'
import { getAllAnimals, createAnimal, updateAnimal } from '../network'
import { v4 as uuid } from 'uuid'
const AnimalsContext = React.createContext()

export function useAnimals(){
  return useContext(AnimalsContext)
}

export function AnimalsProvider({children}){
  const [animals, setAnimals] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    queryAllAnimals()
  }, [])

  const queryAllAnimals = async () => {
    try {
      const results = await getAllAnimals()
      setAnimals(results)
      setError(false)
    } catch (error) {
      setMessage(error.message)
      setError(true)
      console.log(error)
    }
  }

  const addAnimal = async (animalData) => {
    try {
      const object = ({...animalData, animalId: uuid()})
      const result = await createAnimal(object)
      console.log("Created animal", result)
      setMessage(result.message)
      setError(false)
      queryAllAnimals()
    } catch (error) {
      setMessage(error.message)
      setError(true)
      console.log(error.message)
    }
  }

  const patchAnimal = async (animalData, animalProp) => {
    try {
      const object = ({...animalData, animalId: animalProp.animalId})
      const result = await updateAnimal(object)
      console.log("Update animal", result)
      setMessage(result.message)
      setError(false)
      queryAllAnimals()
    } catch (error) {
      setMessage(error.message)
      setError(true)
      console.log(error.message)
    }
  }


  const value = {
    animals,
    queryAllAnimals,
    addAnimal,
    patchAnimal,
    message,
    setMessage,
    error,
    setError
  }

  return (
    <AnimalsContext.Provider value={value}>
      { children }
    </AnimalsContext.Provider>
  )
}