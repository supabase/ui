import React, { PropsWithChildren, useState, ReactChildren } from 'react'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Space } from '../Space'
import { TabsContext } from './TabsContext'

import './Tabs.css'

interface TabsProps {
  type?: 'pills' | 'underlined' | 'cards'
  children: any
  defaultActiveId?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  block?: boolean
}

function Tabs({ children, defaultActiveId, type, size, block }: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveId
      ? defaultActiveId
      : children && children[0].props
      ? children[0].props.id
      : ''
  )

  // function updateItemArray(e: any) {
  //   console.log(e)
  //   setTabs(e)
  // }

  let tabs: any[] = []

  // console.log(children[0].props)

  let newChildren = children
  console.log(newChildren)

  // children.map((tab: any, i: any) => {
  //   newChildren[i].props['label'] = tab.key
  //   // console.log(children)
  //   // console.log(tab.key)
  // })

  function onTabClick(id: string) {
    console.log(id)
    setActiveTab(id)
  }

  const underlined = type === 'underlined'

  return (
    <Space direction="vertical">
      <div role="tablist" aria-label="Sample Tabs">
        <Space size={underlined ? 6 : 3}>
          {children.map((tab: any) => {
            const active = activeTab === tab.props.id
            return (
              <Button
                icon={tab.props.icon}
                size={size}
                block={block}
                shadow={!block}
                className={
                  underlined && active
                    ? 'sbui-tab-button-underline sbui-tab-button-underline--active'
                    : underlined
                    ? 'sbui-tab-button-underline'
                    : ''
                }
                type={active && !underlined ? 'primary' : 'text'}
                key={`${tab.props.id}-tab-button`}
                onClick={() => onTabClick(tab.props.id)}
              >
                {tab.props.label}
              </Button>
            )
          })}
        </Space>
        {underlined && <Divider />}
      </div>
      <TabsContext.Provider value={{ activeTab: activeTab }}>
        {children}
      </TabsContext.Provider>
    </Space>
  )
}

interface PanelProps {
  children?: React.ReactNode
  label?: string
  id?: string
}
export function Panel({ children, label, id, key }: any) {
  return (
    children && (
      <TabsContext.Consumer>
        {({ activeTab }) => {
          // console.log('Panel key', key)
          // console.log(key)
          const active = activeTab === id
          return (
            <div
              id={id}
              role="tabpanel"
              // tabindex="0"
              // aria-labelledby="tab-1"
              hidden={!active}
            >
              {children}
            </div>
          )
        }}
      </TabsContext.Consumer>
    )
  )
}

Tabs.Panel = Panel
export default Tabs
