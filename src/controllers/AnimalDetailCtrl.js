import React from 'react'
import AnimalDetail from '../components/AnimalDetail'

export default function AnimalDetailCtrl({animal, clearAnimal, setEditMode}) {
  return (
    <AnimalDetail animal={animal} clearAnimal={clearAnimal} setEditMode={setEditMode}/>
  )
}
