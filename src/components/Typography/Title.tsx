import React from 'react'
// @ts-ignore
// import TitleStyles from './Title.module.css'

export interface TitleProps {
  className?: string
  level?: 1 | 2 | 3 | 4 | 5
  children: any
  style?: React.CSSProperties
}

function Title({ className, level = 1, children, style }: TitleProps) {
  // let classes = [TitleStyles['sbui-typography-title']]
  // if (className) {
  //   classes.push(className)
  // }
  const CustomTag: any = `h${level}`

  return (
    <CustomTag
      style={style}
      // className={classes.join(' ')}
    >
      {children}
    </CustomTag>
  )
}

export default Title
