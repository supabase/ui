import React, { Ref, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { Button, Space, Typography, IconCopy } from '../../index'
// @ts-ignore
import InputStyles from './Input.module.css'

export interface Props {
  autoComplete?: string
  autofocus?: boolean
  className?: string
  copy?: boolean
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
  reveal?: boolean
  actions?: React.ReactNode
}

function Input({
  autoComplete,
  autofocus,
  className,
  copy,
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
  reveal = false,
  actions,
}: Props) {
  const [copyLabel, setCopyLabel] = useState('Copy')
  const [hidden, setHidden] = useState(reveal)

  // if `type` is not assigned, default to text input
  if (!type) {
    type = 'text'
  }

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
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        style={style}
      >
        <div className={InputStyles['sbui-input-container']}>
          <input
            autoComplete={autoComplete}
            autoFocus={autofocus}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange ? (event) => onChange(event) : undefined}
            placeholder={placeholder}
            ref={inputRef}
            type={type}
            value={hidden ? hiddenPlaceholder : value}
            className={
              InputStyles['sbui-input'] +
              (error ? ` ${InputStyles['sbui-input--error']}` : '') +
              (icon ? ` ${InputStyles['sbui-input--with-icon']}` : '')
            }
          />
          {icon && <InputIconContainer icon={icon} />}
          {copy || error || actions ? (
            <Space
              className={InputStyles['sbui-input-actions-container']}
              size={1}
            >
              {error && <InputErrorIcon />}
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

  let classes = [InputStyles['sbui-input']]
  if (error) classes.push(InputStyles['sbui-input--error'])
  if (icon) classes.push(InputStyles['sbui-input--with-icon'])

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
