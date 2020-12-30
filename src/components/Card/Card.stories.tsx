import React from 'react'
// import { AutoForm } from 'uniforms'

import { Card } from './'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args :any) => <Card {...args} />

Default.args = {
  title: 'I am a title',
  className: 'font-sans'
}