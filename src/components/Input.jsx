import React from 'react'

const Input = (props) => {
  return (
    <div className="input">
        <div className="input__label">{props.label}</div>
        <input 
          placeholder={props.name}
          className="input__area" 
          type={props.type} 
          name={props.name} 
          maxLength={props.maxLength ?? 25}
          onChange={(e) => {props.setForm({...props.form, [e.target.name]: e.target.value})}}
        />
    </div>
  )
}

export default Input