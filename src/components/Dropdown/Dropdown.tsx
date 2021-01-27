import React from 'react'
import { Card } from '../Card'
import Typography from '../Typography'

import './Dropdown.css'

import { Space } from '../Space'
import Overlay from '../../lib/Overlay/Overlay'

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
}

function Dropdown(props: Props) {
  return (
    <Overlay triggerElement={props.children} {...props}>
      <Card className="sbui-dropdown-card">{props.overlay}</Card>
    </Overlay>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Item({ children, icon }: ItemProps) {
  return (
    <div className="sbui-dropdown-item">
      <Typography.Text>
        <Space>
          {icon && icon}
          <span className="sbui-dropdown-item__content">{children}</span>
        </Space>
      </Typography.Text>
    </div>
  )
}

Dropdown.Item = Item
export default Dropdown
