import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout'
import './Radio.css'
import { RadioContext } from './RadioContext'

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
  options: Array<InputProps>;
  onChange(x: OnChangeProps): any
}

function RadioGroup({
  id,
  layout,
  error,
  descriptionText,
  label,
  labelOptional,
  children,
  className,
  type,
  options,
  value,
  name,
  onChange,
}: GroupProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    setActiveId(value)
  }, [value])

  const onToggle = (e: any) => {
    if (onChange) {
      onChange({
        name: e.target.name,
        id: e.target.id,
      })
    }
    setActiveId(e.target.id)
  }

  let classes = ['sbui-radio-fieldset']

  if (type === 'cards') {
    classes.push('sbui-radio-fieldset--cards')
  }

  return (
    <RadioContext.Provider value={{ onToggle, type, name, activeId }}>
      <fieldset className="sbui-radio-fieldset">
        <FormLayout
          label={label}
          labelOptional={labelOptional}
          layout={layout}
          id={id}
          error={error}
          descriptionText={descriptionText}
          className={className}
        >
          <div className="bg-white dark:bg-transparent rounded-md -space-y-px">
            {options ? options.map((option: InputProps) => {
              return (
                <Radio id={option.id} label={option.label} value={option.value} description={option.description}/>
              )
            }) : children}
          </div>
        </FormLayout>
      </fieldset>
    </RadioContext.Provider>
  )
}

function Radio({ id, disabled, value, label, description, name, onChange }: InputProps) {

  const inputName = name
  return (
    <RadioContext.Consumer>
      {({ onToggle, type, name, activeId }) => {

        // if id does not exist, use label
        const markupId = id ? id : label.toLowerCase().replace(/^[^A-Z0-9]+/gi,"")

        // if name does not exist on Radio then use Context Name from Radio.Group
        const MarkupName = inputName ? inputName : name

        // check if radio is active
        const active = activeId === markupId ? true : false

        let classes = ['sbui-radio-container sbui-radio-label']
        if (type === 'cards') {
          classes.push('sbui-radio-container--card')
        }
        if (type === 'cards' && active) {
          classes.push('sbui-radio-container--card--active')
        }

        return (
          <label id={id} className={classes.join(' ')}>
            <input
              id={markupId}
              name={MarkupName}
              type="radio"
              className="sbui-radio"
              checked={active}
              disabled={disabled}
              value={value}
              onChange={onToggle}
            />
            <div>
              <span className="sbui-radio-label-text">{label}</span>
              {description && (
                <span className="sbui-radio-label-description">
                  {description}
                </span>
              )}
            </div>
          </label>
        )
      }}
    </RadioContext.Consumer>
  )
}

Radio.Group = RadioGroup

export default Radio
