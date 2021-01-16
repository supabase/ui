import React from 'react'
import { DropdownContext } from '../../lib/Overlay/OverlayContext'
import { Space } from '../Space'
import Typography from '../Typography'

import './Menu.css'

function Menu({ children }: any) {
  return (
    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {children}
    </div>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Item({ children, icon }: ItemProps) {
  return (
    // DropdownContext allows for MenuItem to
    // close parent dropdown onClick
    <DropdownContext.Consumer>
      {({ onClick }) => {
        return (
          <div className="sbui-menu__item" role="menuitem" onClick={onClick}>
            <Typography.Text>
              <Space>
                {icon && icon}
                <span>{children}</span>
              </Space>
            </Typography.Text>
          </div>
        )
      }}
    </DropdownContext.Consumer>
  )
}

interface GroupProps {
  children: React.ReactNode
  icon?: React.ReactNode
  title: string
}

export function Group({ children, icon, title }: GroupProps) {
  return (
    <div className="sbui-menu__group">
      <Space>
        {icon && icon}
        <Typography.Text type="secondary">{title}</Typography.Text>
      </Space>
      {children}
    </div>
  )
}

interface MiscProps {
  children: React.ReactNode
}

export function Misc({ children }: MiscProps) {
  return (
    <div className="sbui-menu__misc">
      <Typography.Text>
        <span>{children}</span>
      </Typography.Text>
    </div>
  )
}

Menu.Item = Item
Menu.Group = Group
Menu.Misc = Misc
export default Menu
