import React from 'react'

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