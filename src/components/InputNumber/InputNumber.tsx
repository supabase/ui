import React, { useState, useEffect } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { IconChevronDown } from '../Icon/icons/IconChevronDown'
import { IconChevronUp } from '../Icon/icons/IconChevronUp'
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
  inputRef?: React.RefObject<HTMLInputElement>
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
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const inputClasses = [InputNumberStyles['sbui-inputnumber']]
  const iconUpClasses = [
    InputNumberStyles['sbui-inputnumber-button'],
    InputNumberStyles['sbui-inputnumber-button-up'],
  ]
  const inputRefCurrent = inputRef
    ? inputRef
    : React.createRef<HTMLInputElement>()
  const iconDownClasses = [
    InputNumberStyles['sbui-inputnumber-button'],
    InputNumberStyles['sbui-inputnumber-button-down'],
  ]
  const iconNavClasses = [InputNumberStyles['sbui-inputnumber-nav']]
  if (error) inputClasses.push(InputNumberStyles['sbui-inputnumber--error'])
  if (icon) inputClasses.push(InputNumberStyles['sbui-inputnumber--with-icon'])
  if (size) {
    inputClasses.push(InputNumberStyles[`sbui-inputnumber--${size}`])
    iconNavClasses.push(InputNumberStyles[`sbui-inputnumber-nav--${size}`])
  }

  const onClickChevronUp = () => {
    inputRefCurrent.current?.stepUp()
  }

  const onClickChevronDown = () => {
    inputRefCurrent.current?.stepDown()
  }

  useEffect(() => {
    if (
      document.hasFocus() &&
      inputRefCurrent.current.contains(document.activeElement)
    ) {
      setIsFocused(true)
    }
  }, [])

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
            onFocus={
              onFocus
                ? (event) => {
                    setIsFocused(true)
                    onFocus(event)
                  }
                : undefined
            }
            onBlur={
              onBlur
                ? (event) => {
                    setIsFocused(false)
                    onBlur(event)
                  }
                : undefined
            }
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            placeholder={placeholder}
            ref={inputRefCurrent}
            type={'number'}
            value={value}
            className={inputClasses.join(' ')}
            min={min}
            max={max}
          />
          {isFocused ? (
            <div className={iconNavClasses.join(' ')}>
              <IconChevronUp
                className={iconUpClasses.join(' ')}
                onClick={onClickChevronUp}
              />
              <IconChevronDown
                className={iconDownClasses.join(' ')}
                onClick={onClickChevronDown}
              />
            </div>
          ) : null}
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
