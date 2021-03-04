import React, { useState } from 'react'
import Form from '../components/form/Form'
import { camelize } from '../utility'
import { createAnimal, updateAnimal } from '../network'
import { v4 as uuid } from 'uuid'
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

export default function AnimalFormCtrl({setEditMode, animalProp}) {
  const AnimalsContext = useAnimals()
  const { queryAllAnimals, addAnimal, patchAnimal } = AnimalsContext
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

  // const addAnimal = async () => {
  //   try {
  //     const object = ({...animalData, animalId: uuid()})
  //     const result = await createAnimal(object)
  //     console.log(result)
  //     queryAllAnimals()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const patchAnimal = async () => {
  //   try {
  //     const object = ({...animalData, animalId: animalProp.animalId})
  //     const result = await updateAnimal(object)
  //     console.log(result)
  //     // add snackbar for show message - result.message
  //     queryAllAnimals()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleInputChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setAnimal({...animalData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    animalProp && animalProp.animalId ? patchAnimal(animalData, animalProp) : addAnimal(animalData)
    setEditMode(false)
  }

  return (
    <Form stateData={animalData} fields={fields} onChange={handleInputChange} onSubmit={handleSubmit} setEditMode={setEditMode}/>
  )
}
