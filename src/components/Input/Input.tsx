import React, { Ref } from 'react'
import { FormLayout } from '../../lib/Layout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import './Input.css'

export interface Props {
  type:
    | 'text'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
  text: string
  url?: string
  className?: string
  autoComplete?: boolean
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  id?: string
  inputRef?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?: any
  placeholder?: string
  value?: any
}

function Input({
  autoComplete,
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  inputRef,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  placeholder,
  type,
  value,
}: Props) {
  // if `type` is not assigned, default to text input
  if (!type) {
    type = 'text'
  }

  return (
    <div className={className}>
      <FormLayout
        label={label}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
      >
        <div className="sbui-input-container">
          <input
            autoComplete={autoComplete && 'autoComplete'}
            disabled={disabled}
            id={id}
            name={name}
            onChange={
              onChange ? (event) => onChange(event.target.value) : undefined
            }
            placeholder={placeholder}
            ref={inputRef}
            type={type}
            value={value}
            className={
              'sbui-input' +
              (error ? ' sbui-input--error' : '') +
              (icon ? ' sbui-input--with-icon' : '')
            }
          />
          {icon && <InputIconContainer icon={icon} />}
          {error && <InputErrorIcon />}
        </div>
      </FormLayout>
    </div>
  )
}

export default Input
