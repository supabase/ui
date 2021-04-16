import React from 'react'
// @ts-ignore
import ModalStyles from './Modal.module.css'
import { Button, IconX, Typography, Space } from './../../index'
import { AnimationTailwindClasses } from '../../types'

import { Transition } from '@headlessui/react'

// import { Transition } from '@tailwindui/react'

interface Props {
  children?: React.ReactNode
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
  style?: React.CSSProperties
  overlayStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  className?: string
  overlayClassName?: string
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
}

const Modal = ({
  children,
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
  style,
  overlayStyle,
  contentStyle,
  className = '',
  overlayClassName,
  transition,
  transitionOverlay,
}: Props) => {
  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  let footerClasses = [ModalStyles['sbui-modal-footer']]
  if (footerBackground) {
    footerClasses.push(ModalStyles['sbui-modal-footer--with-bg'])
  }

  let modalClasses = [
    ModalStyles[`sbui-modal`],
    ModalStyles[`sbui-modal--${size}`],
  ]
  if (className) modalClasses.push(className)

  let overlayClasses = [ModalStyles['sbui-modal-overlay']]
  if (overlayClassName) overlayClasses.push(overlayClassName)

  console.log('onConfirmText', onConfirmText)

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
      >
        {onCancelText}
      </Button>
      <Button
        onClick={() => (onConfirm ? onConfirm() : null)}
        loading={loading}
        danger={variant === 'danger'}
      >
        {onConfirmText}
      </Button>
    </Space>
  )

  return (
    <Transition show={visible}>
      <Transition.Child
        enter={ModalStyles[`sbui-modal-overlay--enter`]}
        enterFrom={ModalStyles[`sbui-modal-overlay--enterFrom`]}
        enterTo={ModalStyles[`sbui-modal-overlay--enterTo`]}
        leave={ModalStyles[`sbui-modal-overlay--leave`]}
        leaveFrom={ModalStyles[`sbui-modal-overlay--leaveFrom`]}
        leaveTo={ModalStyles[`sbui-modal-overlay--leaveTo`]}
      >
        <div
          className={ModalStyles['sbui-modal-container'] + ' ' + className}
          onClick={() => (onCancel ? onCancel() : null)}
        >
          <div className={ModalStyles['sbui-modal-flex-container']}>
            <div className={ModalStyles['sbui-modal-overlay-container']}>
              <div
                className={overlayClasses.join(' ')}
                style={overlayStyle}
              ></div>
            </div>
            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span className={ModalStyles['sbui-modal-div-trick']}></span>
            <Transition.Child
              enter={ModalStyles[`sbui-modal--enter`]}
              enterFrom={ModalStyles[`sbui-modal--enterFrom`]}
              enterTo={ModalStyles[`sbui-modal--enterTo`]}
              leave={ModalStyles[`sbui-modal--leave`]}
              leaveFrom={ModalStyles[`sbui-modal--leaveFrom`]}
              leaveTo={ModalStyles[`sbui-modal--leaveTo`]}
              className="fixed inset-0 overflow-y-auto"
            >
              <div
                className={modalClasses.join(' ')}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
                onClick={stopPropagation}
                style={style}
              >
                <div
                  className={ModalStyles['sbui-modal-content']}
                  style={contentStyle}
                >
                  <Space
                    size={5}
                    style={{
                      alignItems:
                        layout === 'vertical' ? 'center' : 'flex-start',
                    }}
                    direction={layout}
                  >
                    {icon ? icon : null}
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
                      icon={<IconX size="medium" />}
                    />
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  )
}

export default Modal
