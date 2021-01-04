import React, { Ref, useState } from 'react'
import { FormLayout } from '../../lib/Layout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import Typography from '../Typography'
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
  style?: React.CSSProperties
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
  style
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
        style={style}
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

export interface TextAreaProps {
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
  style?: React.CSSProperties
  rows?: number
  limit?: number
}

function TextArea({
  autoComplete,
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  placeholder,
  value,
  style,
  rows = 4,
  limit
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)

  let classes = ['sbui-input']
  if (error) classes.push('sbui-input--error')
  if (icon) classes.push('sbui-input--with-icon')

  function onInputChange(e: any) {
    if(onChange) {
      onChange(e.target.value)
      setCharLength(e.target.value.length)
    }
  }

  return (
    <FormLayout
      className={className}
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      style={style}
    >
      <textarea
        autoComplete={autoComplete && 'autoComplete'}
        disabled={disabled}
        id={id}
        name={name}
        rows={rows}
        cols={100}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        className={classes.join(' ')}
        maxLength={limit}
      >
        {value}
      </textarea>
      {limit && (
        <Typography.Text style={{marginTop:'0.5rem', display: 'block'}}>{charLength}/{limit}</Typography.Text>
      )}
    </FormLayout>
  )
}

Input.TextArea = TextArea

export default Input
