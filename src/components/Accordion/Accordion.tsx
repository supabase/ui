import React, { createContext, useCallback, useContext, useEffect } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
// @ts-ignore
import AccordionStyles from './Accordion.module.css'
import { IconChevronUp } from '../Icon/icons/IconChevronUp'
import Typography from '../Typography'
import styleHandler from '../../lib/theme/styleHandler'

type ContextValue = Required<
  Pick<AccordionProps, 'defaultActiveId' | 'icon' | 'iconPosition'>
> &
  Pick<AccordionProps, 'onChange'>

const AccordionContext = createContext<ContextValue>({
  defaultActiveId: [],
  // icon: <IconChevronUp strokeWidth={2} />,
  iconPosition: 'right',
  onChange: undefined,
})

interface AccordionProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: (string | number)[]
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  bordered?: boolean
  onChange?: (item: {
    label: string
    id?: string | number
    open: boolean
  }) => void
}

function Accordion({
  children,
  className,
  defaultActiveId = [],
  icon = <IconChevronUp strokeWidth={2} />,
  iconPosition = 'right',
  bordered,
  onChange,
}: AccordionProps) {
  const __styles = styleHandler('accordion')

  let containerClasses = [__styles.base]
  if (bordered) {
    containerClasses.push(__styles.bordered)
  }
  if (className) {
    containerClasses.push(className)
  }

  const contextValue = {
    defaultActiveId,
    icon,
    iconPosition,
    onChange,
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
  icon?: React.ReactNode
}

export function Item({ children, className, label, id, icon }: ItemProps) {
  const __styles = styleHandler('accordion')

  const { defaultActiveId, iconPosition, onChange } =
    useContext(AccordionContext)

  let buttonClasses = [__styles.button]
  if (className) {
    buttonClasses.push(className)
  }

  const isDefaultActive = id ? defaultActiveId?.includes(id) : false

  const handleOnChange = useCallback(
    (open: boolean) => () => {
      if (onChange) {
        onChange({ id, label, open })
      }
    },
    [onChange, id, label]
  )

  return (
    <Disclosure defaultOpen={isDefaultActive}>
      {({ open }) => (
        <>
          <Disclosure.Button className={buttonClasses.join(' ')}>
            {iconPosition === 'left' && icon}
            <span className={__styles.label}>{label}</span>
            <IconChevronUp
              strokeWidth={2}
              size={16}
              className={`${__styles.chevron} ${
                open ? __styles['chevron--open'] : __styles['chevron--closed']
              }`}
            />
            {iconPosition === 'right' && icon}
          </Disclosure.Button>
          <Transition
            show={open}
            enter={__styles.animate.enter}
            enterFrom={__styles.animate.enterFrom}
            enterTo={__styles.animate.enterTo}
            leave={__styles.animate.leave}
            leaveFrom={__styles.animate.leaveFrom}
            leaveTo={__styles.animate.leaveTo}
            afterEnter={handleOnChange(open)}
            afterLeave={handleOnChange(open)}
          >
            <Disclosure.Panel className={__styles.panel} static>
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
