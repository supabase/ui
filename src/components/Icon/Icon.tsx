import React from 'react'
import * as Icons from 'react-feather'
import { IconContext } from './IconContext'


// interface ContextProps {
//   contextSize: string
// }

interface Props {
  className?: string
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | number
  type?: string
  color?: string
  strokeWidth?: number
}


function Icon({
  className,
  size,
  type,
  color,
  strokeWidth,
  ...props
}: Props) {
  
  return (
    <IconContext.Consumer>
      {({ contextSize } :any) => {

        const defaultSizes = {
          tiny: 14,
          small: 18,
          medium: 21,
          large: 21,
          xlarge: 24,
        }

        // @ts-ignore
        const FeatherIcon = Icons[type]

        // const iconSize = typeof size === 'string' ? defaultSizes[contextSize] : 21
        let iconSize = 21
        if(size) {
          iconSize = size ? typeof size === 'string' ? defaultSizes[size] : size : 21
        }

        if(contextSize) {
        // @ts-ignore
          iconSize = contextSize ? typeof contextSize === 'string' ? defaultSizes[contextSize] : contextSize : 21
        }

        console.log('size: ', size)
        console.log('contextSize: ', contextSize)
        console.log('iconSize: ', iconSize)

        return (
          <FeatherIcon
            color={color ? color : 'currentColor'}
            className={`${className}`}
            strokeWidth={strokeWidth}
            size={iconSize}
            {...props}
          />
        )
      }}
    </IconContext.Consumer>
  )
}

export default Icon
