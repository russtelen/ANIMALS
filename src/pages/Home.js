import React, { useState, useEffect } from 'react'
import AnimalsTableCtrl from '../controllers/AnimalsTableCtrl'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimalFormCtrl from '../controllers/AnimalFormCtrl'
import AnimalDetailCtrl from '../controllers/AnimalDetailCtrl'
import { useAnimals } from '../context/Animals'
import '../styles/pages/home.css'

export default function Home() {
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const AnimalsContext = useAnimals()
  const { animals } = AnimalsContext

  const handleSelectAnimal = ({id}) => {
    const selected = animals.filter( a => a.animalId === id)[0]
    setSelectedAnimal(selected)
  }

  const clearSelectedAnimal = () => {
    setSelectedAnimal(null)
  }

  return (
    <>
      <NavBar/>
      <div className="wrap">
        <div className="column main">
          <AnimalsTableCtrl 
            selectAnimal={handleSelectAnimal}
            clearAnimal={clearSelectedAnimal} 
            setEditMode={(bool) => setEditMode(bool)}
          />
        </div>
        <div className="column sidebar">
          {
            !selectedAnimal &&
            <div className="card__actions">
              <button className="primary" style={{marginBottom: 10}}onClick={() => setEditMode(true)}>+ Add Animal</button>
            </div>
          }
          {
            selectedAnimal && !editMode &&
            <AnimalDetailCtrl 
              animal={selectedAnimal} 
              clearAnimal={clearSelectedAnimal}
              setEditMode={() => setEditMode(true)}
            /> 
          }
          {
            editMode &&
            <AnimalFormCtrl
              animalProp={selectedAnimal}
              setEditMode={(bool) => setEditMode(bool)}
            />
          }
        </div>
      </div>

    </>
  )
}
