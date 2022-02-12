/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useRef, useState } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { FormLayout } from '../../lib/Layout/FormLayout'

import InputIconContainer from '../../lib/Layout/InputIconContainer'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { IconCheck } from '../Icon/icons/IconCheck'

import { useFormContext } from '../Form/FormContext'
import { flatten } from 'lodash'

import { SelectContext } from './SelectContext'

import styleHandler from '../../lib/theme/styleHandler'
import { Button } from '../Button'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLButtonElement>, 'size'> {
  className?: string
  children: React.ReactNode
  descriptionText?: string
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  value?: any
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  defaultValue?: any
  borderless?: boolean
  validation?: (x: any) => void
}

function Listbox({
  children,
  className,
  descriptionText,
  error,
  icon,
  id = '',
  name = '',
  label,
  labelOptional,
  layout,
  value = undefined,
  onChange,
  onFocus,
  onBlur,
  style,
  size = 'medium',
  defaultValue,
  borderless = false,
  validation,
  disabled,
}: Props) {
  const [selected, setSelected] = useState(undefined)
  const [selectedNode, setSelectedNode] = useState<any>({})

  const __styles = styleHandler('listbox')

  const {
    formContextOnChange,
    values,
    errors,
    handleBlur,
    touched,
    fieldLevelValidation,
  } = useFormContext()

  if (values && !value) {
    console.log('WRONG THING RAN 1')
    defaultValue = values[id || name]
  }
  if (handleBlur) onBlur = handleBlur

  if (!error) {
    if (errors && !error) error = errors[id || name]
    error = touched && touched[id || name] ? error : undefined
  }

  useEffect(() => {
    if (value) {
      console.log('value useeffect')
      setSelected(value)
    }
  }, [value])

  useEffect(() => {
    console.log(triggerRef?.current?.offsetWidth)
    if (document) {
      document.documentElement.style.setProperty('--width-listbox', `533px`)
    }
  }, [])

  useEffect(() => {
    const data: any = children
    const content: any = flatten(data)

    console.log('selected in useEffect', selected)

    console.log('value has changed')

    function findNode(_value: any) {
      return content.find((node: any) => node.props.value === _value)
    }

    /*
     * value prop overrides everything
     */
    if (value) {
      console.log('if value')
      setSelected(value)
      const node: any = findNode(value)
      setSelectedNode(node?.props ? node.props : undefined)
      return
    }

    /*
     * if no value prop, then use selected state
     */
    if (selected) {
      console.log('if selected')
      const node: any = findNode(selected)
      setSelectedNode(node?.props ? node.props : undefined)
      return
    } else if (defaultValue) {
      console.log('if defaultValue')
      setSelected(defaultValue)
      const node: any = findNode(selected)
      setSelectedNode(node?.props ? node.props : undefined)
      return
    } else {
      console.log('else')
      /*
       * if no selected value (including a `defaultvalue`), then use first child
       */
      setSelectedNode(content[0].props)
      return
    }
  }, [selected])

  function handleOnChange(value: any) {
    // console.log('listbox onchange e', value)
    if (onChange) onChange(value)
    setSelected(value)

    /*
     * Create change event for formik
     * formik expects an input change event
     */
    let event: any = {}
    event.target = {
      type: 'select',
      name: name,
      id: id,
      value: value,
      checked: undefined,
      // outerHTML: undefined,
      // options: undefined,
      // multiple: undefined,
    }

    // update form
    // Create a new 'change' event
    if (formContextOnChange) formContextOnChange(event)
    // run field level validation
    if (validation) fieldLevelValidation(id, validation(value))
  }

  let selectClasses = [__styles.container, __styles.base]
  if (error) selectClasses.push(__styles.variants.error)
  if (!error) selectClasses.push(__styles.variants.standard)
  // if (icon) selectClasses.push(SelectStyles['sbui-listbox--with-icon'])
  if (icon) selectClasses.push(__styles.with_icon)
  // if (size) selectClasses.push(SelectStyles[`sbui-listbox--${size}`])
  if (size) selectClasses.push(__styles.size[size])
  // if (borderless) selectClasses.push(SelectStyles['sbui-listbox--borderless'])
  if (disabled) selectClasses.push(__styles.disabled)

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
      style={style}
      size={size}
    >
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            ref={triggerRef}
            className={selectClasses.join(' ')}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            id={id}
          >
            {/* {icon && <InputIconContainer icon={icon} />} */}
            <span className={__styles.addOnBefore}>
              {selectedNode?.addOnBefore && <selectedNode.addOnBefore />}
              <span className={__styles.label}>{selectedNode?.label}</span>
            </span>
            <span className={__styles.chevron_container}>
              <svg
                className={__styles.chevron}
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
            {error && (
              <div className={__styles.actions_container}>
                {error && <InputErrorIcon size={size} />}
              </div>
            )}
          </button>
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content
          sideOffset={6}
          loop={true}
          side={'bottom'}
          align="center"
          className={__styles.options_container}
        >
          <div>
            <SelectContext.Provider
              value={{ onChange: handleOnChange, selected }}
            >
              {children}
            </SelectContext.Provider>
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </FormLayout>
  )
}

interface OptionProps {
  id?: string
  className?: string
  value: any
  children?: React.ReactNode
  label: string
  addOnBefore?: ({ active, selected }: any) => React.ReactNode
  disabled?: boolean
}

type addOnBefore = {
  selected: boolean
  active: boolean
}

function SelectOption({
  id,
  className,
  value,
  children,
  label,
  addOnBefore,
  disabled = false,
}: OptionProps) {
  // console.log('children typeof', typeof children)

  const __styles = styleHandler('listbox')

  //   const active = false
  //   const selected = false

  return (
    <SelectContext.Consumer>
      {({ onChange, selected }) => {
        // console.log('selected inside SelectOption', selected)
        // console.log('onChange inside SelectOption', onChange)

        const active = selected === value ? true : false

        console.log('active inside SelectOption', active, value)
        return (
          <DropdownMenuPrimitive.Item
            key={id}
            className={classNames(
              __styles.option,
              active ? __styles.option_active : ' ',
              disabled ? __styles.option_disabled : ' '
            )}
            onSelect={() => onChange(value)}
          >
            <div className={__styles.option_inner}>
              {addOnBefore && addOnBefore({ active, selected })}
              <span>
                {typeof children === 'function'
                  ? children({ active, selected })
                  : children}
              </span>
            </div>

            {active ? (
              <span
                className={classNames(
                  __styles.option_check,
                  active ? __styles.option_check_active : ''
                )}
              >
                <IconCheck
                  className={__styles.option_check_icon}
                  aria-hidden="true"
                />
              </span>
            ) : null}
          </DropdownMenuPrimitive.Item>
        )
      }}
    </SelectContext.Consumer>
  )
}

Listbox.Option = SelectOption

export default Listbox
