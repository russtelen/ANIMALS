import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import { camelize } from '../utility'

// Initialize fields with an input type.
// ** Current Limitations **
// - No select box logic
// - No radio buttons or checkboxes

const fields = [
  {
    label: "Description",
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

export default function AnimalFormCtrl() {
  let animal = {}

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
    animal[`${camelize(f.label)}`] = ''
  })

  // animalDate state computed from fields data above.
  const [animalData, setAnimal] = useState(animal);

  const handleInputChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setAnimal({...animalData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(animalData)
  }

  return (
    <Form stateData={animalData} fields={fields} onChange={handleInputChange} onSubmit={handleSubmit}/>
  )
}
