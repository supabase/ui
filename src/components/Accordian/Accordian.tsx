import React from 'react'
import { Disclosure } from '@headlessui/react'
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
  return (
    <div className={className}>
      <Disclosure>{({ open }) => <>{children}</>}</Disclosure>
    </div>
  )
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  label: string
}

export function Item({ children, className, label }: ItemProps) {
  return (
    <>
      <Disclosure.Button>{label}</Disclosure.Button>
      <Disclosure.Panel className={className}>{children}</Disclosure.Panel>
    </>
  )
}

Accordian.Item = Item
export default Accordian
