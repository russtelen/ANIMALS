import React from 'react'
import FormInput from './FormInput'
import { camelize } from '../../utility'
import '../../styles/components/forms.css'

export default function AnimalForm({ stateData, fields, onChange, onSubmit, setEditMode }) {
  return (
    <form onSubmit={onSubmit} style={{maxWidth: 350}}>
      <div className="form__body">
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
      </div>
      <div className="card__actions detail">
        <button className="primary">Save</button>
        <button onClick={() => setEditMode(false)} className="danger">Cancel</button>
      </div>
    </form>
  )
}
