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
  AvatarIcon?: Icon
  size: number
}

export default function Avatar({
  src,
  style,
  className,
  alt,
  responsive,
  text,
  variant = 'circle',
  AvatarIcon,
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
  let objectToRender

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

  if (isImageExists() && src) {
    classes.push(AvatarStyles['sbui-avatar-image'])
    objectToRender = (
      <img
        className={classes.join(' ')}
        src={src}
        alt={alt}
        style={{ height: size, width: size, ...style }}
      />
    )
  } else if (AvatarIcon) {
    classes.push(AvatarStyles['sbui-avatar-icon'])
    objectToRender = (
      <AvatarContainer classes={classes} size={size} style={style}>
        <AvatarIcon />
      </AvatarContainer>
    )
  } else if (text) {
    classes.push(AvatarStyles['sbui-avatar-text'])
    objectToRender = (
      <AvatarContainer classes={classes} size={size} style={style}>
        <p>{text[0]}</p>
      </AvatarContainer>
    )
  } else if (children) {
    classes.push(AvatarStyles['sbui-avatar-children'])
    objectToRender = (
      <AvatarContainer classes={classes} size={size} style={style}>
        {children}
      </AvatarContainer>
    )
  } else {
    classes.push(AvatarStyles['sbui-avatar-fallback'])
    objectToRender = (
      <AvatarContainer classes={classes} size={size} style={style}>
        <IconUser />
      </AvatarContainer>
    )
  }

  return <>{objectToRender}</>
}
