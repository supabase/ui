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

interface Props {
  visible?: boolean
}

export default function Dropdown({ visible = false }: Props) {
  const [visibleState, setVisibleState] = useState(false)

  function onToggle() {
    setVisibleState(!visibleState)
  }

  const clickContainerRef = Hooks.clickOutsideListener((event: any) => {
    setVisibleState(!visibleState)
  })

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      ref={clickContainerRef}
      className="relative inline-block text-left"
      style={{ margin: '0 auto', marginLeft: '320px' }}
    >
      <div>
        <Button
          onClick={onToggle}
          type="outline"
          iconRight={<Icon type={'ChevronDown'} />}
        >
          Options
        </Button>
      </div>
      <Transition
        show={visibleState}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56">
          <Card className="sbui-dropdown-card">
            <div className="border-none divide-solid divide-y divide-gray-100 dark:divide-dark-600">
              <div className="px-4 py-3">
                <Typography.Text>Signed in as </Typography.Text>
                <Typography.Text strong>tom@example.com </Typography.Text>
              </div>
              <div
                className="py-1 border-l-0 border-r-0"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <Typography.Text>
                    <Space>
                      <Icon type="Mail" /> <span>Account settings</span>
                    </Space>
                  </Typography.Text>
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <Typography.Text>Support</Typography.Text>
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <Typography.Text>License</Typography.Text>
                </div>
              </div>
              <div className="py-1 border-l-0 border-r-0">
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <Typography.Text>Sign out</Typography.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Transition>
    </div>
  )
}
