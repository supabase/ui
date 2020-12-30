import React from 'react'

import { Select } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/Select',
  component: Select,
}

export const Default = (args : any) => (
  <Select {...args}>
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withCheckboxes = (args : any) => <Select {...args} />

export const ErrorState = (args : any) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withIcon = (args : any) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withOption = (args : any) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

export const withDescription = (args : any) => (
  <Select {...args}>
    {' '}
    <option>JavaScript</option>
    <option>TypeScript</option>
    <option>React</option>
  </Select>
)

const data = ['England', 'Wales', 'Scotland', 'Ireland']
const icon = <Icon stroke={'#666666'} type={"Book"}/>

Default.args = {
  disabled: false,
  label: 'Label',
  className: 'font-sans',
  layout: 'vertical'
}

withCheckboxes.args = {
  disabled: false,
  checkboxes: data,
  allowedValues: data,
  className: 'font-sans',
  layout: 'vertical'
}

ErrorState.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  error: 'Your password must be less than 4 characters.',
  allowedValues: data,
  layout: 'vertical'
}

withIcon.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an Icon',
  className: 'font-sans',
  value: 'Value of input',
  icon: icon,
  allowedValues: data,
  layout: 'vertical'
}

withOption.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  labelOptional: 'This is required',
  allowedValues: data,
  layout: 'vertical'
}

withDescription.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  className: 'font-sans',
  value: 'Value of input',
  descriptionText: 'Make your password short and easy to guess',
  allowedValues: data,
  layout: 'vertical'
}
