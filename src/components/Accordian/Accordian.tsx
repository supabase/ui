import React from 'react'

interface AccordianProps {
  children?: React.ReactNode
  className?: string
}

function Accordian({ children, className }: AccordianProps) {
  return <ul className={className}>{children}</ul>
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
}

export function Item({ children, className }: ItemProps) {
  return <li className={className}>{children}</li>
}

Accordian.Item = Item
export default Accordian
