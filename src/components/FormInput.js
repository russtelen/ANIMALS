import React from 'react'
import { camelize, capitalize } from '../utility'
import '../styles/components/form-inputs.css'

export default function FormInput({label, type, onChange, value}) {
  return (
    <fieldset className={value.length > 0 ? 'focused' : ''}>
      {
        type.toLowerCase() === 'textarea' ?
          <textarea 
            name={camelize(label)} 
            onChange={(event) => onChange(event)} 
            value={value} 
          />
        :
          <input 
            type={type} 
            name={camelize(label)} 
            onChange={(event) => onChange(event)} 
            value={value}
          />
      }
      <span className="selector"></span>
      <label>{capitalize(label)}</label>
    </fieldset>
  )
}
