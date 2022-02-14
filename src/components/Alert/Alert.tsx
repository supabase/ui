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
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
  className?: string
  title: string
  withIcon?: boolean
  closable?: boolean
  children?: React.ReactNode
  icon?: React.ReactNode
}

const icons: Record<
  'success' | 'danger' | 'warning' | 'info' | 'neutral',
  React.ReactElement
> = {
  danger: <IconAlertOctagon strokeWidth={1.5} size="medium" />,
  success: <IconCheckCircle strokeWidth={1.5} size="medium" />,
  warning: <IconAlertTriangle strokeWidth={1.5} size="medium" />,
  info: <IconInfo strokeWidth={1.5} size="medium" />,
  neutral: <></>,
}

function Alert({
  variant = 'neutral',
  className,
  title,
  withIcon,
  closable,
  children,
  icon,
}: Props) {
  let __styles = styleHandler('alert')

  const [visible, setVisible] = useState(true)

  let containerClasses = [__styles.base]
  containerClasses.push(__styles.variant[variant].base)

  if (className) containerClasses.push(className)

  let descriptionClasses = [
    __styles.description,
    __styles.variant[variant].description,
  ]
  let closeButtonClasses = [__styles.close]

  return (
    <>
      {visible && (
        <div className={containerClasses.join(' ')}>
          {withIcon ? (
            <div className={__styles.variant[variant].icon}>
              {withIcon && icons[variant]}
            </div>
          ) : null}
          {icon && icon}
          <div>
            <h3
              className={[
                __styles.variant[variant].header,
                __styles.header,
              ].join(' ')}
            >
              {title}
            </h3>
            <div className={descriptionClasses.join(' ')}>{children}</div>
          </div>
          {closable && (
            <button
              aria-label="Close alert"
              onClick={() => setVisible(false)}
              className={closeButtonClasses.join(' ')}
            >
              <IconX strokeWidth={1.5} size={14} />
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default Alert
