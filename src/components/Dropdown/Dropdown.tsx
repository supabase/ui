import React from 'react'
import { Card } from '../Card'
import Typography from '../Typography'

// @ts-ignore
import DropdownStyles from './Dropdown.module.css'

import { Space } from '../Space'
import Overlay from '../../lib/Overlay/Overlay'
import { AnimationTailwindClasses } from '../../types'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/'

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
      <Typography.Text>
        <Space>
          {icon && icon}
          <span className={DropdownStyles['sbui-dropdown-item__content']}>
            {children}
          </span>
        </Space>
      </Typography.Text>
    </RadixDropdown.Item>
  )
}

export function Misc({ children, icon }: ItemProps) {
  return (
    <div className={DropdownStyles['sbui-dropdown-item']}>
      <Typography.Text>
        <Space>
          {icon && icon}
          <span className={DropdownStyles['sbui-dropdown-item__content']}>
            {children}
          </span>
        </Space>
      </Typography.Text>
    </div>
  )
}

Dropdown.Item = Item
Dropdown.Misc = Misc
export default Dropdown
