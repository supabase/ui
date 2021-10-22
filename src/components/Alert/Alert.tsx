import React, { useState } from 'react'
import { IconAlertTriangle } from '../Icon/icons/IconAlertTriangle'
import { IconCheck } from '../Icon/icons/IconCheck'
import { IconInfo } from '../Icon/icons/IconInfo'
import { IconX } from '../Icon/icons/IconX'
import { IconXCircle } from '../Icon/icons/IconXCircle'

// @ts-ignore
import AlertStyles from './Alert.module.css'

interface Props {
  variant?: 'success' | 'danger' | 'warning' | 'info'
  className?: string
  title: string
  withIcon?: boolean
  closable?: boolean
  children?: React.ReactNode
}

const icons: Record<
  'success' | 'danger' | 'warning' | 'info',
  React.ReactElement
> = {
  danger: <IconXCircle size="medium" />,
  success: <IconCheck size="medium" />,
  warning: <IconAlertTriangle size="medium" />,
  info: <IconInfo size="medium" />,
}

const Alert = ({
  variant = 'success',
  className,
  title,
  withIcon,
  closable,
  children,
}: Props) => {
  const [visible, setVisible] = useState(true)
  let containerClasses = [AlertStyles['sbui-alert-container']]
  containerClasses.push(AlertStyles[`sbui-alert-container--${variant}`])
  if (className) containerClasses.push(className)
  let descriptionClasses = [AlertStyles['sbui-alert-description']]
  descriptionClasses.push(AlertStyles[`sbui-alert-description--${variant}`])
  let closeButtonClasses = [AlertStyles['sbui-close-button']]
  closeButtonClasses.push(AlertStyles[`sbui-close-button--${variant}`])

  return (
    <>
      {visible && (
        <div className={containerClasses.join(' ')}>
          <div className="flex">
            <div className="flex-shrink-0">{withIcon && icons[variant]}</div>
            <div className="ml-3">
              <h3 className="sbui-alert-title">{title}</h3>
              <div className={descriptionClasses.join(' ')}>{children}</div>
            </div>
            {closable && (
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    aria-label="Close alert"
                    onClick={() => setVisible(false)}
                    className={closeButtonClasses.join(' ')}
                  >
                    <IconX size="xlarge" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
