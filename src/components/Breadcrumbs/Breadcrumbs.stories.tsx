import React from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { Textarea } from '../Textarea'
import Typography from '../Typography'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
}

export const Default = ({ children, ...args }) => (
  <Breadcrumbs {...args} spacing="small">
    {children}
  </Breadcrumbs>
)

Default.args = {
  children: [<p>Brothers</p>, <p>Grimm</p>, <p>Hansel</p>, <p>Gretel</p>],
}
