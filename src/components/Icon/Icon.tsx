import React from 'react'
import * as Icons from 'react-feather'

interface Props {
  className?: string
  size?: number,
  type?: string,
  color?: string,
  strokeWidth?: number,
  stroke?:string,
}

function Icon({
  className,
  size = 21,
  type,
  color,
  strokeWidth,
  stroke,
  ...props
}: Props) {
  // @ts-ignore
  const FeatherIcon = Icons[type]

  return (
    <FeatherIcon
      stroke={stroke ? stroke : color ? color : 'currentColor'}
      className={`${className}`}
      strokeWidth={strokeWidth}
      size={size}
      {...props}
    />
  )
}

export default Icon
