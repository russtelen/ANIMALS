import React from 'react'
import AnimalCard from './AnimalCard'
import '../../styles/components/card-list.css'

export default function AnimalsTable({animals, selectAnimal, setEditMode, handleDelete}) {
  return (
    <ul className="card__list">
      {
        animals?.map((a, index) => (
          <AnimalCard animal={a} key={index} selectAnimal={selectAnimal} setEditMode={setEditMode} handleDelete={handleDelete}/>
        ))
      }
    </ul>
  )
}