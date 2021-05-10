import React, { useState } from 'react'
import { Card } from '../Card'
import Typography from '../Typography'

// @ts-ignore
import DropdownStyles from './Dropdown.module.css'

import { Space } from '../Space'
import Overlay from '../../lib/Overlay/Overlay'
import { AnimationTailwindClasses } from '../../types'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/'
import { IconCheck } from '../Icon/icons/IconCheck'

interface Props {
  visible?: boolean
  overlay?: React.ReactNode
  children?: React.ReactNode
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
  side?: RadixDropdownTypes.DropdownMenuContentOwnProps['side']
  align?: RadixDropdownTypes.DropdownMenuContentOwnProps['align']
  onVisibleChange?: any
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  overlayStyle?: React.CSSProperties
  overlayClassName?: string
  transition?: AnimationTailwindClasses
}

function Dropdown(props: Props) {
  let classes = [DropdownStyles['sbui-dropdown-card']]
  if (props.className) {
    classes.push(props.className)
  }
  return (
    <RadixDropdown.Root>
      {/* <Overlay
        triggerElement={[ */}
      <RadixDropdown.Trigger className="border-none bg-transparent p-0 focus:border-none focus:ring-0">
        {props.children}
      </RadixDropdown.Trigger>
      {/* ,]}
        {...props}
      > */}
      <RadixDropdown.Content
        sideOffset={8}
        side={props.side}
        align={props.align}
      >
        <Card className={classes.join(' ')} style={props.style}>
          {props.overlay}
        </Card>
      </RadixDropdown.Content>
      {/* </Overlay> */}
    </RadixDropdown.Root>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

export function Item({ children, icon, disabled }: ItemProps) {
  return (
    <RadixDropdown.Item
      className={DropdownStyles['sbui-dropdown-item']}
      disabled={disabled}
    >
      {icon && icon}
      <span className={DropdownStyles['sbui-dropdown-item__content']}>
        {children}
      </span>
    </RadixDropdown.Item>
  )
}

export function Misc({ children, icon }: ItemProps) {
  return (
    <div className={DropdownStyles['sbui-dropdown-item']}>
      <Space>
        {icon && icon}
        <span className={DropdownStyles['sbui-dropdown-item__content']}>
          {children}
        </span>
      </Space>
    </div>
  )
}

interface CheckboxProps {
  children: React.ReactNode
  checked?: boolean
  onChange?(x: boolean): void
  disabled?: boolean
  ItemIndicator?: React.ReactNode
}

export function Checkbox({
  children,
  checked: propsChecked,
  onChange,
  disabled,
  ItemIndicator,
}: CheckboxProps) {
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false)

  const handleChange = (e: boolean) => {
    if (onChange) onChange(e)
    setChecked(e)
  }

  return (
    <RadixDropdown.CheckboxItem
      checked={checked}
      onCheckedChange={handleChange}
      className={`${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-checkbox']}`}
      disabled={disabled}
    >
      <RadixDropdown.ItemIndicator>
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
        <RadixDropdown.CheckboxItem />
      </RadixDropdown.ItemIndicator>
      {children}
    </RadixDropdown.CheckboxItem>
  )
}

interface RadioProps {
  children: React.ReactNode
  value: string
  ItemIndicator?: React.ReactNode
}

export function Radio({ children, value, ItemIndicator }: RadioProps) {
  return (
    <RadixDropdown.RadioItem
      value={value}
      className={`${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-checkbox']}`}
    >
      <RadixDropdown.ItemIndicator>
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
      </RadixDropdown.ItemIndicator>
      {children}
    </RadixDropdown.RadioItem>
  )
}

interface RadioGroupProps {
  children: React.ReactNode
  value: string
  onChange?(x: string): void
}

export function RadioGroup({
  children,
  value: propsValue,
  onChange,
}: RadioGroupProps) {
  const [value, setValue] = useState(propsValue ? propsValue : '')

  const handleChange = (e: string) => {
    if (onChange) onChange(e)
    setValue(e)
    console.log(e)
  }

  return (
    <RadixDropdown.RadioGroup value={value} onValueChange={handleChange}>
      {children}
    </RadixDropdown.RadioGroup>
  )
}

Dropdown.Item = Item
Dropdown.Misc = Misc
Dropdown.Checkbox = Checkbox
Dropdown.Radio = Radio
Dropdown.RadioGroup = RadioGroup
export default Dropdown
