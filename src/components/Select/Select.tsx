// @ts-ignore
import React, { Ref, useEffect } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import { Space } from '../../index'
// @ts-ignore
import SelectStyles from './Select.module.css'
import { Icon } from '../Icon'
import { useFormContext } from '../Form/FormContext'

import { validator } from './../../lib/Form/Form.utils'

interface OptionProps {
  value: string
  children: React.ReactNode
  selected?: boolean
}

interface OptGroupProps {
  label: string
  children: React.ReactNode
}

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  autofocus?: boolean
  children: React.ReactNode
  descriptionText?: string
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

export const ColLayout = (props: any) => (
  <div className="">{props.children}</div>
)

function Select({
  autoComplete,
  autofocus,
  children,
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id = '',
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name = '',
  onChange,
  onFocus,
  onBlur,
  placeholder,
  required,
  value = undefined,
  defaultValue = undefined,
  style,
  size = 'medium',
  borderless = false,
  validation,
  ...props
}: Props) {
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

  function onInputChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (onChange) onChange(e)
    // update form
    if (formContextOnChange) formContextOnChange(e)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
  }

  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])

  let selectClasses = [SelectStyles['sbui-select']]
  if (error) selectClasses.push(SelectStyles['sbui-select--error'])
  if (icon) selectClasses.push(SelectStyles['sbui-select--with-icon'])
  if (size) selectClasses.push(SelectStyles[`sbui-select--${size}`])
  if (borderless) selectClasses.push(SelectStyles[`sbui-select--borderless`])

  return (
    <FormLayout
      label={label}
      afterLabel={afterLabel}
      beforeLabel={beforeLabel}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
      style={style}
      size={size}
    >
      <div className={SelectStyles['sbui-select-container']}>
        <select
          id={id}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autofocus}
          className={selectClasses.join(' ')}
          onChange={onInputChange}
          onFocus={onFocus ? (event) => onFocus(event) : undefined}
          onBlur={onBlur}
          ref={inputRef}
          value={value}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          {...props}
        >
          {children}
        </select>
        {icon && <InputIconContainer icon={icon} />}
        {error && (
          <div className="sbui-select-actions-container">
            {error && <InputErrorIcon size={size} />}
          </div>
        )}
        <span className={SelectStyles['sbui-select-chevron-container']}>
          <svg
            className={SelectStyles['sbui-select-chevron']}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </FormLayout>
  )
}

export function Option({ value, children, selected }: OptionProps) {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}

export function OptGroup({ label, children }: OptGroupProps) {
  return <optgroup label={label}>{children}</optgroup>
}

Select.Option = Option
Select.OptGroup = OptGroup

export default Select
