import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  ComponentType,
  ElementType,
  WeakValidationMap,
  ValidationMap,
  ComponentProps,
  ComponentPropsWithoutRef,
  ForwardedRef,
  ComponentPropsWithRef,
  Ref,
  PropsWithChildren,
  ReactElement,
} from 'react'
import { c8s } from '../../lib/utilities'
import {
  RefForwardingComponentWithAsProps,
  ComponentWithAsProps,
  AsPropsWithoutRef,
} from '../../types'

// @ts-ignore
import ButtonStyles from './Button.module.css'
import { IconContext } from '../Icon/IconContext'
import { IconLoader } from '../Icon/icons/IconLoader'

export type ButtonProps = {
  block?: boolean
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
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
  danger?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  containerRef?: Ref<HTMLSpanElement>
}
type ButtonComponent = RefForwardingComponentWithAsProps<'button', ButtonProps>

const Button: ButtonComponent = forwardRef(
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
      loadingCentered = false,
      shadow = true,
      size = 'tiny',
      style,
      type = 'primary',
      htmlType,
      ariaSelected,
      ariaControls,
      tabIndex,
      role,
      as,
      containerRef,
      ...props
    },
    ref
  ) => {
    // styles
    const showIcon = loading || icon

    const classes = c8s(
      ButtonStyles['sbui-btn'],
      ButtonStyles[`sbui-btn-${type}`],
      block && ButtonStyles['sbui-btn--w-full'],
      danger && ButtonStyles['sbui-btn--danger'],
      shadow &&
        type !== 'link' &&
        type !== 'text' &&
        ButtonStyles['sbui-btn-container--shadow'],
      size && ButtonStyles[`sbui-btn--${size}`],
      className,
      loading && loadingCentered && ButtonStyles[`sbui-btn--text-fade-out`]
    )

    const containerClasses = c8s(
      ButtonStyles['sbui-btn-container'],
      block && ButtonStyles['sbui-btn--w-full']
    )

    const iconLoaderClasses = c8s(
      ButtonStyles['sbui-btn--anim--spin'],
      loadingCentered && ButtonStyles[`sbui-btn-loader--center`]
    )

    const _icon = icon ? (
      <IconContext.Provider value={{ contextSize: size }}>
        {icon}
      </IconContext.Provider>
    ) : null

    const Component = as || 'button'

    return (
      <span ref={containerRef} className={containerClasses}>
        <Component
          {...props}
          ref={ref}
          className={classes}
          disabled={loading || (disabled && true)}
          onClick={onClick}
          style={style}
          type={htmlType}
          aria-selected={ariaSelected}
          aria-controls={ariaControls}
          tabIndex={tabIndex}
          role={role}
        >
          {showIcon &&
            (loading ? (
              <IconLoader size={size} className={iconLoaderClasses} />
            ) : (
              _icon
            ))}
          {children && <span>{children}</span>}
          {iconRight && !loading && (
            <IconContext.Provider value={{ contextSize: size }}>
              {iconRight}
            </IconContext.Provider>
          )}
        </Component>
      </span>
    )
  }
)

export default Button
