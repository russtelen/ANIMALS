import React from 'react'
import { Pin } from '../../icons'
import '../../styles/components/card.css'

export default function AnimalCard({animal, selectAnimal, setEditMode, handleDelete}) {
  return (
    <li className="card">
      <div className="card__img">
        <img src={animal.imageUrl} alt={animal.animalName} />
      </div>
      <h2 className="card__header">{animal.animalName}</h2>
      <p className="card__meta id">Id: {animal.animalId}</p>
      <p className="card__meta"><Pin/> {animal.sanctuary}</p>
      <div className="flex">
        <span className="card__info">{animal.animalType}</span>
        <div className="card__actions">
          <button className="primary" onClick={() => {
            selectAnimal({id: animal.animalId})
            setEditMode(false)
          }}>View</button>
          <button className="danger" onClick={() => {
            handleDelete({id: animal.animalId})
          }}>Delete</button>
        </div>
      </div>
    </li>
  )
}
