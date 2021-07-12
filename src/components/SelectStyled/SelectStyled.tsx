/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react'
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
  className?: string
  children: React.ReactNode
  descriptionText?: string
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  onChange?(x: React.ChangeEvent<HTMLSelectElement>): void
  style?: React.CSSProperties
  value?: any
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  defaultValue?: any
  options?: any
}

function Select({
  children,
  className,
  descriptionText,
  error,
  icon,
  id,
  label,
  labelOptional,
  layout,
  onChange,
  value,
  style,
  size = 'medium',
  defaultValue,
  options,
}: Props) {
  const [selected, setSelected] = useState(
    value ? value : defaultValue ? defaultValue : null
  )
  const [content, setContent] = useState([])

  const [selectedNode, setSelectedNode] = useState<any>({})

  useEffect(() => {
    const data = children

    // loop through children and add to content state
    data.map((node: any) => {
      let modifiedContent = content
      modifiedContent.push(node.props)
      setContent(modifiedContent)
    })

    // sets the active select option using content array
    // and selected value from headlessui select
    if (selected)
      setSelectedNode(content.find((node) => node.value === selected))
    else setSelectedNode(content[0])
  }, [children, options, selected])

  function handleOnChange(e: any) {
    if (onChange) onChange(e.target.value)
    setSelected(e)
  }

  let selectClasses = [SelectStyles['sbui-listbox']]
  if (error) selectClasses.push(SelectStyles['sbui-listbox--error'])
  if (icon) selectClasses.push(SelectStyles['sbui-listbox--with-icon'])
  if (size) selectClasses.push(SelectStyles[`sbui-listbox--${size}`])

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
      <div className={SelectStyles['sbui-listbox-container']}>
        <Listbox value={selected} onChange={handleOnChange}>
          {({ open }) => {
            return (
              <div className="relative">
                <Listbox.Button className={selectClasses.join(' ')}>
                  {icon && <InputIconContainer icon={icon} />}
                  <span className="w-full flex flex-row items-center space-x-3">
                    {selectedNode?.addOnBefore && <selectedNode.addOnBefore />}
                    <span className="truncate">{selectedNode?.label}</span>
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                  {error && (
                    <div
                      className={SelectStyles['sbui-listbox-actions-container']}
                    >
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
}: any) {
  // console.log('children typeof', typeof children)

  return (
    <Listbox.Option key={id} value={value}>
      {({ selected, active }) => {
        if (active) {
          console.log('selected', selected, 'active', active)
          console.log(label)
        }
        return (
          <div
            className={classNames(
              active ? SelectStyles['sbui-listbox-option--active'] : ' ',
              SelectStyles['sbui-listbox-option']
            )}
          >
            <div className={SelectStyles['sbui-listbox-option__inner']}>
              {addOnBefore && addOnBefore({ active, selected })}
              <span>
                {typeof children === 'function'
                  ? children({ active, selected })
                  : children}
              </span>
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
          </div>
        )
      }}
    </Listbox.Option>
  )
}

Select.Option = SelectOption

export default Select
