import React, { useState } from 'react'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Space } from '../Space'
import { TabsContext } from './TabsContext'

// @ts-ignore
import TabsStyles from './Tabs.module.css'

interface TabsProps {
  id?: string
  type?: 'pills' | 'underlined' | 'cards'
  children: any
  defaultActiveId?: string
  activeId?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  block?: boolean
  tabBarGutter?: number
  tabBarStyle?: React.CSSProperties
  onChange?: any
  onClick?: any
  scrollable?: boolean
  addOnBefore?: React.ReactNode
  addOnAfter?: React.ReactNode
}

function Tabs({
  id,
  children,
  defaultActiveId,
  activeId,
  type,
  size,
  block,
  tabBarGutter,
  tabBarStyle,
  onChange,
  onClick,
  scrollable,
  addOnBefore,
  addOnAfter,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveId
      ? defaultActiveId
      : // if no defaultActiveId is set use the first panel
      children && children[0].props
      ? children[0].props.id
      : ''
  )

  // activeId state can be overriden externally with `active`
  // defaults to use activeTab
  const active = activeId ? activeId : activeTab

  function onTabClick(id: string) {
    const newTabSelected = id !== active
    setActiveTab(id)
    if (onClick) onClick(id)
    if (onChange && newTabSelected) onChange(id)
  }

  // for styling the tabs for underline style
  const underlined = type === 'underlined'
  // for styling the tabs for cards style
  const cards = type === 'cards'

  return (
    <Space direction="vertical" size={4}>
      <div id={id} role="tablist" aria-label={id} style={tabBarStyle}>
        <Space className={TabsStyles['sbui-tab-bar-container']} size={0}>
          <Space
            size={tabBarGutter ? tabBarGutter : underlined ? 6 : 3}
            className={
              TabsStyles['sbui-tab-bar-inner-container'] +
              (scrollable ? ` ${TabsStyles['sbui-tab-bar--scrollable']}` : '')
            }
          >
            {addOnBefore}
            {children.map((tab: any) => {
              const activeMatch = active === tab.props.id
              return (
                <Button
                  icon={tab.props.icon}
                  size={size}
                  block={block}
                  shadow={!block}
                  className={
                    underlined && activeMatch
                      ? `${TabsStyles['sbui-tab-button-underline']} ${TabsStyles['sbui-tab-button-underline--active']}`
                      : underlined
                      ? TabsStyles['sbui-tab-button-underline']
                      : ''
                  }
                  type={activeMatch && !underlined ? 'primary' : 'text'}
                  key={`${tab.props.id}-tab-button`}
                  onClick={() => onTabClick(tab.props.id)}
                  ariaSelected={activeMatch ? true : false}
                  ariaControls={tab.props.id}
                  tabIndex={activeMatch ? 0 : -1}
                  role="tab"
                >
                  {tab.props.label}
                </Button>
              )
            })}
          </Space>
          {addOnAfter}
        </Space>
        {underlined && <Divider />}
      </div>
      <TabsContext.Provider value={{ activeId: active }}>
        {children}
      </TabsContext.Provider>
    </Space>
  )
}

interface PanelProps {
  children?: React.ReactNode
  id?: string
  label?: string
  icon?: React.ReactNode
}
export function Panel({ children, id }: PanelProps) {
  return (
    children && (
      <TabsContext.Consumer>
        {({ activeId }) => {
          const active = activeId === id
          return (
            <div
              id={id}
              role="tabpanel"
              tabIndex={active ? 0 : -1}
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
