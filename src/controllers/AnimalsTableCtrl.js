import React from 'react'
import AnimalsTable from '../components/AnimalsTable'
import { useAnimals } from '../context/Animals'
import { deleteAnimal } from '../network'

export default function AnimalsTableCtrl({ selectAnimal, setEditMode }) {
  const AnimalsContext = useAnimals()
  const { animals, queryAllAnimals } = AnimalsContext

  const handleDelete = async ({id}) => {
    try {
      const result = await deleteAnimal(id)
      queryAllAnimals()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AnimalsTable animals={ animals } selectAnimal={selectAnimal} setEditMode={setEditMode} handleDelete={handleDelete}/>
  )
}
