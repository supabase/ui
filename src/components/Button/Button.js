import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import { Transition, Icon } from '../../index'
import { IconContext } from './../Icon/IconContext'

export const SIZES = ['tiny', 'small', 'medium', 'large', 'xlarge']
export const VARIANTS = ['primary', 'default', 'secondary', 'outline', 'dashed', 'link', 'text']

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
}) => {
  // default classes
  let classes = []
  let containerClasses = ['sbui-btn-container']

  if (type !== 'ghost' && shadow) {
    containerClasses.push('sbui-btn--shadow')
  }

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
          {...props}
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

Button.propTypes = {
  size: PropTypes.oneOf(SIZES),
  type: PropTypes.oneOf(VARIANTS),
  block: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  danger: PropTypes.bool
}

export default Button
