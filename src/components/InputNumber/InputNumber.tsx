import React from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { Space } from '../../index'
// @ts-ignore
import InputNumberStyles from './InputNumber.module.css'

export interface Props {
  autoComplete?: string
  autofocus?: boolean
  className?: string
  defaultValue?: string | number
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
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void
  onBlur?(x: React.FocusEvent<HTMLInputElement>): void
  onKeyDown?(x: React.KeyboardEvent<HTMLInputElement>): void
  placeholder?: string
  style?: React.CSSProperties
  value?: any
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  min?: number
  max?: number
}

function InputNumber({
  autoComplete,
  autofocus,
  className,
  defaultValue,
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
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  value,
  style,
  size = 'medium',
  min,
  max,
}: Props) {
  let inputClasses = [InputNumberStyles['sbui-inputnumber']]
  if (error) inputClasses.push(InputNumberStyles['sbui-inputnumber--error'])
  if (icon) inputClasses.push(InputNumberStyles['sbui-inputnumber--with-icon'])
  if (size) inputClasses.push(InputNumberStyles[`sbui-inputnumber--${size}`])

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
        size={size}
      >
        <div className={InputNumberStyles['sbui-inputnumber-container']}>
          <input
            autoComplete={autoComplete}
            autoFocus={autofocus}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange ? (event) => onChange(event) : undefined}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur ? (event) => onBlur(event) : undefined}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            placeholder={placeholder}
            ref={inputRef}
            type={'number'}
            value={value}
            className={inputClasses.join(' ')}
            min={min}
            max={max}
          />
          {icon && <InputIconContainer icon={icon} />}
          {error ? (
            <Space
              className={
                InputNumberStyles['sbui-inputnumber-actions-container']
              }
              size={1}
            >
              {error && <InputErrorIcon size={size} />}
            </Space>
          ) : null}
        </div>
      </FormLayout>
    </div>
  )
}

export default InputNumber
