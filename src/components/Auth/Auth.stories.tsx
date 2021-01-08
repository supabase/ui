import React from 'react'
// import { AutoForm } from 'uniforms'

import { Auth } from './'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://xyzcompany.supabase.co',
  'public-anon-key'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
}

export const Default = (args: any) => <Auth {...args} />
export const withSocialAuth = (args: any) => <Auth {...args} />
export const withAllSocialAuth = (args: any) => <Auth {...args} />
export const withSocialLargeButtons = (args: any) => <Auth {...args} />
export const withColouredSocialAuth = (args: any) => <Auth {...args} />
export const withSocialAuthHorizontal = (args: any) => <Auth {...args} />

Default.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
}

withSocialAuth.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google'],
}

withAllSocialAuth.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
}

withSocialLargeButtons.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
  socialButtonSize: 'large',
}

withColouredSocialAuth.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
  socialColors: true,
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
}

withSocialAuthHorizontal.args = {
  supabaseClient: supabase,
  title: 'I am a title',
  className: 'font-sans',
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
}
