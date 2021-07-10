import React from 'react'
import { DropdownContext } from '../../lib/Overlay/OverlayContext'
import { Space } from '../Space'
import Typography from '../Typography'

// @ts-ignore
import MenuStyles from './Menu.module.css'

interface MenuProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
function Menu({ children, className, style }: MenuProps) {
  return (
    <div
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      className={className}
      style={style}
    >
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
  showActiveBar?: boolean
  style?: React.CSSProperties
}

export function Item({
  children,
  icon,
  active,
  rounded,
  onClick,
  doNotCloseOverlay = false,
  showActiveBar = false,
  style,
}: ItemProps) {
  let classes = [MenuStyles['sbui-menu__item']]
  if (active) classes.push(MenuStyles['sbui-menu__item--active'])
  if (active && showActiveBar)
    classes.push(MenuStyles['sbui-menu__item--active--bar'])
  if (rounded) classes.push(MenuStyles['sbui-menu__item--rounded'])

  const itemOnClick = onClick

  return (
    // DropdownContext allows for MenuItem to
    // close parent dropdown onClick
    <DropdownContext.Consumer>
      {({ onClick }) => {
        function handleClick(e: React.MouseEvent) {
          if (!doNotCloseOverlay) onClick(e)
          if (itemOnClick) itemOnClick(e)
        }

        return (
          <div
            className={classes.join(' ')}
            role="menuitem"
            onClick={handleClick}
            style={style}
          >
            <Typography.Text>
              <Space>
                {icon && icon}
                <span className={MenuStyles['sbui-menu__content']}>
                  {children}
                </span>
              </Space>
            </Typography.Text>
          </div>
        )
      }}
    </DropdownContext.Consumer>
  )
}

interface GroupProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  title: string
}

export function Group({ children, icon, title }: GroupProps) {
  return (
    <div className={MenuStyles['sbui-menu__group']}>
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
    <div className={MenuStyles['sbui-menu__misc']}>
      <Typography.Text>
        <span className={MenuStyles['sbui-menu__content']}>{children}</span>
      </Typography.Text>
    </div>
  )
}

Menu.Item = Item
Menu.Group = Group
Menu.Misc = Misc
export default Menu
