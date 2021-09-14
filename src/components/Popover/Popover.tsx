import React, { useState } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'
import type * as RadixPopoverTypes from '@radix-ui/react-popover/'

import { IconCheck } from '../Icon/icons/IconCheck'

// @ts-ignore
import DropdownStyles from './Popover.module.css'

// import type * as RadixDropdownTypes from '@radix-ui/react-dropdown-menu/'
import { IconX } from '../Icon/icons/IconX'

interface RootProps {
  align?: RadixPopoverTypes.PopoverContentProps['align']
  ariaLabel?: string
  arrow?: boolean
  children?: React.ReactNode
  className?: string
  defaultOpen?: boolean
  modal?: boolean
  onOpenChange?: RadixPopoverTypes.PopoverProps['onOpenChange']
  open?: boolean
  overlay?: React.ReactNode
  portalled?: boolean
  showClose?: boolean
  side?: RadixPopoverTypes.PopoverContentProps['side']
  sideOffset?: RadixPopoverTypes.PopoverContentProps['sideOffset']
  style?: React.CSSProperties
}

function Popover({
  align = 'center',
  ariaLabel,
  arrow = false,
  children,
  className,
  defaultOpen = false,
  modal,
  onOpenChange,
  open,
  overlay,
  portalled,
  showClose,
  side = 'bottom',
  sideOffset = 6,
  style,
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
        sideOffset={sideOffset}
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
