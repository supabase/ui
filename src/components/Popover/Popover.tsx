import React, { useState } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'
import type * as RadixPopoverTypes from '@radix-ui/react-popover/'

import { IconCheck } from '../Icon/icons/IconCheck'

// @ts-ignore
import DropdownStyles from './Popover.module.css'

// import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/'
import { IconX } from '../Icon/icons/IconX'

interface RootProps {
  open?: boolean
  arrow?: boolean
  onOpenChange?: RadixPopoverTypes.PopoverOwnProps['onOpenChange']
  side?: RadixPopoverTypes.PopoverContentOwnProps['side']
  align?: RadixPopoverTypes.PopoverContentOwnProps['align']
  overlay?: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  defaultOpen?: boolean
  modal?: boolean
  ariaLabel?: string

  portalled?: boolean
  showClose?: boolean
}

function Popover({
  open,
  onOpenChange,
  align = 'center', //Default value
  side = 'bottom', //Default value
  overlay,
  children,
  className,
  style,
  arrow,
  defaultOpen = false,
  modal,
  ariaLabel,
  portalled,
  showClose,
}: RootProps) {
  let classes = [DropdownStyles['sbui-popover__content']]
  if (className) {
    classes.push(className)
  }

  return (
    <RadixPopover.Root
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      <RadixPopover.Trigger
        className={DropdownStyles['sbui-popover__trigger']}
        aria-label={ariaLabel}
      >
        {children}
      </RadixPopover.Trigger>

      <RadixPopover.Content
        sideOffset={8}
        side={side}
        align={align}
        className={classes.join(' ')}
        style={style}
        portalled={portalled}
      >
        {arrow && (
          <RadixPopover.Arrow
            className={DropdownStyles['sbui-popover__arrow']}
            offset={10}
          ></RadixPopover.Arrow>
        )}
        {overlay}
        {showClose && (
          <RadixPopover.Close className={DropdownStyles['sbui-popover__close']}>
            <IconX size={16} />
          </RadixPopover.Close>
        )}
      </RadixPopover.Content>
    </RadixPopover.Root>
  )
}

export default Popover
