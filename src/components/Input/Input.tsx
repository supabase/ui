import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { Button, Space, Typography, IconCopy } from '../../index'
// @ts-ignore
import InputStyles from './Input.module.css'

import { useFormContext } from '../Form/FormContext'
import { ValueFunction } from 'react-hot-toast/dist/core/types'
export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  copy?: boolean
  defaultValue?: string | number
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  inputRef?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  validation?: (x: any) => void
}

function Input({
  autoComplete,
  autoFocus,
  className,
  copy,
  defaultValue,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  type = 'text',
  value = undefined,
  style,
  reveal = false,
  actions,
  size = 'medium',
  borderless = false,
  validation,
  ...props
}: Props) {
  const [copyLabel, setCopyLabel] = useState('Copy')
  const [hidden, setHidden] = useState(reveal)

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !value) value = values[id]
  if (errors && !error) error = errors[id]
  if (handleBlur) onBlur = handleBlur
  error = touched && touched[id] ? error : undefined

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) formContextOnChange(e)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
  }

  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])

  let inputClasses = [InputStyles['sbui-input']]
  if (error) inputClasses.push(InputStyles['sbui-input--error'])
  if (icon) inputClasses.push(InputStyles['sbui-input--with-icon'])
  if (size) inputClasses.push(InputStyles[`sbui-input--${size}`])
  if (borderless) inputClasses.push(InputStyles['sbui-input--borderless'])

  function onCopy(value: any) {
    navigator.clipboard.writeText(value).then(
      function () {
        /* clipboard successfully set */
        setCopyLabel('Copied')
        setTimeout(function () {
          setCopyLabel('Copy')
        }, 3000)
      },
      function () {
        /* clipboard write failed */
        setCopyLabel('Failed to copy')
      }
    )
  }

  function onReveal() {
    setHidden(false)
  }

  const hiddenPlaceholder = '**** **** **** ****'

  return (
    <div className={className}>
      <FormLayout
        label={label}
        afterLabel={afterLabel}
        beforeLabel={beforeLabel}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        style={style}
        size={size}
      >
        <div className={InputStyles['sbui-input-container']}>
          <input
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onInputChange}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            placeholder={placeholder}
            ref={inputRef}
            type={type}
            value={hidden ? hiddenPlaceholder : value}
            className={inputClasses.join(' ')}
            {...props}
          />
          {icon && <InputIconContainer icon={icon} />}
          {copy || error || actions ? (
            <Space
              className={InputStyles['sbui-input-actions-container']}
              size={1}
            >
              {error && <InputErrorIcon size={size} />}
              {copy && !hidden ? (
                <Button
                  size="tiny"
                  type="default"
                  onClick={() => onCopy(value)}
                  icon={<IconCopy />}
                >
                  {copyLabel}
                </Button>
              ) : null}
              {hidden && reveal ? (
                <Button size="tiny" type="default" onClick={onReveal}>
                  Reveal
                </Button>
              ) : null}
              {actions && actions}
            </Space>
          ) : null}
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
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?(x: React.ChangeEvent<HTMLTextAreaElement>): void
  onFocus?(x: React.FocusEvent<HTMLTextAreaElement>): void
  onBlur?(x: React.FocusEvent<HTMLTextAreaElement>): void
  onKeyDown?(x: React.KeyboardEvent<HTMLTextAreaElement>): void
  placeholder?: string
  value?: any
  style?: React.CSSProperties
  rows?: number
  limit?: number
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
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
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  placeholder,
  value,
  style,
  rows = 4,
  limit,
  size,
  borderless = false,
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)

  let classes = [InputStyles['sbui-input']]
  if (error) classes.push(InputStyles['sbui-input--error'])
  if (icon) classes.push(InputStyles['sbui-input--with-icon'])
  if (size) classes.push(InputStyles[`sbui-input--${size}`])
  if (borderless) classes.push(InputStyles['sbui-input--borderless'])

  const { formContextOnChange } = useFormContext()

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharLength(e.target.value.length)
    if (onChange) {
      onChange(e)
    }
    if (formContextOnChange) formContextOnChange(e)
  }

  return (
    <FormLayout
      className={className}
      label={label}
      afterLabel={afterLabel}
      beforeLabel={beforeLabel}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      style={style}
      size={size}
    >
      <textarea
        autoComplete={autoComplete ? 'on' : 'off'}
        autoFocus={autofocus}
        disabled={disabled}
        id={id}
        name={name}
        rows={rows}
        cols={100}
        placeholder={placeholder}
        onChange={onInputChange}
        onFocus={onFocus ? (event) => onFocus(event) : undefined}
        onBlur={onBlur ? (event) => onBlur(event) : undefined}
        onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
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
