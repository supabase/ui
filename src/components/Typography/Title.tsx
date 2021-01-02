import React from 'react'
import './Title.css'

function Title({ className, level, children, style, ...props }: any) {
  console.log(level)
  
  let classes = ['sbui-typography']
  if(className) {
    classes.push(className)
  }
  const CustomTag: any = `h${level}`

  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

export { Title }
