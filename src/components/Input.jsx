import React from 'react'

const Input = (props) => {
  return (
    <div className="input">
        <div className="input__label">{props.label}</div>
        <input className="input__area" type={props.type} name={props.name} onChange={(e) => {}}/>
    </div>
  )
}

export default Input