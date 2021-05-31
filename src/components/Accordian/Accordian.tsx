import React, { createContext, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
// @ts-ignore
import AccordianStyles from './Accordian.module.css'

type ContextValue = Required<Pick<AccordianProps, 'defaultActiveId'>>

const AccordianContext = createContext<ContextValue>({
  defaultActiveId: undefined,
})

interface AccordianProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: string | number
  expandedIcon?: any
  expandIconPosition?: 'left' | 'right'
  bordered?: boolean
}

function Accordian({
  children,
  className,
  defaultActiveId,
  expandedIcon,
  expandIconPosition,
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
  const { defaultActiveId } = useContext(AccordianContext)

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
            {label}
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
