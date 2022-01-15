import React, { createContext, useContext } from 'react'

import { IconChevronUp } from '../Icon/icons/IconChevronUp'
import styleHandler from '../../lib/theme/styleHandler'

import * as RadixAccordion from '@radix-ui/react-accordion'
import { IconChevronDown } from '../..'

// type ContextValue = Required<
//   Pick<AccordionProps, 'defaultActiveId' | 'icon' | 'iconPosition'>
// > &
//   Pick<AccordionProps, 'onChange'>

type Type = 'default' | 'bordered'
type Size = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
type Align = 'left' | 'right'

interface ContextValue {
  bordered?: boolean
  type: Type
  justified: Boolean
  chevronAlign: Align
}

const AccordionContext = createContext<ContextValue>({
  // defaultActiveId: [],/
  // icon: <IconChevronUp strokeWidth={2} />,
  // iconPosition: 'right',
  // onChange: undefined,
  chevronAlign: 'left',
  justified: true,
  type: 'default',
})

interface AccordionProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: (string | number)[]
  icon?: React.ReactNode
  iconPosition?: Align
  bordered: boolean
  onChange?: (item: string | string[]) => void
  openBehaviour: 'single' | 'multiple'
  type: Type
  size: Size
  defaultValue?: string | string[] | undefined
  justified: Boolean
  chevronAlign: Align
}

function Accordion({
  children,
  className,
  defaultActiveId = [],
  icon = <IconChevronUp strokeWidth={2} />,
  iconPosition = 'right',
  onChange,
  openBehaviour = 'multiple',
  type = 'default',
  // size, // TO DO
  defaultValue = undefined,
  justified = true,
  chevronAlign,
}: AccordionProps) {
  const __styles = styleHandler('accordion')

  let containerClasses = [__styles.variants[type].base]

  if (className) {
    containerClasses.push(className)
  }

  const contextValue = {
    // defaultActiveId,
    // icon,
    // iconPosition,
    // onChange,
    chevronAlign,
    justified,
    type,
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      {/* @ts-ignore */}
      <RadixAccordion.Root
        type={openBehaviour}
        onValueChange={onChange ? (e: any) => onChange(e) : undefined}
        defaultValue={defaultValue}
        className={containerClasses.join(' ')}
      >
        <div className={containerClasses.join(' ')}>{children}</div>
      </RadixAccordion.Root>
    </AccordionContext.Provider>
  )
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  header: React.ReactNode
  id: string
  icon?: React.ReactNode
}

export function Item({ children, className, header, id, icon }: ItemProps) {
  const __styles = styleHandler('accordion')

  const {
    type,
    justified,
    chevronAlign,
    // defaultActiveId, iconPosition, onChange
  } = useContext(AccordionContext)

  let triggerClasses = [__styles.variants[type].trigger]
  if (justified) triggerClasses.push(__styles.justified)
  if (className) triggerClasses.push(className)

  let chevronClasses = [
    __styles.chevron.base,
    __styles.chevron.align[chevronAlign],
  ]

  // const handleOnChange = useCallback(
  //   (open: boolean) => () => {
  //     if (onChange) {
  //       onChange({ id, label, open })
  //     }
  //   },
  //   [onChange, id, label]
  // )

  return (
    <RadixAccordion.Item
      value={id}
      className={__styles.variants[type].container}
    >
      {/* <div> */}
      {/* <RadixAccordion.Header> */}
      <RadixAccordion.Trigger className={triggerClasses.join(' ')}>
        {header}
        <IconChevronDown
          aria-hidden
          className={chevronClasses.join(' ')}
          strokeWidth={2}
        />
      </RadixAccordion.Trigger>
      {/* </RadixAccordion.Header> */}
      {/* </div>÷ */}
      <RadixAccordion.Content className={__styles.variants[type].panel}>
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  )
}

Accordion.Item = Item
export default Accordion
