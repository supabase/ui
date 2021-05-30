import React from 'react'
import { Disclosure } from '@headlessui/react'
// @ts-ignore
import AccordianStyles from './Accordian.module.css'

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

  return <div className={containerClasses.join(' ')}>{children}</div>
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  label: string
}

export function Item({ children, className, label }: ItemProps) {
  let panelClasses = [AccordianStyles['sbui-accordian-item__panel']]

  let buttonClasses = [AccordianStyles['sbui-accordian-item__button']]
  if (className) {
    buttonClasses.push(className)
  }

  return (
    <Disclosure>
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
