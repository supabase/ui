import React from 'react'
import { Space } from '../Space'
import Typography from '../Typography'
// @ts-ignore
import badgeStyles from './Badge.module.css'

interface Props {
  color?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  children: string
  size?: 'large' | 'small'
  dot?: boolean
}

function Badge({ color, children, size, dot }: Props) {
  let classes = [badgeStyles['sbui-badge']]
  if (color) {
    classes.push(badgeStyles[`sbui-badge--${color}`])
  }
  if (size === 'large') {
    classes.push(badgeStyles['sbui-badge--large'])
  }

  return (
    <span className={classes.join(' ')}>
      {dot && (
        <svg
          className={`${badgeStyles[`sbui-badge-dot`]} ${
            badgeStyles[`sbui-badge--${color}`]
          }`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}

      {children}
    </span>
  )
}
export default Badge
