import React from 'react'
import AnimalDetail from '../components/animals/AnimalDetail'

export default function AnimalDetailCtrl({animal, clearAnimal, setEditMode}) {
  return (
    <AnimalDetail animal={animal} clearAnimal={clearAnimal} setEditMode={setEditMode}/>
  )
}
