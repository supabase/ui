import React from 'react'

import { RadioGroup } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/RadioGroup',
  component: RadioGroup,
}

export const Default = (args) => (
  <RadioGroup {...args}/>
)

const data = ['England', 'Wales', 'Scotland', 'Ireland']
const icon = <Icon type={'email'} className="" />

Default.args = {
  disabled: false,
  label: 'Label',
  className: 'font-sans',
  name: 'radiogroup-example',
  options: [
    {
      id: 'radiogroup-1',
      label: 'I am number 1',
      description: 'This is the description',
      active: true,
      value: 1
    },
    {
      id: 'radiogroup-2',
      label: 'I am number 2',
      description: 'This is the description',
      active: false,
      value: 2
    },
    {
      id: 'radiogroup-3',
      label: 'I am number 3',
      description: 'This is the description',
      active: false,
      value: 3
    }
  ]
}
