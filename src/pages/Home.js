import React from 'react'
import AnimalsTableCtrl from '../controllers/AnimalsTableCtrl'
import AnimalFormCtrl from '../controllers/AnimalFormCtrl'

export default function Home() {
  return (
    <>
      <p>Home</p>
      <AnimalFormCtrl />
      <AnimalsTableCtrl />
    </>
  )
}
