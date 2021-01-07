import React from 'react'
import PropTypes, { bool } from 'prop-types'
import './Button.css'
// @ts-ignore
import { Transition, Icon } from '../../index'
import { IconContext } from '../Icon/IconContext'

interface Props {
  block : boolean
  className : any
  children: React.ReactNode
  disabled: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon? : React.ReactNode
  loading?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  style? : React.CSSProperties
  type?: 'primary' | 'default' | 'secondary' | 'outline' | 'dashed' | 'link' | 'text'
  danger: boolean
}

const Button = ({
  block,
  className,
  children,
  disabled = false,
  onClick,
  icon,
  loading = false,
  shadow = true,
  size = 'medium',
  style,
  type = 'primary',
  danger,
  ...props
} : Props) => {
  // default classes
  let classes = []
  let containerClasses = ['sbui-btn-container']

  // if (type !== 'ghost' && shadow) {
  //   containerClasses.push('sbui-btn--shadow')
  // }

  if (block) {
    containerClasses.push('sbui-btn--w-full')
    classes.push('sbui-btn--w-full')
  }

  if (icon) {
    classes.push('sbui-btn--with-icon')
  }

  if (danger ) {
    classes.push('sbui-btn--danger')
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
          className={`sbui-btn ${classes.join(' ')} ${classes.join(
            ' '
          )} ${className}`}
          disabled={loading || (disabled && true)}
          onClick={onClick}
          style={style}
          type="button"
        >
          {showIcon && (
          <Transition
            show={showIcon ? true : false}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {loading ? (
              <Icon
                size={size}
                className={'sbui-btn--anim--spin'}
                type={'Loader'}
              />
            ) : icon ? (
              <IconContext.Provider value={{contextSize: size}}>{icon}</IconContext.Provider>
            ) : null}
          </Transition>
          )}
          {children && <span>{children}</span>}
        </button>
      </span>
    </React.Fragment>
  )
}

export default Button
