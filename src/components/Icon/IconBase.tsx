import React from 'react'
import { IconContext } from './IconContext'
import './Icon.css'

interface Props {
  className?: string
  size?:
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | number
  type?: string
  color?: string
  strokeWidth?: number
  fill?: string
  stroke?: string
  background?:
    | 'brand'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  src?: React.ReactNode
  icon?: any
}

interface StringMap {
  [key: string]: number
}

function IconBase({
  className,
  size,
  type = 'Mail',
  color,
  strokeWidth,
  fill = undefined,
  stroke = undefined,
  background,
  src,
  icon,
  ...props
}: Props) {
  return (
    <IconContext.Consumer>
      {({ contextSize }) => {
        const defaultSizes: StringMap = {
          tiny: 14,
          small: 18,
          medium: 20,
          large: 20,
          xlarge: 24,
          xxlarge: 30,
          xxxlarge: 42,
        }

        const defaultSize = defaultSizes['large']
        // @ts-ignore

        const FeatherIcon = icon

        // const iconSize = typeof size === 'string' ? defaultSizes[contextSize] : 21
        let iconSize: any = 21

        // use contextSize of parent (via context hook) if one exists
        if (contextSize) {
          iconSize = contextSize
            ? typeof contextSize === 'string'
              ? defaultSizes[contextSize]
              : contextSize
            : defaultSize
        }

        // use size prop of this component if one exists
        if (size) {
          iconSize = size
            ? typeof size === 'string'
              ? defaultSizes[size]
              : size
            : defaultSize
        }

        // confitional used for Icons with no color settings
        // default these icons to use 'currentColor' ie, the text color
        const noColor = !color && !fill && !stroke

        const IconComponent = () => (
          <FeatherIcon
            color={!noColor ? color : 'currentColor'}
            stroke={!noColor ? stroke : 'currentColor'}
            className={`${className}`}
            strokeWidth={strokeWidth}
            size={iconSize}
            fill={!noColor ? (fill ? fill : 'none') : 'none'}
            {...props}
          />
        )

        const Icon = src ? (
          // custom SVG file
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color={!noColor ? color : 'currentColor'}
            fill={!noColor ? (fill ? fill : 'none') : 'none'}
            stroke={!noColor ? stroke : 'currentColor'}
            className={`${className}`}
            width={iconSize}
            height={iconSize}
          >
            {src}
          </svg>
        ) : (
          // feather icon
          <IconComponent />
        )

        return background ? (
          <div
            // circle coloured background
            className={`sbui-icon-container sbui-icon-container--${background}`}
          >
            {Icon}
          </div>
        ) : (
          Icon
        )
      }}
    </IconContext.Consumer>
  )
}

export default IconBase
