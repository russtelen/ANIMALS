import React from 'react'
import AnimalsTable from '../components/AnimalsTable'
import { useAnimals } from '../context/Animals'

export default function AnimalsTableCtrl() {
  const AnimalsContext = useAnimals()
  const { animals } = AnimalsContext

  return (
    <AnimalsTable animals={ animals }/>
  )
}
