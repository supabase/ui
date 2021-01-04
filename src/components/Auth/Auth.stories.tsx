import React from 'react'
// import { AutoForm } from 'uniforms'

import { Auth } from './'

export default {
  title: 'Auth/Auth',
  component: Auth,
}

export const Default = (args :any) => <Auth {...args} />

Default.args = {
  title: 'I am a title',
  className: 'font-sans'
}