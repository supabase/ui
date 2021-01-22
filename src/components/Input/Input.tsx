import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { useFormContext } from '../Form/FormContext'
import Typography from '../Typography'
import './Input.css'

export interface Props {
  autoComplete?: string
  autofocus?: boolean
  className?: string
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
  style?: React.CSSProperties
  type?:
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
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  value?: any
}

function Input({
  autoComplete,
  autofocus,
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
  style,
}: Props) {
  // if `type` is not assigned, default to text input
  if (!type) {
    type = 'text'
  }

  const { formContextOnChange } = useFormContext()

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(e)
    if (formContextOnChange) formContextOnChange(e)
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
            autoComplete={autoComplete}
            autoFocus={autofocus}
            disabled={disabled}
            id={id}
            name={name}
            onChange={(e) => onInputChange(e)}
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
  className?: string
  autoComplete?: boolean
  autofocus?: boolean
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?(x: React.ChangeEvent<HTMLTextAreaElement>): void
  placeholder?: string
  value?: any
  style?: React.CSSProperties
  rows?: number
  limit?: number
}

function TextArea({
  autoComplete,
  autofocus,
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
  limit,
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)

  let classes = ['sbui-input']
  if (error) classes.push('sbui-input--error')
  if (icon) classes.push('sbui-input--with-icon')

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (onChange) {
      onChange(e)
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
        autoFocus={autofocus}
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
        <Typography.Text
          type="secondary"
          style={{ marginTop: '0.5rem', display: 'block' }}
        >
          {charLength}/{limit}
        </Typography.Text>
      )}
    </FormLayout>
  )
}

Input.TextArea = TextArea

export default Input
