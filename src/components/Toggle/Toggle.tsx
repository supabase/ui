import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { useFormContext } from '../Form/FormContext'

import defaultTheme from '../../lib/theme/defaultTheme'

interface Props extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'size'> {
  name?: string
  disabled?: boolean
  layout?: 'horizontal' | 'vertical'
  error?: string
  descriptionText?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  className?: any
  defaultChecked?: boolean
  checked?: boolean
  align?: 'right' | 'left'
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  validation?: (x: any) => void
}

function Toggle({
  disabled,
  id = '',
  name = '',
  layout = 'vertical',
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  defaultChecked,
  checked,
  className,
  align = 'right',
  size = 'medium',
  validation,
  ...props
}: Props) {
  const [intChecked, setIntChecked] = useState(
    (defaultChecked || checked) ?? false
  )

  const __styles = defaultTheme.toggle

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  // if (values && !value) value = values[id || name]
  if (errors && !error) error = errors[id || name]
  if (handleBlur) onBlur = handleBlur
  error = touched && touched[id] ? error : undefined

  // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally
  const active = checked ?? intChecked

  function onClick() {
    // '`onChange` callback for this component

    // @ts-ignore // issue with conflicting input/button tag being used
    if (onChange) onChange(!active)

    setIntChecked(!intChecked)

    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event: any = {}
    event.target = {
      type: 'checkbox',
      name: name,
      id: id,
      value: !intChecked,
      checked: !intChecked,
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    }

    // update form
    if (formContextOnChange) formContextOnChange(event)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(!intChecked))
  }

  let toggleClasses = [__styles.base, __styles.handle_container[size]]
  if (active) toggleClasses.push(__styles.active)

  let handleClasses = [__styles.handle['base'], __styles.handle[size]]
  if (active) handleClasses.push(__styles.handle_active[size])

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
      align={layout === 'vertical' ? align : undefined}
      flex={layout === 'vertical' ? true : false}
      descriptionText={descriptionText}
      size={size}
    >
      <button
        type="button"
        id={id}
        name={name}
        className={toggleClasses.join(' ')}
        onClick={onClick}
        disabled={disabled}
        onFocus={onFocus ? (event) => onFocus(event) : undefined}
        onBlur={onBlur}
        onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
        {...props}
      >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
    </FormLayout>
  )
}

export default Toggle
