import React, { useState } from 'react'

import Avatar from './Avatar'

export default {
  title: 'General/Avatar',
  component: Avatar,
}

export const Image = (args: any) => {
  return (
    <>
      <Avatar {...args} />
    </>
  )
}

export const Text = (args: any) => {
    return (
      <>
        <Avatar {...args} />
      </>
    )
}

export const Icon = (args: any) => {
  return (
    <>
      <Avatar {...args} />
    </>
  )
}




Image.args = {
    active: true,
    source: 'https://via.placeholder.com/150',
}

Text.args = {
  active: true,
  text:"Shoury"
}

Icon.args = {
  active: true,
}