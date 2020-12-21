import React from 'react'

import { RadioGroup } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Data Input/RadioGroup',
  component: RadioGroup,
}

export const Default = (args) => <RadioGroup {...args}/>
export const withCards = (args) => <RadioGroup {...args}/>

const options = [
  {
    id: 'radiogroup-1',
    label: 'Comments',
    description: 'Get notified when someones posts a comment on a posting. Get notified when someones posts a comment on a posting Get notified when someones posts a comment on a posting.',
    active: true,
    value: 1
  },
  {
    id: 'radiogroup-2',
    label: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    active: false,
    value: 2
  },
  {
    id: 'radiogroup-3',
    label: 'Offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    active: false,
    value: 3
  }
]

Default.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example',
  options: options
}

withCards.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example',
  options: options,
  type: 'cards',
}