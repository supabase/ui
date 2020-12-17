import React from 'react'
import { AutoForm } from 'uniforms'

import { TextField } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/TextField',
  component: TextField,
}

export const Default = (args) => <TextField {...args} />

export const ErrorState = (args) => <TextField {...args} />

export const withIcon = (args) => <TextField {...args} />

export const withOption = (args) => <TextField {...args} />

export const withDescription = (args) => <TextField {...args} />

const icon = <Icon type={'email'} className=""/>

Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  className: 'font-sans',
  value: 'Value of input'
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
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  error: 'Your password must be less than 4 characters.',
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
