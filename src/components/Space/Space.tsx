import React from 'react'
import './Space.css'

function Space (props: any) {
  const { direction, size, className, block, style } = props

  const classes = []
  classes.push(direction === 'vertical' ? 'sbui-space-col' : 'sbui-space-row')
  classes.push('sbui-space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size)
  if(block) {
    classes.push('sbui-space--block')
  }
  if(className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} style={style}>
      {props.children}
    </div>
  )
}

export default Space
