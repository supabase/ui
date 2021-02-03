import React from 'react'
import './Typography.css'
import Title from './Title'
import Text from './Text'
import Link from './Link'

function Typography({
  children,
  className,
  tag = 'div',
  style
}:any) {
  let classes = ['sbui-typography', 'sbui-typography-container']
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

Typography.Title = Title;
Typography.Text = Text;
Typography.Link = Link;

export default Typography
