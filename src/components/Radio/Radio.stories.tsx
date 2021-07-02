import React from 'react'

import { action } from '@storybook/addon-actions'

import Radio from '.'

const options = [
  {
    label: 'Comments',
    description:
      'Get notified when someones posts a comment on a posting. Get notified when someones posts a comment on a posting Get notified when someones posts a comment on a posting.',
    value: '1',
  },
  {
    label: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    value: '2',
  },
  {
    label: 'Offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    value: '3',
  },
]

export default {
  title: 'Data Input/Radio',
  component: Radio,
  argTypes: { onChange: { action: 'onChange' } },
}

interface onToggleProps {
  e?: any
}

export const Default = (args: any) => (
  <Radio.Group {...args} onChange={action('onChange')}>
    {options.map((x, i) => (
      <Radio
        name="sbui-radiogroup"
        key={i}
        label={x.label}
        description={x.description}
        value={x.value}
      />
    ))}
  </Radio.Group>
)

export const withOptionsObj = (args: any) => <Radio.Group {...args} />

export const withCards = (args: any) => <Radio.Group {...args} />

export const withBeforeAndAfterLabels = (args: any) => <Radio.Group {...args} />

Default.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-1',
}

withOptionsObj.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-2',
  options: options,
}

withCards.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-3',
  options: options,
  type: 'cards',
}

withBeforeAndAfterLabels.args = {
  label: 'Label',
  beforeLabel: 'Before : ',
  afterLabel: ' : After',
  options: [
    {
      label: 'Label',
      beforeLabel: 'Before : ',
      afterLabel: ' : After',
      description: 'Description',
    },
  ],
}
