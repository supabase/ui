import React from 'react'
import './Text.css'

interface Props {
  className? :string, 
  children: any
  style?: React.CSSProperties, 
  type?: 'default' | 'secondary' | 'success' | 'warning' | 'danger',
  disabled? : boolean,
  mark? : boolean, 
  code? : boolean, 
  keyboard? : boolean, 
  underline? : boolean, 
  strikethrough? : boolean, 
  strong? : boolean
  small? : boolean
}

function Text({ 
  className,
  children,
  style,
  type,
  disabled,
  mark,
  code,
  keyboard,
  underline,
  strikethrough,
  strong,
  small
}: Props) {

  let classes = ['sbui-typography']
  if (className) {
    classes.push(className)
  }

  if (type) {
    classes.push(`sbui-typography-${type}`)
  }

  if (disabled) {
    classes.push(`sbui-typography-disabled`)
  }
  
  if (underline) {
    classes.push(`sbui-typography-underline`)
  }

  if (strikethrough) {
    classes.push(`sbui-typography-strikethrough`)
  }
 
  if (small) {
    classes.push('sbui-typography-small')
  }

  let content = []

  if (code || mark || keyboard || strong) {
    if(code) content.push(<code>{children}</code>)
    if(mark) content.push(<mark>{children}</mark>)
    if(keyboard) content.push(<kbd>{children}</kbd>)
    if(strong) content.push(<strong>{children}</strong>)
  } else {
    content.push(children) 
  }

  return (
    <span style={style} className={classes.join(' ')}>
      {content}
    </span>
  )
}

export default Text
