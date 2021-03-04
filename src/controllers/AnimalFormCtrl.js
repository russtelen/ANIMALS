import React, { useState } from 'react'
import Form from '../components/form/Form'
import { camelize } from '../utility'
import { useAnimals } from '../context/Animals'

// Initialize fields with an input type.
// ** Current Limitations **
// - No select box logic
// - No radio buttons or checkboxes

const fields = [
  {
    label: "Animal Desc",
    type: "textarea",
  },
  {
    label: "Image Url",
    type: "text",
  },
  {
    label: "Animal Name",
    type: "text",
  },
  {
    label: "Residence",
    type: "text",
  },
  {
    label: "Sanctuary",
    type: "text",
  },
  {
    label: "Animal Type",
    type: "text",
  },
]

export default function AnimalFormCtrl({setEditMode, animalProp, clearAnimal}) {
  const AnimalsContext = useAnimals()
  const { addAnimal, patchAnimal } = AnimalsContext
  let animal = {};

  /* 
    Map through fields and assign fields to a state object, initialize fields as empty strings in state.
    Example Output: 

    animal: {
      description: '',
      ImageUrl: '',
      ...
    }
  */ 
  fields.forEach(f => {
    animal[`${camelize(f.label)}`] = '';
  })

  const initialState = animalProp ?? animal;

  // animalDate state computed from fields data above.
  const [animalData, setAnimal] = useState(initialState);

  const handleInputChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setAnimal({...animalData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (animalProp && animalProp.animalId) {
      patchAnimal(animalData, animalProp)
      clearAnimal()
    } else {
      addAnimal(animalData)
    }
    
    setEditMode(false)
  }

  return (
    <Form stateData={animalData} fields={fields} onChange={handleInputChange} onSubmit={handleSubmit} setEditMode={setEditMode}/>
  )
}
