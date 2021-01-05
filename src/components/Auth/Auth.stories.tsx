import React from 'react'
// import { AutoForm } from 'uniforms'

import { Auth } from './'

export default {
  title: 'Auth/Auth',
  component: Auth,
}

export const Default = (args :any) => <Auth {...args} />
export const withSocialAuth = (args :any) => <Auth {...args} />
export const withAllSocialAuth = (args :any) => <Auth {...args} />
export const withSocialLargeButtons = (args :any) => <Auth {...args} />
export const withColouredSocialAuth = (args :any) => <Auth {...args} />
export const withSocialAuthHorizontal = (args :any) => <Auth {...args} />

Default.args = {
  title: 'I am a title',
  className: 'font-sans'
}

withSocialAuth.args = {
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google']
}

withAllSocialAuth.args = {
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket']
}

withSocialLargeButtons.args = {
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
  socialButtonSize: 'large'
}

withColouredSocialAuth.args = {
  title: 'I am a title',
  className: 'font-sans',
  socialColors: true,
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket']
}

withSocialAuthHorizontal.args = {
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal'
}