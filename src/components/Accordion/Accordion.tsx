import React, { createContext, useContext } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
// @ts-ignore
import AccordionStyles from './Accordion.module.css'
import { IconChevronUp } from '../Icon/icons/IconChevronUp'
import { IconContext } from '../Icon/IconContext'
import Typography from '../Typography'

type ContextValue = Required<
  Pick<AccordionProps, 'defaultActiveId' | 'icon' | 'iconPosition'>
>

const AccordionContext = createContext<ContextValue>({
  defaultActiveId: undefined,
  icon: <IconChevronUp strokeWidth={2} />,
  iconPosition: 'right',
})

interface AccordionProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: string | number
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  bordered?: boolean
}

function Accordion({
  children,
  className,
  defaultActiveId,
  icon = <IconChevronUp strokeWidth={2} />,
  iconPosition = 'right',
  bordered,
}: AccordionProps) {
  let containerClasses = [AccordionStyles['sbui-accordion-container']]
  if (bordered) {
    containerClasses.push(AccordionStyles['sbui-accordion-container--bordered'])
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
    <AccordionContext.Provider value={contextValue}>
      <div className={containerClasses.join(' ')}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  label: string
  id?: string | number
}

export function Item({ children, className, label, id }: ItemProps) {
  const { defaultActiveId, icon, iconPosition } = useContext(AccordionContext)

  let panelClasses = [AccordionStyles['sbui-accordion-item__panel']]

  let buttonClasses = [AccordionStyles['sbui-accordion-item__button']]
  if (className) {
    buttonClasses.push(className)
  }

  const isDefaultActive = defaultActiveId && defaultActiveId === id

  return (
    <Disclosure defaultOpen={isDefaultActive}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={
              open
                ? `${buttonClasses.join(' ')} sbui-accordion-item__button--open`
                : buttonClasses.join(' ')
            }
          >
            <IconContext.Provider
              value={{
                className: open ? 'mt-px transform rotate-180' : 'mt-px',
              }}
            >
              {iconPosition === 'left' && icon}
              <Typography>{label}</Typography>
              {iconPosition === 'right' && icon}
            </IconContext.Provider>
          </Disclosure.Button>
          <Transition
            show={open}
            enter={AccordionStyles[`sbui-accordion-item__panel--enter`]}
            enterFrom={AccordionStyles[`sbui-accordion-item__panel--enterFrom`]}
            enterTo={AccordionStyles[`sbui-accordion-item__panel--enterTo`]}
            leave={AccordionStyles[`sbui-accordion-item__panel--leave`]}
            leaveFrom={AccordionStyles[`sbui-accordion-item__panel--leaveFrom`]}
            leaveTo={AccordionStyles[`sbui-accordion-item__panel--leaveTo`]}
          >
            <Disclosure.Panel className={panelClasses.join(' ')} static>
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

Accordion.Item = Item
export default Accordion
