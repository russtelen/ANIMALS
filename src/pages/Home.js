import React, { useState } from 'react'
import AnimalsTableCtrl from '../controllers/AnimalsTableCtrl'
import AnimalFormCtrl from '../controllers/AnimalFormCtrl'
import AnimalDetailCtrl from '../controllers/AnimalDetailCtrl'
import { useAnimals } from '../context/Animals'
import { useAuth } from '../context/Auth'
import '../styles/pages/home.css'
import Alert from '../components/Alert'

export default function Home() {

  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const authContext = useAuth()
  const { isAuthenticated } = authContext
  const AnimalsContext = useAnimals()
  const { animals, setMessage } = AnimalsContext

  const handleSelectAnimal = ({id}) => {
    const selected = animals.filter( a => a.animalId === id)[0]
    setSelectedAnimal(selected)
  }

  const clearSelectedAnimal = () => {
    setSelectedAnimal(null)
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage("")
  };

  return (
    <>
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
            !selectedAnimal && isAuthenticated &&
            <div className="card__actions">
              <button className="primary" style={{marginBottom: 10}} onClick={() => setEditMode(true)}>+ Add Animal</button>
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
              clearAnimal={clearSelectedAnimal}
            />
          }
        </div>
      </div>
      <Alert handleClose={handleClose}/>
    </>
  )
}
