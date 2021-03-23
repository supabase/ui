import React from 'react'
// import { AutoForm } from 'uniforms'

import { InputNumber } from '.'
import { IconPackage } from './../../index'
import { Button } from '../Button'
import { Space } from '../Space'

export default {
  title: 'Data Input/InputNumber',
  component: InputNumber,
}

export const Default = (args: any) => <InputNumber {...args} />

Default.args = {
  label: 'Max of 100 and min of 0',
  disabled: false,
  layout: 'vertical',
  max: 100,
  min: 0,
}
