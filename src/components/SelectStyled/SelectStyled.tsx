/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import SelectStyles from './SelectStyled.module.css'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export interface Props {
  autoComplete?: string
  autofocus?: boolean
  className?: string
  children: React.ReactNode
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  id?: string
  inputRef?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?(x: React.ChangeEvent<HTMLSelectElement>): void
  onFocus?(x: React.FocusEvent<HTMLSelectElement>): void
  onBlur?(x: React.FocusEvent<HTMLSelectElement>): void
  placeholder?: string
  style?: React.CSSProperties
  value?: any
  reveal?: boolean
  required?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  defaultValue?: any
}

function Select({
  autoComplete,
  autofocus,
  children,
  className,
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
  onFocus,
  onBlur,
  placeholder,
  required,
  value,
  style,
  size = 'medium',
  defaultValue,
}: Props) {
  const [selected, setSelected] = useState(
    value ? value : defaultValue ? defaultValue : null
  )

  function handleOnChange(e: any) {
    if (onChange) onChange(e.target.value)
    setSelected(e)
  }

  let selectClasses = [SelectStyles['sbui-select']]
  if (error) selectClasses.push(SelectStyles['sbui-select--error'])
  if (icon) selectClasses.push(SelectStyles['sbui-select--with-icon'])
  if (size) selectClasses.push(SelectStyles[`sbui-select--${size}`])

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
      <div className={SelectStyles['sbui-select-container']}>
        <Listbox value={selected} onChange={handleOnChange}>
          {({ open }) => {
            return (
              <>
                <div className="relative">
                  <Listbox.Button
                    // className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 sm:text-sm"
                    className={selectClasses.join(' ')}
                  >
                    {icon && <InputIconContainer icon={icon} />}
                    <span className="w-full flex flex-row truncate">
                      <span className="truncate">{selected.id}</span>
                      <span className="truncate">{selected.label}</span>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                    {error && (
                      <div className="sbui-select-actions-container">
                        {error && <InputErrorIcon size={size} />}
                      </div>
                    )}
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="list-none p-0 absolute mt-1 w-full bg-white dark:bg-gray-800 shadow-lg border border-solid border-gray-100 dark:border-gray-600 max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {children}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )
          }}
        </Listbox>
      </div>
    </FormLayout>
  )
}

function SelectOption({
  id,
  className,
  value,
  children,
  label,
  addOnBefore,
  addOnAfter,
}: any) {
  return (
    <Listbox.Option
      key={id}
      value={value}
      className={({ active }) =>
        classNames(
          active ? 'text-white bg-brand-600 bg-opacity-20' : 'text-gray-900',
          'cursor-default select-none relative py-2 pl-3 pr-9'
        )
      }
    >
      {({ selected, active }) => {
        // console.log(label, active)
        return (
          <>
            <div className="flex items-center">
              {addOnBefore && <span>{addOnBefore({ active, selected })}</span>}
              <span
                className={classNames(
                  selected
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300 font-normal',
                  'truncate text-sm'
                )}
              >
                {children({ active, selected })}
              </span>
              {addOnAfter && <span>{addOnAfter({ active, selected })}</span>}
            </div>

            {selected ? (
              <span
                className={classNames(
                  active ? 'text-brand-600' : 'text-brand-600',
                  'absolute inset-y-0 right-0 flex items-center pr-3'
                )}
              >
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )
      }}
    </Listbox.Option>
  )
}

Select.Option = SelectOption

export default Select
