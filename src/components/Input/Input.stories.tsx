import React from 'react'
// import { AutoForm } from 'uniforms'

import { Input } from '.'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { Space } from '../Space'

export default {
  title: 'Data Input/Input',
  component: Input,
}

export const Default = (args: any) => <Input {...args} />

export const ErrorState = (args: any) => <Input {...args} />

export const withIcon = (args: any) => <Input {...args} />

export const withOption = (args: any) => <Input {...args} />

export const withDescription = (args: any) => <Input {...args} />

export const withCustomStyle = (args: any) => <Input {...args} />

export const textArea = (args: any) => <Input.TextArea {...args} />

export const textAreaWithLimit = (args: any) => <Input.TextArea {...args} />

export const withRevealAndCopy = (args: any) => <Input {...args} />

export const withCustomActions = (args: any) => <Input {...args} />

const icon: any = <Icon type={'Package'} />

Default.args = {
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Name',
  layout: 'vertical',
}

ErrorState.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  error: 'Your password must be less than 4 characters.',
}

withIcon.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an icon',
  icon: icon,
}

withOption.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  labelOptional: 'This is required',
}

withDescription.args = {
  type: 'text',
  placeholder: 'Type text here ...',
  disabled: false,
  label: 'Input with an error message',
  descriptionText: 'Make your password short and easy to guess',
}

withCustomStyle.args = {
  type: 'text',
  label: 'This has custom styling {width: 50%}',
  style: { width: '50%' },
}

textArea.args = {
  type: 'text',
  label: 'This is a text area',
}

textAreaWithLimit.args = {
  type: 'text',
  label: 'This is a text area, with 10 rows',
  labelOptional: '500 character limit',
  rows: 10,
  limit: 500,
}

withRevealAndCopy.args = {
  type: 'text',
  label: 'Reveal and copy',
  labelOptional: 'Reveal the text, then copy it',
  value: '12341234HDGRHSGR/adJDJD',
  copy: true,
  reveal: true,
}

withCustomActions.args = {
  type: 'text',
  label: 'Custom actions',
  labelOptional: 'Use any react components',
  value: 'Value of input',
  actions: [
    <Button type="secondary">Copy text</Button>,
    <Button type="outline" danger>
      Delete this
    </Button>,
  ],
}
