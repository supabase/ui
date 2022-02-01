import React from 'react'
import InternalAvatar, { Props as AvatarProps } from './Avatar'
import AvatarGroup from './AvatarGroup'

interface CompoundComponent
  extends React.ForwardRefExoticComponent<
    AvatarProps & React.RefAttributes<HTMLElement>
  > {
  Group: typeof AvatarGroup
}

const Avatar = InternalAvatar as CompoundComponent
Avatar.Group = AvatarGroup

export default Avatar
