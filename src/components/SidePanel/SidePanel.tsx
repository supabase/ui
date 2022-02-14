import React from 'react'
import { Button } from '../../index'
import * as Dialog from '@radix-ui/react-dialog'
import styleHandler from '../../lib/theme/styleHandler'

export type SidePanelProps = RadixProps & CustomProps

interface RadixProps
  extends Dialog.DialogProps,
    Pick<
      Dialog.DialogContentProps,
      | 'onOpenAutoFocus'
      | 'onCloseAutoFocus'
      | 'onEscapeKeyDown'
      | 'onPointerDownOutside'
      | 'onInteractOutside'
    > {}

interface CustomProps {
  id?: String | undefined
  className?: String
  children?: React.ReactNode
  header?: React.ReactNode
  visible: boolean
  size?: 'medium' | 'large'
  loading?: boolean
  align?: 'right' | 'left'
  hideFooter?: boolean
  customFooter?: React.ReactNode
  onCancel?: () => void
  cancelText?: String
  onConfirm?: () => void
  confirmText?: String
  triggerElement?: React.ReactNode
}

const SidePanel = ({
  id,
  className,
  children,
  header,
  visible,
  open,
  size = 'medium',
  loading,
  align = 'right',
  hideFooter = false,
  customFooter = undefined,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  triggerElement,
  defaultOpen,
  ...props
}: SidePanelProps) => {
  const __styles = styleHandler('sidepanel')

  // function stopPropagation(e: React.MouseEvent) {
  //   e.stopPropagation()
  // }

  const footerContent = customFooter ? (
    customFooter
  ) : (
    <div className={__styles.footer}>
      <Button
        disabled={loading}
        type="secondary"
        onClick={() => (onCancel ? onCancel() : null)}
      >
        {cancelText}
      </Button>
      <Button
        loading={loading}
        onClick={() => (onConfirm ? onConfirm() : null)}
      >
        {confirmText}
      </Button>
    </div>
  )

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      if (onCancel) onCancel()
    } else {
      // un-controlled component behaviour
      // setOpen(open)
    }
  }

  open = open || visible

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleOpenChange}
      defaultOpen={defaultOpen}
    >
      {triggerElement && (
        <Dialog.Trigger className={__styles.trigger}>
          {triggerElement}
        </Dialog.Trigger>
      )}

      <Dialog.Overlay className={__styles.overlay} />
      <Dialog.Content
        className={[
          __styles.base,
          __styles.size[size],
          __styles.align[align],
          className && className,
        ].join(' ')}
        onOpenAutoFocus={props.onOpenAutoFocus}
        onCloseAutoFocus={props.onCloseAutoFocus}
        onEscapeKeyDown={props.onEscapeKeyDown}
        onPointerDownOutside={props.onPointerDownOutside}
        onInteractOutside={props.onInteractOutside}
      >
        {header && <header className={__styles.header}>{header}</header>}
        <div className={__styles.content}>{children}</div>
        {!hideFooter && footerContent}
      </Dialog.Content>
    </Dialog.Root>
  )
}

export function Seperator() {
  let __styles = styleHandler('sidepanel')

  return <div className={__styles.seperator}></div>
}

SidePanel.Seperator = Seperator
export default SidePanel
