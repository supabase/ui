/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import SelectStyles from './SelectStyled.module.css'

import InputIconContainer from '../../lib/Layout/InputIconContainer'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { IconCheck } from '../Icon/icons/IconCheck'

import { flatten } from 'lodash'

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
  onChange?(x: string): void
  style?: React.CSSProperties
  value?: any
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  defaultValue?: any
  borderless?: boolean
}

function Listbox({
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
  borderless = false,
}: Props) {
  const [selected, setSelected] = useState(defaultValue || undefined)
  const [selectedNode, setSelectedNode] = useState<any>({})

  useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value])

  useEffect(() => {
    const data: any = children
    const content: any = flatten(data)

    function findNode(value: any) {
      return content.find((node: any) => node.props.value == value)
    }

    /*
     * value prop overrides everything
     */
    if (value) {
      setSelected(value)
      const node: any = findNode(value)
      setSelectedNode(node?.props ? node.props : undefined)
      return
    }

    /*
     * if no value prop, then use selected state
     */
    if (selected) {
      const node: any = findNode(selected)
      setSelectedNode(node?.props ? node.props : undefined)
    } else {
      /*
       * if no selected value (including a `defaultvalue`), then use first child
       */
      setSelectedNode(content[0].props)
    }
  }, [children, selected, value])

  function handleOnChange(e: any) {
    if (onChange) onChange(e)
    setSelected(e)
  }

  let selectClasses = [SelectStyles['sbui-listbox']]
  if (error) selectClasses.push(SelectStyles['sbui-listbox--error'])
  if (icon) selectClasses.push(SelectStyles['sbui-listbox--with-icon'])
  if (size) selectClasses.push(SelectStyles[`sbui-listbox--${size}`])
  if (borderless) selectClasses.push(SelectStyles['sbui-listbox--borderless'])

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
        <HeadlessListbox value={selected} onChange={handleOnChange}>
          {({ open }) => {
            return (
              <div className="relative">
                <HeadlessListbox.Button className={selectClasses.join(' ')}>
                  {icon && <InputIconContainer icon={icon} />}
                  <span className={SelectStyles['sbui-listbox-addonbefore']}>
                    {selectedNode?.addOnBefore && <selectedNode.addOnBefore />}
                    <span className={SelectStyles['sbui-listbox-label']}>
                      {selectedNode?.label}
                    </span>
                  </span>
                  <span
                    className={SelectStyles['sbui-listbox-chevron-container']}
                  >
                    <svg
                      className={SelectStyles['sbui-listbox-chevron']}
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
                    <div
                      className={SelectStyles['sbui-listbox-actions-container']}
                    >
                      {error && <InputErrorIcon size={size} />}
                    </div>
                  )}
                </HeadlessListbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave={SelectStyles['sbui-listbox-transition--leave']}
                  leaveFrom={
                    SelectStyles['sbui-listbox-transition--leave-from']
                  }
                  leaveTo={SelectStyles['sbui-listbox-transition--leave-to']}
                >
                  <HeadlessListbox.Options
                    static
                    className={SelectStyles['sbui-listbox-option-container']}
                  >
                    {children}
                  </HeadlessListbox.Options>
                </Transition>
              </div>
            )
          }}
        </HeadlessListbox>
      </div>
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

  return (
    <HeadlessListbox.Option key={id} value={value} disabled={disabled}>
      {({ selected, active }) => {
        // if (active) {
        //   console.log('selected', selected, 'active', active)
        //   console.log(label)
        // }
        return (
          <div
            className={classNames(
              SelectStyles['sbui-listbox-option'],
              active ? SelectStyles['sbui-listbox-option--active'] : ' ',
              disabled ? SelectStyles['sbui-listbox-option--disabled'] : ' '
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
                  active
                    ? SelectStyles['sbui-listbox-option__check--active']
                    : '',
                  SelectStyles['sbui-listbox-option__check']
                )}
              >
                <IconCheck
                  className={SelectStyles['sbui-listbox-option__check__icon']}
                  aria-hidden="true"
                />
              </span>
            ) : null}
          </div>
        )
      }}
    </HeadlessListbox.Option>
  )
}

Listbox.Option = SelectOption

export default Listbox
