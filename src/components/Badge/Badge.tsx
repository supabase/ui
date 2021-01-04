import React from 'react'
import { Space } from '../Space'
import Typography from '../Typography'
import './Badge.css'

interface Props {
  color?:
    'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  children: string
  size?: 'large' | 'small'
  dot? : boolean
}

function Badge({ color, children, size, dot }: Props) {
  let classes = ['sbui-badge']
  if (color) {
    classes.push(`sbui-badge--${color}`)
  }
  if (size === 'large') {
    classes.push('sbui-badge--large')
  }

  return (
    <span className={classes.join(' ')}>
      { dot  && (
        <svg
        className={`sbui-badge-dot sbui-badge--${color}`}
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg>
      ) }
      
      {children}
    </span>
  )
}
export default Badge
