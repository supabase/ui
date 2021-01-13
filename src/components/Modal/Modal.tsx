import React from 'react'
import './Modal.css'
import { Button, Transition, Icon, Typography, Space } from './../../index'

interface Props {
  className?: string
  children?: React.ReactNode
  title?: string
  description?: string
  variant?: 'alert' | 'warning' | 'success'
  showIcon?: boolean
  visible: boolean
  onConfirmText?: string
  onCancelText?: string
  onCancel?: any
  onConfirm?: any
  customFooter?: React.ReactNode
  hideFooter?: boolean
  loading?: boolean
}

const Modal = ({
  className = '',
  children,
  title,
  description,
  variant = 'success',
  showIcon = false,
  visible = false,
  onConfirmText = 'Confirm',
  onCancelText = 'Cancel',
  onCancel,
  onConfirm,
  customFooter = undefined,
  hideFooter = false,
  loading = false,
}: Props) => {
  let icon = {
    alert: <Icon size={24} strokeWidth={2} type="AlertCircle" />,
    warning: <Icon size={24} strokeWidth={2} type="AlertCircle" />,
    success: <Icon size={24} strokeWidth={2} type="Check" />,
  }

  let iconClasses = ['sbui-modal-icon-container']
  iconClasses.push(`sbui-modal-icon-container--${variant}`)

  const iconMarkup = showIcon && (
    <div className={iconClasses.join(' ')}>{icon[variant]}</div>
  )

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  return (
    <Transition
      show={visible}
      enter="ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={'sbui-modal-container ' + className}
        onClick={() => (onCancel ? onCancel() : null)}
      >
        <div className="sbui-modal-flex-container">
          <div className="sbui-modal-overlay-container">
            <div className="sbui-modal-overlay"></div>
          </div>
          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="sbui-modal-div-trick"></span>
          &#8203;
          <Transition
            show={visible}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="sbui-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              onClick={stopPropagation}
            >
              <div className="sbui-modal-content">
                <Space size={5} style={{ alignItems: 'flex-start' }}>
                  {iconMarkup}
                  <div>
                    <Space
                      size={4}
                      direction="vertical"
                      style={{ alignItems: 'flex-start' }}
                    >
                      <div>
                        {title && (
                          <Typography.Title
                            style={{
                              marginBottom: '.5rem',
                              marginTop: '0',
                            }}
                            level={4}
                          >
                            {title}
                          </Typography.Title>
                        )}
                        {description && (
                          <Typography.Text>{description}</Typography.Text>
                        )}
                      </div>
                      {children}
                    </Space>
                  </div>
                </Space>
              </div>

              {!hideFooter && (
                <div className="sbui-modal-footer">
                  {customFooter ? (
                    customFooter
                  ) : (
                    <Space>
                      <Button
                        type="outline"
                        onClick={() => (onCancel ? onCancel() : null)}
                        disabled={loading}
                      >
                        {onCancelText}
                      </Button>
                      <Button
                        onClick={() => (onConfirm ? onConfirm() : null)}
                        loading={loading}
                      >
                        {onConfirmText}
                      </Button>
                    </Space>
                  )}
                </div>
              )}
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  )
}

export default Modal
