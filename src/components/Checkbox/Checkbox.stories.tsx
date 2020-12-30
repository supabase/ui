import React from 'react'

import { Checkbox } from '.'

export default {
  title: 'Data Input/Checkbox',
  component: Checkbox,
}

export const Default = (args :any) => <Checkbox name="checkbox-group" label="JavaScript" {...args} /> 

Default.args = {
  id: 'checkobox-q',
  label: 'This is the label',
  description: 'This is the description',
  disabled: false,
  className: "font-sans"
}
