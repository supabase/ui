import React from 'react'
import { DropdownContext } from '../../lib/Overlay/OverlayContext'
import { Space } from '../Space'
import Typography from '../Typography'

import defaultTheme from '../../lib/theme/defaultTheme'

interface MenuProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
function Menu({ children, className, style }: MenuProps) {
  return (
    <nav
      role="menu"
      aria-label="Sidebar"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      className={className}
      style={style}
    >
      <ul>{children}</ul>
    </nav>
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
  // let classes = [MenuStyles['sbui-menu__item']]
  // if (active) classes.push(MenuStyles['sbui-menu__item--active'])
  // if (active && showActiveBar)
  //   classes.push(MenuStyles['sbui-menu__item--active--bar'])
  // if (rounded) classes.push(MenuStyles['sbui-menu__item--rounded'])

  const itemOnClick = onClick

  const __styles = defaultTheme.menu

  let classes = [__styles.item.base]
  if (active) {
    classes.push(__styles.item.active)
  } else {
    classes.push(__styles.item.normal)
  }
  if (active && showActiveBar) classes.push(__styles.item.bar)

  let contentClasses = [__styles.item.content.base]
  if (active) {
    contentClasses.push(__styles.item.content.active)
  } else {
    contentClasses.push(__styles.item.content.normal)
  }

  let iconClasses = [__styles.item.icon.base]
  if (active) {
    iconClasses.push(__styles.item.icon.active)
  } else {
    iconClasses.push(__styles.item.icon.normal)
  }
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
          <li role="menuitem" className="outline-none">
            <a
              className={classes.join(' ')}
              onClick={handleClick}
              style={style}
              aria-current={active ? 'page' : undefined}
              href="#"
            >
              {icon && <span className={iconClasses.join(' ')}>{icon}</span>}
              <span className={contentClasses.join(' ')}>{children}</span>
            </a>
          </li>
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
  const __styles = defaultTheme.menu.group
  return (
    <div className={__styles.base}>
      <Space>
        {icon && <span className={__styles.icon}>{icon}</span>}
        <h5 className={__styles.content}>{title}</h5>
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
    <div
    // className={MenuStyles['sbui-menu__misc']}
    >
      <Typography.Text>
        <span
        // className={MenuStyles['sbui-menu__content']}
        >
          {children}
        </span>
      </Typography.Text>
    </div>
  )
}

Menu.Item = Item
Menu.Group = Group
Menu.Misc = Misc
export default Menu
