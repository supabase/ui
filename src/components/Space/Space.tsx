import React from 'react'
import './Space.css'

function Space ({direction, size = 2, className, block, style, minus, children}: any) {

  const classes = []
  classes.push(direction === 'vertical' ? 'sbui-space-col' : 'sbui-space-row')
  classes.push('sbui-' + (minus ? '-' : '') + 'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size)
  if(block) {
    classes.push('sbui-space--block')
  }
  if(className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} style={style}>
      {children}
    </div>
  )
}

export default Space
