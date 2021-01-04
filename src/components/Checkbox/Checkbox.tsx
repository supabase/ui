import React from 'react'
import PropTypes from 'prop-types'
import { FormLayout } from '../../lib/Layout'
import { CheckboxContext } from './CheckboxContext'
import './Checkbox.css'

interface OnChangeProps {
  name: string
  id: string
}

interface InputProps {
  label: string
  value: string
  description?: string
  disabled?: boolean
  id?: string
  name?: string
  onChange?(x: OnChangeProps): any
}

interface Props {
  className?: string
  name: string
  id?: string
  label?: string
  description?: string
  onChange?(x: OnChangeProps): any
}

interface GroupProps {
  allowedValues?: any
  checkboxes?: any
  id?: any
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  labelOptional?: any
  name?: any
  type?: any
  transform?: any
  value?: any
  className?: any
  children?: React.ReactNode
  options: Array<InputProps>
  onChange(x: OnChangeProps): any
}

function Group({
  id,
  layout = 'vertical',
  error,
  descriptionText,
  label,
  labelOptional,
  children,
  className,
  options,
  onChange,
}: GroupProps) {
  
  const parentCallback = (e: any) => {
    if (onChange) {
      onChange({
        name: e.target.name,
        id: e.target.id,
      })
    }
  }

  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
    >
      <CheckboxContext.Provider value={{ parentCallback }}>
        {children}
      </CheckboxContext.Provider>
    </FormLayout>
  )
}

export function Checkbox({ className, id, label, description, name, onChange }: Props) {
  let containerClasses = ['sbui-checkbox-container']
  if (className) {
    containerClasses.push(className)
  }

  return (
    <CheckboxContext.Consumer>
      {({ parentCallback }) => {
         
         function onInputChange(e :any) {
          // '`onChange` callback for parent component
          if(parentCallback)
          parentCallback(e)
          // '`onChange` callback for this component
          if(onChange)
          onChange({
            name: e.target.name,
            id: e.target.id,
          })
        }
        return (
        <div className={containerClasses.join(' ')}>
          <input
            id={id}
            name={id}
            type="checkbox"
            className="sbui-checkbox"
            onChange={onInputChange}
          />
          <div className="sbui-checkbox__label-container">
            <label
              className="sbui-checkbox__label-container__label"
              htmlFor={id}
            >
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
      }}
    </CheckboxContext.Consumer>
  )
}

Checkbox.Group = Group
export default Checkbox
