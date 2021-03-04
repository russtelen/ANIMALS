import React from 'react'
import { Pin } from '../../icons'
import '../../styles/components/card.css'
import { useAuth } from '../../context/Auth'

export default function AnimalCard({animal, selectAnimal, setEditMode, handleDelete}) {
  const authContext = useAuth()
  const { isAuthenticated } = authContext

  return (
    <li className="card">
      <div className="card__img">
        <img src={animal.imageUrl} alt={animal.animalName} />
      </div>
      <div style={{width: '100%', padding: '20px'}}>
        <h2 className="card__header">{animal.animalName}</h2>
        {/* <p className="card__meta id">Id: {animal.animalId}</p> */}
        <p className="card__meta"><Pin/> {animal.sanctuary}</p>
        <div className="flex">
          <span className="card__info">{animal.animalType}</span>
          <div className="card__actions">
            <button className="primary" onClick={() => {
              selectAnimal({id: animal.animalId})
              setEditMode(false)
            }}>View</button>
            {
              isAuthenticated &&
              <button className="danger" onClick={() => {
                handleDelete({id: animal.animalId})
              }}>Delete</button>
            }
          </div>
        </div>
      </div>
    </li>
  )
}
