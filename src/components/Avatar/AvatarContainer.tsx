import React from 'react'

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  classes: string[]
  size: number
}

export default function AvatarContainer({
  children,
  style,
  classes,
  size,
}: Props) {
  return (
    <div
      className={classes.join(' ')}
      style={{ height: size, width: size, ...style }}
    >
      {children}
    </div>
  )
}
