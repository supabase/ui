import React from 'react'
// @ts-ignore
import cssStyles from './Divider.module.css'

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
  let classes = [cssStyles['sbui-divider']]
  if (light) {
    classes.push(cssStyles['sbui-divider--light'])
  }
  if (children) {
    classes.push(cssStyles[`sbui-divider--${orientation}`])
  } else {
    classes.push(cssStyles[`sbui-divider--no-text`])
  }

  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} role="seperator" style={style}>
      {children && (
        <span className={cssStyles['sbui-divider__content']}>{children}</span>
      )}
    </div>
  )
}
