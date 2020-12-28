import React from 'react'
// import { AutoForm } from 'uniforms'

import { Input } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/Input',
  component: Input,
}

export const Default = (args) => <Input {...args} />

export const ErrorState = (args) => <Input {...args} />

export const withIcon = (args) => <Input {...args} />

export const withOption = (args) => <Input {...args} />

export const withDescription = (args) => <Input {...args} />

const icon = <Icon stroke={'#666666'} className={''} type={"Package"}/>

Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  className: 'font-sans',
  value: 'Value of input',
  layout: 'vertical'
}

ErrorState.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  error: 'Your password must be less than 4 characters.'
}

withIcon.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an icon',
  className: 'font-sans',
  value: 'Value of input',
  icon: icon
}

withOption.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  labelOptional: 'This is required'
}

withDescription.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  descriptionText: 'Make your password short and easy to guess'
}
