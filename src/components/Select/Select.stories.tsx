import React from 'react'

import { Select } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/Select',
  component: Select,
}

export const Default = (args) => (
  <Select {...args}>
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withCheckboxes = (args) => <Select {...args} />

export const ErrorState = (args) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withIcon = (args) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withOption = (args) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withDescription = (args) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

const data = ['England', 'Wales', 'Scotland', 'Ireland']
const icon = <Icon type={'email'} className="" />

Default.args = {
  disabled: false,
  label: 'Label',
  className: 'font-sans',
}

withCheckboxes.args = {
  disabled: false,
  checkboxes: data,
  allowedValues: data,
  className: 'font-sans',
}

ErrorState.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  error: 'Your password must be less than 4 characters.',
  allowedValues: data,
}

withIcon.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  icon: icon,
  allowedValues: data,
}

withOption.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  labelOptional: 'This is required',
  allowedValues: data,
}

withDescription.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  descriptionText: 'Make your password short and easy to guess',
  allowedValues: data,
}
