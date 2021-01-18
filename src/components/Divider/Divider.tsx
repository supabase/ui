import React from 'react'
import './Divider.css'

interface Props {
  children?: React.ReactNode
  className?: string
  light?: boolean
  orientation?: 'left' | 'right' | 'center'
  style?: React.CSSProperties
}

export default function Divider({
  children,
  className,
  light = false,
  orientation = 'center',
  style,
}: Props) {
  let classes = ['sbui-divider']
  if (light) {
    classes.push(`sbui-divider--light`)
  }
  if (children) {
    classes.push(`sbui-divider--${orientation}`)
  } else {
    classes.push(`sbui-divider--no-text`)
  }

  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} role="seperator" style={style}>
      {children && <span className="sbui-divider__content">{children}</span>}
    </div>
  )
}
