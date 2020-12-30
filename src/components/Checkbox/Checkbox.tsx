import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

interface Props {
  className?: string
  name: string
  id?: string
  label?: string
  description?: string
}

export function Checkbox({ className, id, label, description, name }: Props) {
  let containerClasses = ['sbui-checkbox-container']
  if (className) {
    containerClasses.push(className)
  }

  return (
    <div className={containerClasses.join(' ')}>
      <input id={id} name={id} type="checkbox" className="sbui-checkbox" />
      <div className="sbui-checkbox__label-container">
        <label className="sbui-checkbox__label-container__label" htmlFor={id}>
          <span className="sbui-checkbox__label-container__label__span">
            {label}
          </span>
          <p className="sbui-checkbox__label-container__label__p">
            {description}
          </p>
        </label>
      </div>
    </div>
  )
}

export default Checkbox
