import React from 'react'
// import { AutoForm } from 'uniforms'

import { Auth } from './'
import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button } from '../../index'

const supabase = createClient(
  'https://evuqlpfsuimdzxurpcgn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwNDIzODk3MywiZXhwIjoxOTE5ODE0OTczfQ.ud4NW5ZFc0Zky-ARnOzbzxqvLcYwVIyvk3GwW3aKC3Y'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
}

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export const Default = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withAllSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialLargeButtons = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withColouredSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialAuthHorizontal = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const updatePassword = (args: any) => <Auth.UpdatePassword {...args} />

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

updatePassword.args = {
  supabaseClient: supabase,
}
