import React from 'react'
import FormInput from './FormInput'
import { camelize } from '../utility'

export default function AnimalForm({ stateData, fields, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  )
}
