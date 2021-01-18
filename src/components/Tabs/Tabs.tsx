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
  tabBarGutter?: number
  tabBarStyle?: React.CSSProperties
  onChange?: any
  onClick?: any
}

function Tabs({
  children,
  defaultActiveId,
  type,
  size,
  block,
  tabBarGutter,
  tabBarStyle,
  onChange,
  onClick,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveId
      ? defaultActiveId
      : children && children[0].props
      ? children[0].props.id
      : ''
  )

  function onTabClick(id: string) {
    const newTabSelected = id !== activeTab
    console.log(id)
    setActiveTab(id)
    if (onClick) onClick(id)
    if (onChange && newTabSelected) onChange(id)
  }

  const underlined = type === 'underlined'

  return (
    <Space direction="vertical" size={4}>
      <div role="tablist" aria-label="Sample Tabs" style={tabBarStyle}>
        <Space size={tabBarGutter ? tabBarGutter : underlined ? 6 : 3}>
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
                ariaSelected={active ? true : false}
                ariaControls={tab.props.id}
                tabIndex={active ? 0 : -1}
                role="tab"
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
  id?: string
}
export function Panel({ children, id }: PanelProps) {
  return (
    children && (
      <TabsContext.Consumer>
        {({ activeTab }) => {
          const active = activeTab === id
          return (
            <div
              id={id}
              role="tabpanel"
              // tabindex="0"
              aria-labelledby={id}
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
