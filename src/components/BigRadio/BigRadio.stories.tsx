import React from 'react'

import { action } from '@storybook/addon-actions'

import BigRadio from '.'

const options = [
  {
    label: 'Comments',
    description:
      'Get notified when someones posts a comment on a posting. Get notified when someones posts a comment on a posting Get notified when someones posts a comment on a posting.',
    value: 'comments',

  },
  {
    label: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    value: 'candidates',

  },
  {
    label: 'Offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    value: 'offers',
  },
]

const optionsWithImages = options.map(option => { return {...option, image: "https://supabase.io/new/images/logo-dark.png" }})

export default {
  title: 'Data Input/RadioBig',
  component: BigRadio,

  argTypes: { onChange: { action: 'onChange' } },
}


export const Default = (args: any) => (
  <BigRadio.Group {...args} onChange={action('onChange')} >
    {options.map((x, i) => (
      <BigRadio
        name="sbui-radiogroup"
        key={i}
        label={x.label}
        description={x.description}
        value={x.value}
      />
    ))}
  </BigRadio.Group>
)

export const withOptionsObj = (args: any) => <BigRadio.Group {...args} />
export const withImagesObj = (args: any) => <BigRadio.Group {...args} />

export const withWrap = (args: any) => <BigRadio.Group {...args} />



Default.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: true,
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

withImagesObj.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-2',
  options: optionsWithImages,
}


withWrap.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-2',
  options: options,
  wrap: true
}
