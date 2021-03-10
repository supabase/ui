import React from 'react'
import { Card } from '../Card'
import Typography from '../Typography'

// @ts-ignore
import DropdownStyles from './Dropdown.module.css'

import { Space } from '../Space'
import Overlay from '../../lib/Overlay/Overlay'
import { AnimationTailwindClasses } from '../../types'

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
    | 'topCentre'
  onVisibleChange?: any
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  overlayStyle?: React.CSSProperties
  overlayClassName?: string
  transition?: AnimationTailwindClasses
}

function Dropdown({
  visible = false,
  overlay,
  children,
  placement = 'bottomLeft',
  onVisibleChange,
  disabled = false,
  style,
  className,
  overlayStyle,
  overlayClassName,
  transition,
}: Props) {
  let classes = [DropdownStyles['sbui-dropdown-card']]
  if (className) {
    classes.push(className)
  }
  return (
    <Overlay
      triggerElement={children}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      disabled={disabled}
      onVisibleChange={onVisibleChange}
      placement={placement}
      visible={visible}
      transition={transition}
    >
      <Card className={classes.join(' ')} style={style}>
        {overlay}
      </Card>
    </Overlay>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Item({ children, icon }: ItemProps) {
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
export default Dropdown
