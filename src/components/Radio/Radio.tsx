import React, { useEffect, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import { useFormContext } from '../Form/FormContext'
import { Space } from '../Space'
// @ts-ignore
import RadioStyles from './Radio.module.css'
import { RadioContext } from './RadioContext'

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  afterLabel?: string
  beforeLabel?: string
  description?: string
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
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: any
  name?: any
  type?: any
  transform?: any
  value?: any
  className?: any
  children?: React.ReactNode
  options?: Array<InputProps>
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  validation?: (x: any) => void
}

function RadioGroup({
  id,
  layout,
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  children,
  className,
  type,
  options,
  value,
  name,
  onChange,
  size = 'medium',
  validation,
}: GroupProps) {
  const [activeId, setActiveId] = useState('')

  const {
    formContextOnChange,
    values,
    errors,
    // handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !value) value = values[id || name]
  // console.log('errors in. radio group', errors)
  // console.log('values in radio group', values)
  // if (handleBlur) onBlur = handleBlur

  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }

  useEffect(() => {
    if (validation) fieldLevelValidation(id, validation(value))
  }, [])

  useEffect(() => {
    setActiveId(value)
  }, [value])

  const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e)
    // update form
    // console.log('event in group', e)
    if (formContextOnChange) {
      formContextOnChange(e)
    }
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(e.target.value))
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
      <fieldset className={RadioStyles['sbui-radio-fieldset']} name={name}>
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
                        beforeLabel={option.beforeLabel}
                        afterLabel={option.afterLabel}
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
  afterLabel,
  beforeLabel,
  description,
  name,
  checked,
  onChange,
  onFocus,
  onBlur,
  size = 'medium',
}: InputProps) {
  const inputName = name

  const { handleBlur } = useFormContext()
  if (handleBlur) onBlur = handleBlur

  return (
    <RadioContext.Consumer>
      {({ parentCallback, type, name, activeId, parentSize }) => {
        // if id does not exist, use label
        // console.log('Consumer name', name)
        const markupId = id
          ? id
          : label
              .toLowerCase()
              .toLowerCase()
              .replace(/^[^A-Z0-9]+/gi, '')
              .replace(/ /g, '-')

        // if name does not exist on Radio then use Context Name from Radio.Group
        const markupName = inputName ? inputName : name ? name : markupId
        // console.log('markupName', markupName)

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
            : undefined

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
          if (parentCallback) {
            parentCallback(e)
          }
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
              onBlur={onBlur}
              onFocus={onFocus ? (event) => onFocus(event) : undefined}
            />
            <div>
              <span className={RadioStyles['sbui-radio-label-text']}>
                {beforeLabel && (
                  <span
                    className={RadioStyles['sbui-radio__label-text-before']}
                  >
                    {beforeLabel}
                  </span>
                )}
                {label}
                {afterLabel && (
                  <span className={RadioStyles['sbui-radio__label-text-after']}>
                    {afterLabel}
                  </span>
                )}
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
