import React from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { Textarea } from '../Textarea'
import Typography from '../Typography'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
}

export const Default = ({ children, ...args }) => (
  <Breadcrumbs {...args}>{children}</Breadcrumbs>
)

Default.args = {
  children: [
    <Breadcrumbs.Item>Brothers</Breadcrumbs.Item>,
    <Breadcrumbs.Item>Grimm</Breadcrumbs.Item>,
    <Breadcrumbs.Item active>Hansel</Breadcrumbs.Item>,
    <Breadcrumbs.Item>Gretel</Breadcrumbs.Item>,
  ],
}
