import { HandlerFunction } from '@storybook/addon-actions'
import React from 'react'
// @ts-ignore
import LinkStyles from './Link.module.css'

interface Props {
  children?: React.ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: HandlerFunction
}

function Link({
  children,
  target = '_blank',
  href,
  className,
  onClick,
  style,
}: Props) {
  let classes = [
    LinkStyles['sbui-typography'],
    LinkStyles['sbui-typography-link'],
  ]
  if (className) {
    classes.push(className)
  }

  function keyDownHandler(e: React.KeyboardEvent<HTMLAnchorElement>) {
    if (
      typeof onClick !== 'undefined' &&
      (e.code === 'Space' || e.code === 'Enter')
    ) {
      e.stopPropagation()
      onClick(e)
    }
  }

  return (
    <a
      onClick={onClick}
      onKeyDown={keyDownHandler}
      className={classes.join(' ')}
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={style}
      tabIndex={0}
    >
      {children}
    </a>
  )
}

export default Link
