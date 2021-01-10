import React, { useRef, useState } from 'react'

import { Button } from '.'
import { Icon } from '../Icon'

export default {
  title: 'General/Button',
  component: Button,
}

export const Default = (args: any) => <Button {...args}>Button text</Button>
export const withStyles = (args: any) => <Button {...args}>Button text</Button>
export const withIcon = (args: any) => <Button {...args}>Button text</Button>
export const withIconRight = (args: any) => <Button {...args}>Button text</Button>
export const withBlock = (args: any) => <Button {...args}>Button text</Button>
export const withOnlyIcon = (args: any) => <Button {...args}/>
export const withOnlyLoading = (args: any) => <Button {...args}/>
export const withRef = () => { 
  const buttonRef = useRef(null)
  const [msg, setMsg] = useState("Click button to console.log Ref")

  function onClick() {
    const message = `Ref: ${buttonRef?.current}`
    setMsg(message)
    console.log(message)
  }

  return(
  <>
    <Button ref={buttonRef} onClick={onClick}>
      Button with forwardRef
    </Button>

    <p style={{color: '#666666'}}>{msg}</p>
  </>
  )
}

const icon = <Icon type={"Package"}/>

withIcon.args = {
  type: 'primary',
  icon: icon,
}

withIconRight.args = {
  type: 'primary',
  iconRight: <Icon type={"ChevronRight"} strokeWidth={2}/>,
}

withStyles.args = {
  type: 'primary',
  style: {backgroundColor: 'red', color: 'yellow'}
}

withBlock.args = {
  type: 'primary',
  block: true
}

withOnlyIcon.args = {
  icon: icon
}

withOnlyLoading.args = {
  loading: true
}