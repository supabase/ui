import React, { createContext, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
// @ts-ignore
import AccordianStyles from './Accordian.module.css'
import { IconChevronUp } from '../Icon/icons/IconChevronUp'
import { IconContext } from '../Icon/IconContext'

type ContextValue = Required<
  Pick<AccordianProps, 'defaultActiveId' | 'icon' | 'iconPosition'>
>

const AccordianContext = createContext<ContextValue>({
  defaultActiveId: undefined,
  icon: <IconChevronUp strokeWidth={2} />,
  iconPosition: 'right',
})

interface AccordianProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: string | number
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  bordered?: boolean
}

function Accordian({
  children,
  className,
  defaultActiveId,
  icon = <IconChevronUp strokeWidth={2} />,
  iconPosition = 'right',
  bordered,
}: AccordianProps) {
  let containerClasses = [AccordianStyles['sbui-accordian-container']]
  if (bordered) {
    containerClasses.push(AccordianStyles['sbui-accordian-container--bordered'])
  }
  if (className) {
    containerClasses.push(className)
  }

  const contextValue = {
    defaultActiveId,
    icon,
    iconPosition,
  }

  return (
    <AccordianContext.Provider value={contextValue}>
      <div className={containerClasses.join(' ')}>{children}</div>
    </AccordianContext.Provider>
  )
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  label: string
  id?: string | number
}

export function Item({ children, className, label, id }: ItemProps) {
  const { defaultActiveId, icon, iconPosition } = useContext(AccordianContext)

  let panelClasses = [AccordianStyles['sbui-accordian-item__panel']]

  let buttonClasses = [AccordianStyles['sbui-accordian-item__button']]
  if (className) {
    buttonClasses.push(className)
  }

  const isDefaultActive = defaultActiveId && defaultActiveId === id

  return (
    <Disclosure defaultOpen={isDefaultActive}>
      {({ open }) => (
        <>
          <Disclosure.Button className={buttonClasses.join(' ')}>
            <IconContext.Provider
              value={{ className: open ? 'transform rotate-180' : '' }}
            >
              {iconPosition === 'left' && icon}
              {label}
              {iconPosition === 'right' && icon}
            </IconContext.Provider>
          </Disclosure.Button>
          <Disclosure.Panel className={panelClasses.join(' ')}>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

Accordian.Item = Item
export default Accordian
