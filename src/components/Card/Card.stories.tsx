import React from 'react'
// import { AutoForm } from 'uniforms'

import { Card } from './'
import { Icon } from '../Icon'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args) => <Card {...args} />

export const ErrorState = (args) => <Card {...args} />

export const withIcon = (args) => <Card {...args} />

export const withOption = (args) => <Card {...args} />

export const withDescription = (args) => <Card {...args} />

const icon = <Icon stroke={'#666666'} className={''} type={"Package"}/>

Default.args = {
  title: 'I am a title',
  children: [<p>Hello world</p>],
  className: 'font-sans'
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
