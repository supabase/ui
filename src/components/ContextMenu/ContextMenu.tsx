import React, { useState } from 'react'

// import * as RadixContextMenu from '@radix-ui/react-dropdown-menu'
import { IconCheck } from '../Icon/icons/IconCheck'

// @ts-ignore
// import ContextMenuStyles from './ContextMenu.module.css'

import type * as RadixContextMenuTypes from '@radix-ui/react-context-menu/'

import * as RadixContextMenu from '@radix-ui/react-context-menu'

const ContextMenuStyles = {}

interface ContextMenuProps {
  onOpenChange?(x: boolean): void
  alignOffset?: RadixContextMenuTypes.ContextMenuContentProps['alignOffset']
  overlay?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function ContextMenu({
  onOpenChange,

  alignOffset = 6,
  overlay,
  children,
  className,
  style,
}: ContextMenuProps) {
  // let classes = [ContextMenuStyles['sbui-contextmenu__content']]
  // if (className) {
  //   classes.push(className)
  // }
  return (
    <RadixContextMenu.Root onOpenChange={onOpenChange}>
      <RadixContextMenu.Trigger
      // className={ContextMenuStyles['sbui-contextmenu__trigger']}
      >
        {children}
      </RadixContextMenu.Trigger>

      <RadixContextMenu.Content
        sideOffset={alignOffset}
        // className={classes.join(' ')}
        style={style}
      >
        {overlay}
      </RadixContextMenu.Content>
    </RadixContextMenu.Root>
  )
}

export interface ContextMenuItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: (event: Event) => void
}

export function Item({
  children,
  icon,
  disabled,
  onClick,
}: ContextMenuItemProps) {
  return (
    <RadixContextMenu.Item
      // className={ContextMenuStyles['sbui-contextmenu-item']}
      disabled={disabled}
      onSelect={onClick}
    >
      {icon && icon}
      <span>{children}</span>
    </RadixContextMenu.Item>
  )
}

export function Misc({ children, icon }: ContextMenuItemProps) {
  return (
    <div
    // className={ContextMenuStyles['sbui-contextmenu-misc']}
    >
      {icon && icon}
      {children}
    </div>
  )
}

export interface ContextMenuCheckboxProps {
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
}: ContextMenuCheckboxProps) {
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false)

  const handleChange = (e: boolean) => {
    if (onChange) onChange(e)
    setChecked(e)
  }

  return (
    <RadixContextMenu.CheckboxItem
      checked={checked}
      onCheckedChange={handleChange}
      // className={`${ContextMenuStyles['sbui-contextmenu-item']} ${ContextMenuStyles['sbui-contextmenu-input']}`}
      disabled={disabled}
    >
      <RadixContextMenu.ItemIndicator
      // className={ContextMenuStyles['sbui-contextmenu-input__check']}
      >
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
        <RadixContextMenu.CheckboxItem />
      </RadixContextMenu.ItemIndicator>
      <span>{children}</span>
    </RadixContextMenu.CheckboxItem>
  )
}

export interface ContextMenuRadioProps {
  children: React.ReactNode
  value: string
  ItemIndicator?: React.ReactNode
}

export function Radio({
  children,
  value,
  ItemIndicator,
}: ContextMenuRadioProps) {
  return (
    <RadixContextMenu.RadioItem
      value={value}
      // className={`${ContextMenuStyles['sbui-contextmenu-item']} ${ContextMenuStyles['sbui-contextmenu-input']}`}
    >
      <RadixContextMenu.ItemIndicator
      // className={ContextMenuStyles['sbui-contextmenu-input__check']}
      >
        {ItemIndicator ? ItemIndicator : <IconCheck size="tiny" />}
      </RadixContextMenu.ItemIndicator>
      <span>{children}</span>
    </RadixContextMenu.RadioItem>
  )
}

export interface ContextMenuRadioGroupProps {
  children: React.ReactNode
  value: string
  onChange?(x: string): void
}

export function RadioGroup({
  children,
  value: propsValue,
  onChange,
}: ContextMenuRadioGroupProps) {
  const [value, setValue] = useState(propsValue ? propsValue : '')

  const handleChange = (e: string) => {
    if (onChange) onChange(e)
    setValue(e)
  }

  return (
    <RadixContextMenu.RadioGroup value={value} onValueChange={handleChange}>
      {children}
    </RadixContextMenu.RadioGroup>
  )
}

export interface ContextMenuLabelProps {
  children: React.ReactNode
}

export function Label({ children }: ContextMenuLabelProps) {
  return (
    <RadixContextMenu.Label
    // className={ContextMenuStyles['sbui-contextmenu-label']}
    >
      {children}
    </RadixContextMenu.Label>
  )
}

ContextMenu.Item = Item
ContextMenu.Misc = Misc
ContextMenu.Checkbox = Checkbox
ContextMenu.Radio = Radio
ContextMenu.RadioGroup = RadioGroup
ContextMenu.Label = Label
export default ContextMenu
