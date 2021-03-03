import React from 'react'
import '../../styles/components/card.css'

export default function AnimalDetail({animal, clearAnimal, setEditMode}) {
  return (
    <div className="detail__card">
      <div className="detail__img">
        <img src={animal.imageUrl} alt="animal.animalName" />
      </div>
      <div className="detail__body">
        <div className="flex" style={{ marginBottom: 20 }}>
          <div>
            <h2 className="card__header">{animal.animalName}</h2>
            <p className="card__meta id">{ animal?.residence }</p>
          </div>
          <div style={{marginLeft: 5}}>
            <span className="card__info">{animal.animalType}</span>
          </div>
        </div>
        <div className="detail__description">
          <p>{ animal?.animalDesc }</p>
        </div>
      </div>
      <div className="card__actions detail">
        <button onClick={setEditMode}className="primary">Edit</button>
        <button onClick={() => clearAnimal()} className="danger">Cancel</button>
      </div>
    </div>
  )
}
