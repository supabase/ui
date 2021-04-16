/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import SelectStyles from './SelectStyled.module.css'

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
  const [selected, setSelected] = useState(defaultValue)

  function handleOnChange(e: any) {
    if (onChange) onChange(e.target.value)
    setSelected(e)
  }

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
                <div className="mt-1 relative">
                  <Listbox.Button
                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onClick={() =>
                      console.log('clickevent from ListBox.Button')
                    }
                  >
                    <span className="w-full inline-flex truncate">
                      <span className="truncate">{selected.id}</span>
                      <span className="ml-2 truncate text-gray-500">
                        {selected.label}
                      </span>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
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
                      className="list-none p-0 absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
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

function SelectOption({ id, className, value, children, label }: any) {
  // const [selected, setSelected] = useState<any>(null)
  // const [active, setActive] = useState(null)
  return (
    <Listbox.Option
      key={id}
      value={value}
      className={({ active }) =>
        classNames(
          active ? 'text-white bg-brand-600' : 'text-gray-900',
          'cursor-default select-none relative py-2 pl-3 pr-9'
        )
      }
    >
      {({ selected, active }) => {
        // console.log(label, active)
        return (
          <>
            <div className="flex">
              <span
                className={classNames(
                  selected ? 'font-semibold' : 'font-normal',
                  'truncate'
                )}
              >
                {children({ active, selected })}
              </span>
              <span
                className={classNames(
                  active ? 'text-indigo-200' : 'text-gray-500',
                  'ml-2 truncate'
                )}
              ></span>
            </div>

            {selected ? (
              <span
                className={classNames(
                  active ? 'text-white' : 'text-brand-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4'
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
