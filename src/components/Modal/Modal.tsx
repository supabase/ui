import React from 'react'
// @ts-ignore
import ModalStyles from './Modal.module.css'
import { Button, Transition, Icon, Typography, Space } from './../../index'

interface Props {
  children?: React.ReactNode
  className?: string
  customFooter?: React.ReactNode
  closable?: boolean
  description?: string
  hideFooter?: boolean
  alignFooter?: 'right' | 'left'
  layout?: 'horizontal' | 'vertical'
  icon?: React.ReactNode
  loading?: boolean
  onCancel?: any
  onCancelText?: string
  onConfirm?: any
  onConfirmText?: string
  showIcon?: boolean
  footerBackground?: boolean
  title?: string
  variant?: 'danger' | 'warning' | 'success'
  visible: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
}

const Modal = ({
  children,
  className = '',
  customFooter = undefined,
  closable,
  description,
  hideFooter = false,
  alignFooter = 'left',
  layout = 'horizontal',
  loading = false,
  onCancel,
  onCancelText = 'Cancel',
  onConfirm,
  onConfirmText = 'Confirm',
  showIcon = false,
  title,
  footerBackground,
  icon,
  variant = 'success',
  visible = false,
  size = 'large',
}: Props) => {
  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  let footerClasses = [ModalStyles['sbui-modal-footer']]
  if (footerBackground) {
    footerClasses.push(ModalStyles['sbui-modal-footer--with-bg'])
  }

  const footerContent = customFooter ? (
    customFooter
  ) : (
    <Space
      style={{
        width: '100%',
        justifyContent:
          layout === 'vertical'
            ? 'center'
            : alignFooter === 'right'
            ? 'flex-end'
            : 'flex-start',
      }}
    >
      <Button
        type="outline"
        onClick={() => (onCancel ? onCancel() : null)}
        disabled={loading}
        danger={variant === 'danger'}
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
  )

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
        className={ModalStyles['sbui-modal-container'] + ' ' + className}
        onClick={() => (onCancel ? onCancel() : null)}
      >
        <div className={ModalStyles['sbui-modal-flex-container']}>
          <div className={ModalStyles['sbui-modal-overlay-container']}>
            <div className={ModalStyles['sbui-modal-overlay']}></div>
          </div>
          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className={ModalStyles['sbui-modal-div-trick']}></span>
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
              className={ModalStyles[`sbui-modal sbui-modal--${size}`]}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              onClick={stopPropagation}
            >
              <div className={ModalStyles['sbui-modal-content']}>
                <Space
                  size={5}
                  style={{ alignItems: 'flex-start' }}
                  direction={layout}
                >
                  {icon ? icon : null}
                  <div style={{ display: icon ? 'block' : 'contents' }}>
                    <Space
                      size={4}
                      direction="vertical"
                      style={{
                        alignItems: 'flex-start',
                        textAlign: layout === 'vertical' ? 'center' : null,
                        width: '100%',
                      }}
                    >
                      <span style={{ width: 'inherit' }}>
                        {title && (
                          <Typography.Title
                            style={{
                              marginBottom: '.1rem',
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
                      </span>

                      {children}
                      {!footerBackground && !hideFooter && footerContent}
                    </Space>
                  </div>
                </Space>
              </div>
              {!hideFooter && footerBackground && (
                <div className={footerClasses.join(' ')}>{footerContent}</div>
              )}
              {closable && (
                <div className={ModalStyles['sbui-modal-close-container']}>
                  <Button
                    onClick={onCancel}
                    type="text"
                    shadow={false}
                    icon={<Icon size="medium" type="X" />}
                  />
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
