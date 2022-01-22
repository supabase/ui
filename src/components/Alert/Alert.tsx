import React, { useState } from 'react'
import { IconAlertTriangle } from '../Icon/icons/IconAlertTriangle'

import { IconInfo } from '../Icon/icons/IconInfo'
import { IconX } from '../Icon/icons/IconX'

// @ts-ignore
// import AlertStyles from './Alert.module.css'
import styleHandler from '../../lib/theme/styleHandler'
import { IconAlertOctagon } from '../Icon/icons/IconAlertOctagon'
import { IconCheckCircle } from '../Icon/icons/IconCheckCircle'

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
  danger: <IconAlertOctagon strokeWidth={2} size="medium" />,
  success: <IconCheckCircle strokeWidth={2} size="medium" />,
  warning: <IconAlertTriangle strokeWidth={2} size="medium" />,
  info: <IconInfo strokeWidth={2} size="medium" />,
}

function Alert({
  variant = 'success',
  className,
  title,
  withIcon,
  closable,
  children,
}: Props) {
  let __styles = styleHandler('alert')

  const [visible, setVisible] = useState(true)

  let containerClasses = [__styles.base]
  containerClasses.push(__styles.type[variant])
  if (className) containerClasses.push(className)

  let descriptionClasses = [__styles.description[variant]]
  let closeButtonClasses = [__styles.close]

  return (
    <>
      {visible && (
        <div className={containerClasses.join(' ')}>
          {withIcon && <div>{withIcon && icons[variant]}</div>}
          <div>
            <span className={__styles.title}>{title}</span>
            <div className={descriptionClasses.join(' ')}>{children}</div>
          </div>
          {closable && (
            <button
              aria-label="Close alert"
              onClick={() => setVisible(false)}
              className={closeButtonClasses.join(' ')}
            >
              <IconX strokeWidth={2} />
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default Alert
