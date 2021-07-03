import React, { useEffect, useState } from 'react'
// @ts-ignore
import WideRadioStyles from './WideRadio.module.css'
import { WideRadioContext } from './WideRadioContext'

interface InputProps {
    label: string
    value: string
    description?: string
    disabled?: boolean
    id?: string
    name?: string
    checked?: boolean
    width?: string
    image?: string
    onChange?(x: React.ChangeEvent<HTMLInputElement>): void
    onFocus?(x: React.FocusEvent<HTMLInputElement>): void
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  }
  interface GroupProps {
    allowedValues?: any
    wrap?: boolean
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
    options?: Array<InputProps>
    onChange?(x: React.ChangeEvent<HTMLInputElement>): void
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  }

  const WideRadioGroup = ({
    id,
    children,
    className,
    type,
    options,
    value,
    name,
    wrap,
    onChange,
    size = 'medium',
  }: GroupProps) => {

    const [activeId, setActiveId] = useState('')
    useEffect(() => {
        setActiveId(value)
      }, [value])
    
    const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveId(e.target.id)
    }

    const wrapClasses = wrap ? "wide-radio-options-wrap" : "wide-radio-options"

    return (
      <WideRadioContext.Provider
      value={{ parentCallback, type, name, activeId, parentSize: size }}
    >
      <fieldset id={id} className={className}>

          <div className={WideRadioStyles['wide-radio-container']}>
          <div className={WideRadioStyles[wrapClasses]}>
              {options
                ? options.map((option: InputProps) => {
                    return (
                      <WideRadio
                        id={option.id}
                        label={option.label}
                        value={option.value}
                        description={option.description}
                        image={option.image}
                        onChange={onChange}
                      />
                    )
                  })
                : children}
          </div>
          </div>
      </fieldset>
    </WideRadioContext.Provider>
  )}

  const WideRadio = ({
    id,
    disabled,
    value,
    label,
    name,
    checked,
    onChange,
    description,
    onFocus,
    image,
    size = 'medium',
  }: InputProps) => {
    const inputName = name
    return (

    <WideRadioContext.Consumer>
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
      const active = activeId === markupId ? true
          : checked ? true : 
            checked === false ? false : null


      function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {

        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e)
        // '`onChange` callback for this component
        if (onChange) onChange(e)

      }
  
      return(
        <label id={id} className={WideRadioStyles['wide-radio-wrapper']}>
          <input
              id={markupId}
              name={markupName}
              type="radio"
              checked={active}
              disabled={disabled}
              value={value ? value : markupId}
              onChange={onInputChange}
              onFocus={onFocus ? (event) => onFocus(event) : undefined} />
          <div >
            <div className={WideRadioStyles['wide-radio-label-wrapper']} >
              <div>{image && <img src={image} />}</div>
              <div className={WideRadioStyles['wide-radio-label-display']}>
                <span id={id} className="label">{label}</span>
                <span id={id} className="description" >{description}</span>
              </div>
            </div>
          </div>
        </label>
      )
      }}
    </WideRadioContext.Consumer>
  )}


WideRadio.Group = WideRadioGroup
export  { WideRadio}