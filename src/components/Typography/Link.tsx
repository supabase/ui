import React from 'react'
import './Link.css'

interface Props {
  children?: React.ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  href?: string
  className?: string
  style?: React.CSSProperties
}

function Link({
  children,
  target = '_blank',
  href,
  className,

  style,
}: Props) {
  let classes = ['sbui-typography sbui-typography-link']
  if (className) {
    classes.push(className)
  }

  return (
    <a
      className={classes.join(' ')}
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={style}
    >
      {children}
    </a>
  )
}

export { Link }
