import React, { useState } from 'react'

import { Transition } from '../../components/Transition'

//@ts-ignore
import Hooks from './../../lib/Hooks'
import { DropdownContext } from './OverlayContext'

import './Overlay.css'

interface Props {
  visible?: boolean
  overlay?: React.ReactNode
  children?: React.ReactNode
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'topLeft'
    | 'topRight'
    | 'topCentre'
  onVisibleChange?: any
  disabled?: boolean
  triggerElement?: any
}

function Overlay({
  visible,
  overlay,
  children,
  placement = 'topCentre',
  onVisibleChange,
  disabled,
  triggerElement,
}: Props) {
  const [visibleState, setVisibleState] = useState(false)

  function onToggle() {
    setVisibleState(!visibleState)
    if (onVisibleChange) onVisibleChange(visibleState)
  }

  // allow ovveride of Dropdown
  if (visible) {
    setVisibleState(visible)
  }

  const clickContainerRef = Hooks.clickOutsideListener((event: any) => {
    if (visibleState) setVisibleState(!visibleState)
  })

  const TriggerElement = () => {
    return <div onClick={onToggle}>{triggerElement}</div>
  }

  return (
    <div ref={clickContainerRef} className="sbui-overlay">
      {placement === 'bottomRight' ||
      placement === 'bottomLeft' ||
      placement === 'bottomCenter' ? (
        <TriggerElement />
      ) : null}
      <Transition
        show={visibleState}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`sbui-overlay-container sbui-overlay-container--${placement}`}
        >
          <DropdownContext.Provider value={{ onClick: onToggle }}>
            {children}
          </DropdownContext.Provider>
        </div>
      </Transition>
      {placement === 'topRight' ||
      placement === 'topLeft' ||
      placement === 'topCentre' ? (
        <TriggerElement />
      ) : null}
    </div>
  )
}

export default Overlay
