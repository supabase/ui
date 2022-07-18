import React, { useEffect } from 'react'
import { Button, Space } from './../../index'
import { AnimationTailwindClasses } from '../../types'

import * as Dialog from '@radix-ui/react-dialog'

import styleHandler from '../../lib/theme/styleHandler'

export interface ModalProps {
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
  cancelText?: string
  onConfirm?: any
  confirmText?: string
  showIcon?: boolean
  footerBackground?: boolean
  title?: string | React.ReactNode
  variant?: 'danger' | 'warning' | 'success'
  visible: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  style?: React.CSSProperties
  overlayStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  className?: string
  overlayClassName?: string
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
  triggerElement?: React.ReactNode
  header?: React.ReactNode
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
  cancelText = 'Cancel',
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = 'Confirm',
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
  triggerElement,
  header,
}: ModalProps) => {
  const [open, setOpen] = React.useState(visible ? visible : false)

  const __styles = styleHandler('modal')

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  // let footerClasses = [ModalStyles['sbui-modal-footer']]
  if (footerBackground) {
    // footerClasses.push(ModalStyles['sbui-modal-footer--with-bg'])
  }

  let modalClasses = [
    __styles.base,
    // ModalStyles[`sbui-modal`],
    // ModalStyles[`sbui-modal--${size}`],
  ]
  // if (className) modalClasses.push(className)

  // let overlayClasses = [ModalStyles['sbui-modal-overlay']]
  // if (overlayClassName) overlayClasses.push(overlayClassName)

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
      <Button type="secondary" onClick={onCancel} disabled={loading}>
        {cancelText}
      </Button>
      <Button
        onClick={onConfirm}
        loading={loading}
        danger={variant === 'danger'}
      >
        {confirmText}
      </Button>
    </Space>
  )

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      onCancel()
    } else {
      // un-controlled component behaviour
      setOpen(open)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {triggerElement && (
        <Dialog.Trigger
        // className={ModalStyles[`sbui-modal__trigger`]}
        >
          {triggerElement}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className={__styles.overlay} />
        <Dialog.Overlay className={__styles.scroll_overlay}>
          <Dialog.Content
            className={[__styles.base, __styles.size[size]].join(' ')}
          >
            {header && <div className={__styles.header}>{header}</div>}
            {/* <div
              className={ModalStyles['sbui-modal-content']}
              style={contentStyle}
            > */}
            {children}
            {/* </div> */}
            {!hideFooter && (
              <div className={__styles.footer}>{footerContent}</div>
            )}
            {/* {closable && (
              <div className={ModalStyles['sbui-modal-close-container']}>
                <Button
                  onClick={onCancel}
                  type="text"
                  shadow={false}
                  icon={<IconX size="medium" />}
                />
              </div>
            )} */}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export interface ContentProps {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  const __styles = styleHandler('modal')
  return <div className={__styles.content}>{children}</div>
}

export function Seperator() {
  const __styles = styleHandler('modal')

  return <div className={__styles.seperator}></div>
}

Modal.Content = Content
Modal.Seperator = Seperator
export default Modal
