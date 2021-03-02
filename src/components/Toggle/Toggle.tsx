import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { Space } from '../Space'
// @ts-ignore
import ToggleStyles from './Toggle.module.css'

interface Props {
  disabled?: boolean
  id?: string
  layout?: 'horizontal' | 'vertical'
  error?: string
  descriptionText?: string
  label?: string
  labelOptional?: string
  onChange?(x: boolean): void
  className?: any
  defaultChecked?: boolean
  checked?: boolean
  align?: 'right' | 'left'
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

function Toggle({
  disabled,
  id,
  layout = 'vertical',
  error,
  descriptionText,
  label,
  labelOptional,
  onChange,
  defaultChecked,
  checked,
  className,
  align = 'right',
  size = 'medium',
}: Props) {
  const [intChecked, setIntChecked] = useState(defaultChecked || checked)

  // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally
  const active = checked ? true : checked === false ? false : intChecked

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    // '`onChange` callback for this component
    if (onChange) onChange(active)
    setIntChecked(!intChecked)
  }

  let toggleClasses = [
    ToggleStyles['sbui-toggle'],
    ToggleStyles[`sbui-toggle--${size}`],
  ]
  if (active) toggleClasses.push(ToggleStyles['sbui-toggle--active'])

  let handleClasses = [ToggleStyles['sbui-toggle__handle']]
  if (active) handleClasses.push(ToggleStyles['sbui-toggle__handle--active'])

  return (
    <FormLayout
      className={className}
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      align={layout === 'vertical' && align}
      flex={layout === 'vertical' ? true : false}
      descriptionText={descriptionText}
      size={size}
    >
      <button
        type="button"
        aria-pressed="false"
        className={toggleClasses.join(' ')}
        onClick={onClick}
        disabled={disabled}
      >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
    </FormLayout>
  )
}

export default Toggle
