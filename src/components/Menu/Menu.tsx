import React from 'react'
import { DropdownContext } from '../Dropdown/DropdownContext'
import { Space } from '../Space'
import Typography from '../Typography'

function Menu({ children }: any) {
  return (
    <div
      className=""
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {children}
    </div>
  )
}
interface MiscProps {
  children: React.ReactNode
}

export function Misc({ children }: MiscProps) {
  return (
    <div className="px-4 py-2">
      <Typography.Text>
        <span>{children}</span>
      </Typography.Text>
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
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-dark-800"
            role="menuitem"
            onClick={onClick}
          >
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
    <div className="px-4 py-2">
      <Space>
        {icon && icon}
        <Typography.Text type="secondary">{title}</Typography.Text>
      </Space>
      {children}
    </div>
  )
}

Menu.Item = Item
Menu.Group = Item
export default Menu
