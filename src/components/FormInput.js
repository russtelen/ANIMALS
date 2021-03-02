import React from 'react'
import { camelize, capitalize } from '../utility'

export default function FormInput({label, type, onChange, value}) {
  return (
    <fieldset>
      <label>{capitalize(label)}</label>
      {
        type.toLowerCase() === 'textarea' ?
          <textarea 
            placeholder={capitalize(label)} 
            name={camelize(label)} 
            onChange={(event) => onChange(event)} 
            value={value} 
          />
        :
          <input 
            type={type} 
            placeholder={capitalize(label)} 
            name={camelize(label)} 
            onChange={(event) => onChange(event)} 
            value={value}
          />
      }
    </fieldset>
  )
}
