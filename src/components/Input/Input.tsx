import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { Button, Space, Typography, IconCopy } from '../../index'
// @ts-ignore
import InputStyles from './Input.module.css'

import { useFormContext } from '../Form/FormContext'

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
  id = '',
  name = '',
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
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

  if (values && !value) value = values[id || name]
  if (errors && !error) error = errors[id || name]
  if (handleBlur) onBlur = handleBlur
  error = error || (touched && touched[id]) ? error : undefined

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log('input event', e)
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) formContextOnChange(e)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
  }

  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])

  // useEffect(() => {
  //   error = touched && touched[id] ? error : undefined
  // }, [errors, touched])

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

export interface TextAreaProps
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  descriptionText?: string
  error?: string
  icon?: any
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  rows?: number
  limit?: number
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  validation?: (x: any) => void
  copy?: boolean
  actions?: React.ReactNode
}

function TextArea({
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id = '',
  name = '',
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
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
  validation,
  copy = false,
  actions,
  ...props
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)
  const [copyLabel, setCopyLabel] = useState('Copy')

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

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !value) value = values[id || name]
  if (errors && !error) error = errors[id || name]
  if (handleBlur) onBlur = handleBlur
  error = error || (touched && touched[id]) ? error : undefined

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharLength(e.target.value.length)
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) formContextOnChange(e)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
  }

  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])

  let classes = [InputStyles['sbui-input']]
  if (error) classes.push(InputStyles['sbui-input--error'])
  if (icon) classes.push(InputStyles['sbui-input--with-icon'])
  if (size) classes.push(InputStyles[`sbui-input--${size}`])
  if (borderless) classes.push(InputStyles['sbui-input--borderless'])

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
      <div className={InputStyles['sbui-input-container']}>
        <textarea
          disabled={disabled}
          id={id}
          name={name}
          rows={rows}
          cols={100}
          placeholder={placeholder}
          onChange={onInputChange}
          onFocus={onFocus ? (event) => onFocus(event) : undefined}
          onBlur={onBlur}
          onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
          value={value}
          className={classes.join(' ')}
          maxLength={limit}
          {...props}
        >
          {value}
        </textarea>
        {copy || error || actions ? (
          <div className={InputStyles['sbui-textarea-actions-container']}>
            <Space
              className={InputStyles['sbui-textarea-actions-container__items']}
              size={1}
            >
              {error && <InputErrorIcon size={size} />}
              {copy && (
                <Button
                  size="tiny"
                  type="default"
                  onClick={() => onCopy(value)}
                  icon={<IconCopy />}
                >
                  {copyLabel}
                </Button>
              )}
              {actions && actions}
            </Space>
          </div>
        ) : null}
      </div>
    </FormLayout>
  )
}

Input.TextArea = TextArea

export default Input
