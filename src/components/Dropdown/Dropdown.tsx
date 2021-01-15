import React, { useState } from 'react'
import { Button } from '../Button'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { Transition } from '../Transition'
import Typography from '../Typography'

import './Dropdown.css'

//@ts-ignore
import Hooks from './../../lib/Hooks'
import { Space } from '../Space'
import { Menu } from '../Menu'
import { DropdownContext } from './DropdownContext'
// import { Divider } from '../Menu/Menu'

interface Props {
  visible?: boolean
  overlay?: React.ReactNode
  children?: React.ReactNode
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
}

function Dropdown({
  visible = false,
  overlay,
  children,
  placement = 'bottomRight',
}: Props) {
  const [visibleState, setVisibleState] = useState(false)

  function onToggle() {
    setVisibleState(!visibleState)
  }

  const clickContainerRef = Hooks.clickOutsideListener((event: any) => {
    if (visibleState) setVisibleState(!visibleState)
  })

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      ref={clickContainerRef}
      className="relative inline-block text-left"
      style={{ margin: '0 auto', marginLeft: '320px' }}
    >
      {placement === 'topRight' || placement === 'topLeft' ? (
        <div onClick={onToggle}>{children}</div>
      ) : null}
      <Transition
        show={visibleState}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`sbui-dropdown-overlay-continer sbui-dropdown-overlay-continer--${placement}`}
        >
          <Card className="sbui-dropdown-card">
            <DropdownContext.Provider value={{ onClick: onToggle }}>
              {overlay}
            </DropdownContext.Provider>
          </Card>
        </div>
      </Transition>
      {placement === 'bottomRight' || placement === 'bottomLeft' ? (
        <div onClick={onToggle}>{children}</div>
      ) : null}
    </div>
  )
}

interface ItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Item({ children, icon }: ItemProps) {
  return (
    <div className="px-4 py-2">
      <Typography.Text>
        <Space>
          {icon && icon}
          <span>{children}</span>
        </Space>
      </Typography.Text>
    </div>
  )
}

Dropdown.Item = Item
export default Dropdown
