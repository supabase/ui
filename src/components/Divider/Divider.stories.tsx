import React from 'react'

import { Divider } from './'

export default {
  title: 'Utilities/Divider',
  component: Divider,
}

export const Default = (args: any) => <Divider {...args} />

export const withCenterText = (args: any) => (
  <Divider {...args}>Hello world</Divider>
)

export const withLeftText = (args: any) => (
  <Divider {...args}>Hello world</Divider>
)

export const withRightText = (args: any) => (
  <Divider {...args}>Hello world</Divider>
)

export const lighterColor = (args: any) => <Divider {...args} />

Default.args = {}

withCenterText.args = {}

withLeftText.args = {
  orientation: 'left',
}

withRightText.args = {
  orientation: 'right',
}

lighterColor.args = {
  light: true,
}
