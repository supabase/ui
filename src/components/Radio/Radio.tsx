import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { Space } from '../Space'
// @ts-ignore
import RadioStyles from './Radio.module.css'
import { RadioContext } from './RadioContext'

interface InputProps {
  label: string
  value: string
  description?: string
  disabled?: boolean
  id?: string
  name?: string
  checked?: boolean
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

interface GroupProps {
  allowedValues?: any
  checkboxes?: any
  id?: any
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  labelOptional?: any
  name?: any
  type?: any
  transform?: any
  value?: any
  className?: any
  children?: React.ReactNode
  options: Array<InputProps>
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

function RadioGroup({
  id,
  layout,
  error,
  descriptionText,
  label,
  labelOptional,
  children,
  className,
  type,
  options,
  value,
  name,
  onChange,
  size = 'medium',
}: GroupProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    setActiveId(value)
  }, [value])

  const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e)
    setActiveId(e.target.id)
  }

  let classes = [RadioStyles['sbui-radio-fieldset']]

  if (type === 'cards') {
    classes.push(RadioStyles['sbui-radio-fieldset--cards'])
  }

  return (
    <RadioContext.Provider
      value={{ parentCallback, type, name, activeId, parentSize: size }}
    >
      <fieldset className={RadioStyles['sbui-radio-fieldset']}>
        <FormLayout
          label={label}
          labelOptional={labelOptional}
          layout={layout}
          id={id}
          error={error}
          descriptionText={descriptionText}
          className={className}
          size={size}
        >
          <div className={RadioStyles['sbui-radio-group-contents']}>
            <Space direction="vertical" size="px" minus>
              {options
                ? options.map((option: InputProps) => {
                    return (
                      <Radio
                        id={option.id}
                        label={option.label}
                        value={option.value}
                        description={option.description}
                      />
                    )
                  })
                : children}
            </Space>
          </div>
        </FormLayout>
      </fieldset>
    </RadioContext.Provider>
  )
}

function Radio({
  id,
  disabled,
  value,
  label,
  description,
  name,
  checked,
  onChange,
  size = 'medium',
}: InputProps) {
  const inputName = name
  return (
    <RadioContext.Consumer>
      {({ parentCallback, type, name, activeId, parentSize }) => {
        // if id does not exist, use label
        const markupId = id
          ? id
          : label
              .toLowerCase()
              .toLowerCase()
              .replace(/^[^A-Z0-9]+/gi, '')
              .replace(/ /g, '-')

        // if name does not exist on Radio then use Context Name from Radio.Group
        const markupName = inputName ? inputName : name ? name : markupId

        // check if radio id is via parent component
        // then check if radio checked prop is true or false
        // if no boolean exists the checkbox will rely on native control
        const active =
          activeId === markupId
            ? true
            : checked
            ? true
            : checked === false
            ? false
            : null

        let classes = [
          RadioStyles['sbui-radio-container'],
          RadioStyles['sbui-radio-label'],
          RadioStyles[
            `sbui-radio-container--${parentSize ? parentSize : size}`
          ],
        ]
        if (type === 'cards') {
          classes.push(RadioStyles['sbui-radio-container--card'])
        }
        if (type === 'cards' && active) {
          classes.push(RadioStyles['sbui-radio-container--card--active'])
        }

        function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
          // '`onChange` callback for parent component
          if (parentCallback) parentCallback(e)
          // '`onChange` callback for this component
          if (onChange) onChange(e)
        }

        return (
          <label id={id} className={classes.join(' ')}>
            <input
              id={markupId}
              name={markupName}
              type="radio"
              className={RadioStyles['sbui-radio']}
              checked={active}
              disabled={disabled}
              value={value ? value : markupId}
              onChange={onInputChange}
            />
            <div>
              <span className={RadioStyles['sbui-radio-label-text']}>
                {label}
              </span>
              {description && (
                <span className={RadioStyles['sbui-radio-label-description']}>
                  {description}
                </span>
              )}
            </div>
          </label>
        )
      }}
    </RadioContext.Consumer>
  )
}

Radio.Group = RadioGroup

export default Radio
