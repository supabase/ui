import React from 'react'
import PropTypes, { bool } from 'prop-types'
import './Button.css'
// @ts-ignore
import { Transition, Icon } from '../../index'
import { IconContext } from '../Icon/IconContext'

interface Props {
  block: boolean
  className: any
  children: React.ReactNode
  disabled: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  style?: React.CSSProperties
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'outline'
    | 'dashed'
    | 'link'
    | 'text'
  htmlType?: 'button' | 'submit' | 'reset'
  danger: boolean
  spaceSize: number
  ref: any
}

const Button = ({
  block,
  className,
  children,
  disabled = false,
  onClick,
  icon,
  iconRight,
  loading = false,
  shadow = true,
  size = 'medium',
  style,
  type = 'primary',
  danger,
  htmlType = 'button',
  ref
}: Props) => {
  let classes = []
  let containerClasses = ['sbui-btn-container']

  if (block) {
    containerClasses.push('sbui-btn--w-full')
    classes.push('sbui-btn--w-full')
  }

  if (danger) {
    classes.push('sbui-btn--danger')
  }

  if (shadow) {
    classes.push('sbui-btn-container--shadow')
  }

  if (size) {
    classes.push(`sbui-btn--${size}`)
  }

  classes.push(`sbui-btn-${type}`)

  const showIcon = loading || icon

  return (
    <React.Fragment>
      <span className={containerClasses.join(' ')}>
        <button
          ref={ref}
          className={`sbui-btn ${classes.join(' ')} ${classes.join(
            ' '
          )} ${className}`}
          disabled={loading || (disabled && true)}
          onClick={onClick}
          style={style}
          type={htmlType}
        >
          {showIcon &&
            (loading ? (
              <Icon
                size={size}
                className={'sbui-btn--anim--spin'}
                type={'Loader'}
              />
            ) : icon ? (
              <IconContext.Provider value={{ contextSize: size }}>
                {icon}
              </IconContext.Provider>
            ) : null)}
          {children && <span>{children}</span>}
          {iconRight && !loading && (
            <IconContext.Provider value={{ contextSize: size }}>
              {iconRight}
            </IconContext.Provider>
          )}
        </button>
      </span>
    </React.Fragment>
  )
}

export default Button
