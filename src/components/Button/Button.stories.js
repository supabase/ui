import React from 'react'

import { Button } from '.'
import { Icon } from '../Icon'

export default {
  title: 'General/Button',
  component: Button,
}

export const Default = (args) => <Button {...args}>Button text</Button>
export const withStyles = (args) => <Button {...args}>Button text</Button>
export const withIcon = (args) => <Button {...args}>Button text</Button>
export const withBlock = (args) => <Button {...args}>Button text</Button>

const icon = <Icon stroke={'#666666'} className={''} type={"Package"}/>

withIcon.args = {
  type: 'primary',
  icon: icon,
  // style: {backgroundColor: 'red'}
}

withStyles.args = {
  type: 'primary',
  style: {backgroundColor: 'red', color: 'yellow'}
}

withBlock.args = {
  type: 'primary',
  block: true
}