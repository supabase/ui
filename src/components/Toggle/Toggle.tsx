import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import './Toggle.css'

interface Props {
  disabled?: any
  id?: any
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  labelOptional?: any
  name?: any
  onChange?: any
  type?: any
  value?: any
  className?: any
  options?: any
  active?: any
  defaultChecked?: boolean
  checked?: boolean
}

function Toggle({
  disabled,
  id,
  layout,
  error,
  descriptionText,
  label,
  labelOptional,
  name,
  onChange,
  defaultChecked,
  checked,
  type,
  value,
  className,
}: Props) {
  const [active, setActive] = useState(defaultChecked || checked)

  let toggleClasses = ['sbui-toggle']
  if (active) {
    toggleClasses.push('sbui-toggle--active')
  }

  let handleClasses = ['sbui-toggle__handle']
  if (active) {
    handleClasses.push('sbui-toggle__handle--active')
  }

  function onClick(e: React.MouseEvent<HTMLElement>) {
    // '`onChange` callback for this component
    if (onChange) onChange(e)
    setActive(!active)
  }

  return (
    <FormLayout
      className={className}
      // align={'right'}
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      responsive={false}
      id={id}
      error={error}
      descriptionText={descriptionText}
    >
      <button
        type="button"
        aria-pressed="false"
        className={toggleClasses.join(' ')}
        onClick={onClick}
      >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
    </FormLayout>
  )
}

export default Toggle
