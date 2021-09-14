import React, { useState } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { Card } from '../Card'
import { IconCheck } from '../Icon/icons/IconCheck'

// @ts-ignore
import DropdownStyles from './Dropdown.module.css'

import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/'

interface RootProps {
  open?: boolean
  arrow?: boolean
  onOpenChange?: RadixDropdownTypes.DropdownMenuProps['onOpenChange'] //   DropdownMenu['onOpenChange']
  side?: RadixDropdownTypes.DropdownMenuContentProps['side']
  align?: RadixDropdownTypes.DropdownMenuContentProps['align']
  sideOffset?: RadixDropdownTypes.DropdownMenuContentProps['sideOffset']
  overlay?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  isNested?: Boolean
}

function Dropdown({
  open,
  onOpenChange,
  align = 'center', //Default value
  side = 'bottom', //Default value
  sideOffset = 6,
  overlay,
  children,
  className,
  style,
  arrow,
  isNested,
}: RootProps) {
  let classes = [DropdownStyles['sbui-dropdown__content']]
  if (className) {
    classes.push(className)
  }

  return (
    <RadixDropdown.Root onOpenChange={onOpenChange} open={open}>
      {isNested ? (
        <RadixDropdown.TriggerItem
          className={DropdownStyles['sbui-dropdown__trigger-item']}
        >
          {children}
        </RadixDropdown.TriggerItem>
      ) : (
        <RadixDropdown.Trigger
          className={DropdownStyles['sbui-dropdown__trigger']}
        >
          {children}
        </RadixDropdown.Trigger>
      )}

      <RadixDropdown.Content
        portalled={true}
        sideOffset={sideOffset}
        side={side}
        align={align}
        className={classes.join(' ')}
        style={style}
      >
        {arrow && (
          <RadixDropdown.Arrow
            className={DropdownStyles['sbui-dropdown__arrow']}
            offset={10}
          ></RadixDropdown.Arrow>
        )}
        {overlay}
      </RadixDropdown.Content>
    </RadixDropdown.Root>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: (event: Event) => void
}

export function Item({ children, icon, disabled, onClick }: ItemProps) {
  return (
    <RadixDropdown.Item
      className={DropdownStyles['sbui-dropdown-item']}
      disabled={disabled}
      onSelect={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </RadixDropdown.Item>
  )
}

export function TriggerItem({ children, icon, disabled }: ItemProps) {
  return (
    <div className={DropdownStyles['sbui-dropdown-item-trigger']}>
      {icon && icon}
      <span>{children}</span>
    </div>
  )
}

export function Misc({ children, icon }: ItemProps) {
  return (
    <div className={DropdownStyles['sbui-dropdown-misc']}>
      {icon && icon}
      {children}
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
      className={`${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-input']}`}
      disabled={disabled}
    >
      <RadixDropdown.ItemIndicator
        className={DropdownStyles['sbui-dropdown-input__check']}
      >
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
        <RadixDropdown.CheckboxItem />
      </RadixDropdown.ItemIndicator>
      <span>{children}</span>
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
      className={`${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-input']}`}
    >
      <RadixDropdown.ItemIndicator
        className={DropdownStyles['sbui-dropdown-input__check']}
      >
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
      </RadixDropdown.ItemIndicator>
      <span>{children}</span>
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
  }

  return (
    <RadixDropdown.RadioGroup value={value} onValueChange={handleChange}>
      {children}
    </RadixDropdown.RadioGroup>
  )
}

interface LabelProps {
  children: React.ReactNode
}

export function Label({ children }: LabelProps) {
  return (
    <RadixDropdown.Label className={DropdownStyles['sbui-dropdown-label']}>
      {children}
    </RadixDropdown.Label>
  )
}

Dropdown.Item = Item
Dropdown.Misc = Misc
Dropdown.Checkbox = Checkbox
Dropdown.Radio = Radio
Dropdown.RadioGroup = RadioGroup
Dropdown.Label = Label
Dropdown.TriggerItem = TriggerItem
export default Dropdown
