import React, { forwardRef, useRef, useImperativeHandle } from 'react'
// @ts-ignore
import ButtonStyles from './Button.module.css'
import { IconContext } from '../Icon/IconContext'
import { IconLoader } from '../Icon/icons/IconLoader'
import { c8s } from '../../lib/utilities'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  className?: any
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
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
  ref?: any
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  as?: keyof JSX.IntrinsicElements
}

interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export interface RefHandle {
  container: () => HTMLElement
  button: () => HTMLButtonElement
}

const Button = forwardRef<RefHandle, ButtonProps>(
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
      ...props
    }: ButtonProps,
    ref
  ) => {
    // button ref
    const containerRef = useRef()
    const buttonRef = useRef()

    useImperativeHandle(ref, () => ({
      get container() {
        return containerRef.current
      },
      get button() {
        return buttonRef.current
      },
    }))

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

    // custom button tag
    const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }

    const RenderedButton = ({ children }: any) =>
      as ? (
        <CustomButton className={classes} onClick={onClick} style={style}>
          {children}
        </CustomButton>
      ) : (
        <button
          {...props}
          ref={buttonRef}
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
          {children}
        </button>
      )

    return (
      <span ref={containerRef} className={containerClasses}>
        <RenderedButton>
          {showIcon &&
            (loading ? (
              <IconLoader size={size} className={iconLoaderClasses} />
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
        </RenderedButton>
      </span>
    )
  }
)

export default Button
