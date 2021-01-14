import React from 'react'
import Typography from '../Typography'
// import { AutoForm } from 'uniforms'

import { Dropdown } from './'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => (
  <div style={{ margin: '0 auto' }}>
    <Dropdown {...args} />
  </div>
)

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}
