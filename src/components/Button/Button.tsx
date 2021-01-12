import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import './Button.css'
// @ts-ignore
import { Icon } from '../../index'
import { IconContext } from '../Icon/IconContext'

interface Props {
  block?: boolean
  className?: any
  children: React.ReactNode
  danger?: boolean
  disabled?: boolean
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
  ref: any
}

interface RefHandle {
  container: () => HTMLElement
  button: () => HTMLButtonElement
}

const Button = forwardRef<RefHandle, Props>(
  (
    {
      block,
      className,
      children,
      danger,
      disabled = false,
      onClick,
      icon,
      iconRight,
      loading = false,
      shadow = true,
      size = 'medium',
      style,
      type = 'primary',
      htmlType,
    }: Props,
    ref
  ) => {
    const containerRef = useRef()
    const buttonRef = useRef()
    const showIcon = loading || icon

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef.current
      },
      get button() {
        return buttonRef.current
      },
    }))

    let classes = ['sbui-btn']
    let containerClasses = ['sbui-btn-container']

    classes.push(`sbui-btn-${type}`)

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

    if (className) {
      classes.push(className)
    }

    return (
      <span ref={containerRef} className={containerClasses.join(' ')}>
        <button
          ref={buttonRef}
          className={classes.join(' ')}
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
    )
  }
)

export default Button
