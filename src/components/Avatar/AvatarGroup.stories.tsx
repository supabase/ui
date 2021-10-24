import React from 'react'

import AvatarGroup from './AvatarGroup'
import Avatar from './Avatar'

const story = {
  title: 'General/AvatarGroup',
  component: AvatarGroup,
}

export default story

export const Default = (args: any) => {
  return (
    <>
      <AvatarGroup {...args}>
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
      </AvatarGroup>
    </>
  )
}
