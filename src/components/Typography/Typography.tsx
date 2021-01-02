import React from 'react'
import './Typography.css'

function Typography({
  children,
  className,
  tag = 'div',
  style
}:any) {
  let classes = ['sbui-typography']
  if(className) {
    classes.push(className)
  }
  let CustomTag: any = `${tag}`;
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

export default Typography