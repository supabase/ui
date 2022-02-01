import React from 'react'
import { Icon } from '../Icon/IconImportHandler'
import { IconUser } from '../Icon/icons/IconUser'
import AvatarContainer from './AvatarContainer'
// @ts-ignore
import AvatarStyles from './Avatar.module.css'

interface Props {
  children?: React.ReactNode
  src?: string | undefined
  style?: React.CSSProperties
  className?: string
  alt?: string
  responsive?: boolean
  text?: string
  variant?: 'circle' | 'square'
  Icon?: Icon
  size: number
}

interface AvatarAttribute {
  classKey: keyof typeof AvatarStyles
  children: React.ReactNode
}

export default function Avatar({
  src,
  style,
  className,
  alt,
  responsive,
  text,
  variant = 'circle',
  Icon,
  size,
  children,
}: Props) {
  const classes = [
    AvatarStyles[
      variant === 'circle'
        ? 'sbui-avatar-type-rounded'
        : 'sbui-avatar-type-square'
    ],
    className,
  ]

  const isImageExists = () => {
    const img = new Image()
    if (!src) return false

    img.src = src
    img.onload = () => {
      return true
    }
    img.onerror = () => {
      return false
    }

    return img.complete
  }

  const getAvatarAttribute = (): AvatarAttribute => {
    if (Icon) {
      return {
        classKey: 'sbui-avatar-icon',
        children: <Icon />,
      }
    } else if (text) {
      return {
        classKey: 'sbui-avatar-text',
        children: <p>{text[0]}</p>,
      }
    } else if (children) {
      return {
        classKey: 'sbui-avatar-children',
        children,
      }
    } else {
      return {
        classKey: 'sbui-avatar-fallback',
        children: <IconUser />,
      }
    }
  }

  if (isImageExists()) {
    classes.push(AvatarStyles['sbui-avatar-image'])
    return (
      <img
        className={classes.join(' ')}
        src={src}
        alt={alt}
        style={{ height: size, width: size, ...style }}
      />
    )
  }

  const avatarAttribute = getAvatarAttribute()
  return (
    <AvatarContainer
      classes={[...classes, avatarAttribute.classKey]}
      size={size}
      style={style}
    >
      {avatarAttribute.children}
    </AvatarContainer>
  )
}
