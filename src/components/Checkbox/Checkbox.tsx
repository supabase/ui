import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { CheckboxContext } from './CheckboxContext'
import './Checkbox.css'

interface OnChangeProps {
  name: string
  id: string
  value: boolean
  checked: boolean
}

interface InputProps {
  label: string
  value?: string
  description?: string
  disabled?: boolean
  id?: string
  name?: string
  checked?: boolean
  className?: string
  onChange?(x: OnChangeProps): any
}

interface GroupProps {
  id?: any
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  labelOptional?: any
  name?: any
  value?: any
  className?: string
  children?: React.ReactNode
  options: Array<InputProps>
  defaultValue?: string
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
  name,
  options,
  onChange,
}: GroupProps) {
  const parentCallback = (e: any) => {
    if (onChange) {
      onChange({
        name: e.target.name,
        id: e.target.id,
        value: e.target.value,
        checked: e.target.checked,
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
      <CheckboxContext.Provider value={{ parentCallback, name }}>
        {options
          ? options.map((option: InputProps) => {
              return (
                <Checkbox
                  id={option.id}
                  value={option.value}
                  label={option.label}
                  checked={option.checked}
                  name={option.name}
                  description={option.description}
                />
              )
            })
          : children}
      </CheckboxContext.Provider>
    </FormLayout>
  )
}

export function Checkbox({
  className,
  id,
  label,
  description,
  name,
  checked,
  value,
  onChange,
}: InputProps) {
  const inputName = name

  return (
    <CheckboxContext.Consumer>
      {({ parentCallback, name }) => {
        // if id does not exist, use label
        const markupId = id
          ? id
          : label
              .toLowerCase()
              .replace(/^[^A-Z0-9]+/gi, '')
              .replace(/ /g, '-')

        // if name does not exist on Radio then use Context Name from Radio.Group
        // if that fails, use the id
        const markupName = inputName ? inputName : name ? name : markupId

        // check if checkbox checked is true or false
        // if neither true or false the checkbox will rely on native control
        const active = checked ? true : checked === false ? false : null

        let containerClasses = ['sbui-checkbox-container']
        if (className) {
          containerClasses.push(className)
        }

        function onInputChange(e: any) {
          // '`onChange` callback for parent component
          if (parentCallback) parentCallback(e)
          // '`onChange` callback for this component
          if (onChange)
            onChange({
              name: e.target.name,
              id: e.target.id,
              value: e.target.value,
              checked: e.target.checked,
            })
        }

        return (
          <div className={containerClasses.join(' ')}>
            <input
              id={markupId}
              name={markupName}
              type="checkbox"
              className="sbui-checkbox"
              onChange={onInputChange}
              checked={active}
              value={value ? value : markupId}
            />
            <div className="sbui-checkbox__label-container">
              <label
                className="sbui-checkbox__label-container__label"
                htmlFor={markupId}
              >
                <span className="sbui-checkbox__label-container__label__span">
                  {label}
                </span>
                {description && (
                  <p className="sbui-checkbox__label-container__label__p">
                    {description}
                  </p>
                )}
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
