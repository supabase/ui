import React, { useState } from 'react'

import { Image } from '.'

export default {
  title: 'General/Image',
  component: Image,
}

export const Normal = (args: any) => {
  return (
    <>
      <Image {...args} />
    </>
  )
}

export const Circle = (args: any) => {
    return (
      <>
        <Image {...args} />
      </>
    )
  }

Normal.args = {
  active: true,
  type: 'normal',
  source: 'https://via.placeholder.com/300'
}

Circle.args = {
    active: true,
    type: 'avatar',
    source: 'https://via.placeholder.com/300'
}