import React, { useEffect } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
// import { IconChevronDown } from '../Icon/icons/IconChevronDown'
// import { IconChevronUp } from '../Icon/icons/IconChevronUp'
import InputIconContainer from '../../lib/Layout/InputIconContainer'

import defaultTheme from '../../lib/theme/defaultTheme'

// @ts-ignore
// import InputNumberStyles from './InputNumber.module.css'
import InputNumberStyles from './InputNumber.module.css'
import { useFormContext } from '../Form/FormContext'
import styleHandler from '../../lib/theme/styleHandler'

export interface Props {
  autoComplete?: string
  autofocus?: boolean
  className?: string
  defaultValue?: string | number
  descriptionText?: string
  disabled?: boolean
  error?: string
  hideErrorIcon?: boolean
  icon?: any
  id?: string
  inputRef?: React.RefObject<HTMLInputElement>
  label?: string
  afterLabel?: string
  beforeLabel?: string
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
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  min?: number
  max?: number
  borderless?: boolean
  validation?: (x: any) => void
}

function InputNumber({
  autoComplete,
  autofocus,
  className,
  defaultValue,
  descriptionText,
  disabled,
  error,
  hideErrorIcon = false,
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
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  value = undefined,
  style,
  size = 'medium',
  min,
  max,
  borderless = false,
  validation,
}: Props) {
  const __styles = styleHandler('inputNumber')

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !value) value = values[id]
  if (handleBlur) onBlur = handleBlur

  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }

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

  // const inputClasses = [InputNumberStyles['sbui-inputnumber']]
  let inputClasses = [__styles.base]

  // const iconUpClasses = [
  //   InputNumberStyles['sbui-inputnumber-button'],
  //   InputNumberStyles['sbui-inputnumber-button-up'],
  // ]

  // const inputRefCurrent = inputRef
  //   ? inputRef
  //   : React.createRef<HTMLInputElement>()

  // const iconDownClasses = [
  //   InputNumberStyles['sbui-inputnumber-button'],
  //   InputNumberStyles['sbui-inputnumber-button-down'],
  // ]

  // const iconNavClasses = [InputNumberStyles['sbui-inputnumber-nav']]

  if (size) {
    // inputClasses.push(InputNumberStyles[`sbui-inputnumber--${size}`])
    // iconNavClasses.push(InputNumberStyles[`sbui-inputnumber-nav--${size}`])
  }

  if (error) inputClasses.push(__styles.variants.error)
  if (!error) inputClasses.push(__styles.variants.standard)
  if (icon) inputClasses.push(__styles.with_icon)
  if (size) inputClasses.push(__styles.size[size])
  if (disabled) inputClasses.push(__styles.disabled)
  // if (borderless)
  //   inputClasses.push(InputNumberStyles['sbui-inputnumber--borderless'])

  // const onClickChevronUp = () => {
  //   inputRefCurrent.current?.stepUp()
  //   if (onChange) {
  //     inputRefCurrent.current?.dispatchEvent(
  //       new InputEvent('change', {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       })
  //     )
  //   }
  // }

  // const onClickChevronDown = () => {
  //   inputRefCurrent.current?.stepDown()
  //   if (onChange) {
  //     inputRefCurrent.current?.dispatchEvent(
  //       new InputEvent('change', {
  //         view: window,
  //         bubbles: true,
  //         cancelable: false,
  //       })
  //     )
  //   }
  // }

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
        hideErrorIcon={hideErrorIcon}
        descriptionText={descriptionText}
        style={style}
        size={size}
      >
        <div className={__styles.container}>
          <input
            autoComplete={autoComplete}
            autoFocus={autofocus}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onInputChange}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            placeholder={placeholder}
            // ref={inputRefCurrent}
            type={'number'}
            value={value}
            className={inputClasses.join(' ')}
            min={min}
            max={max}
          />
          {/* <div className={iconNavClasses.join(' ')}>
            <IconChevronUp
              className={iconUpClasses.join(' ')}
              onClick={onClickChevronUp}
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            />
            <IconChevronDown
              className={iconDownClasses.join(' ')}
              onClick={onClickChevronDown}
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            />
          </div> */}
          {icon && <InputIconContainer icon={icon} />}
          {error ? (
            <div className={__styles.actions_container}>
              {error && !hideErrorIcon && <InputErrorIcon size={size} />}
            </div>
          ) : null}
        </div>
      </FormLayout>
    </div>
  )
}

export default InputNumber
