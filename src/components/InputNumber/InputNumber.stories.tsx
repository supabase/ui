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
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  layout: 'vertical',
}
