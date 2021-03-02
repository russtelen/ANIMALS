import React from 'react'
import FormInput from './FormInput'
import { camelize } from '../utility'
import '../styles/components/forms.css'

export default function AnimalForm({ stateData, fields, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{maxWidth: 350}}>
      {
        fields.map((f, index) => (
          <FormInput
            onChange={onChange} 
            key={index}
            label={f.label}
            type={f.type}
            value={stateData[`${camelize(f.label)}`]}
          />
        ))
      }
      <button type="submit">Submit</button>
    </form>
  )
}
