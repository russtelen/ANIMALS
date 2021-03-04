import React, { useContext, useEffect, useState } from 'react'
import { getAllAnimals, createAnimal, updateAnimal } from '../network'
import { v4 as uuid } from 'uuid'
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

  const addAnimal = async (animalData) => {
    try {
      const object = ({...animalData, animalId: uuid()})
      const result = await createAnimal(object)
      console.log(result)
      queryAllAnimals()
    } catch (error) {
      console.log(error)
    }
  }

  const patchAnimal = async (animalData, animalProp) => {
    try {
      const object = ({...animalData, animalId: animalProp.animalId})
      const result = await updateAnimal(object)
      console.log(result)
      // add snackbar for show message - result.message
      queryAllAnimals()
    } catch (error) {
      console.log(error)
    }
  }


  const value = {
    animals,
    queryAllAnimals,
    addAnimal,
    patchAnimal
  }

  return (
    <AnimalsContext.Provider value={value}>
      { children }
    </AnimalsContext.Provider>
  )
}