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
  active?: boolean
  rounded?: boolean
  onClick?: any
  doNotCloseOverlay?: boolean
}

export function Item({
  children,
  icon,
  active,
  rounded,
  onClick,
  doNotCloseOverlay = false,
}: ItemProps) {
  let classes = ['sbui-menu__item']
  if (active) classes.push('sbui-menu__item--active')
  if (rounded) classes.push('sbui-menu__item--rounded')

  const itemOnClick = onClick

  return (
    // DropdownContext allows for MenuItem to
    // close parent dropdown onClick
    <DropdownContext.Consumer>
      {({ onClick }) => {
        function handleClick(e: React.MouseEvent) {
          if (!doNotCloseOverlay) onClick(e)
          itemOnClick(e)
        }

        return (
          <div
            className={classes.join(' ')}
            role="menuitem"
            onClick={handleClick}
          >
            <Typography.Text>
              <Space>
                {icon && icon}
                <span className="sbui-menu__content">{children}</span>
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
        <span className="sbui-menu__content">{children}</span>
      </Typography.Text>
    </div>
  )
}

Menu.Item = Item
Menu.Group = Group
Menu.Misc = Misc
export default Menu
