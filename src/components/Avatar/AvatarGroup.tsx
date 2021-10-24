import React from 'react'
import Avatar from './Avatar'
// @ts-ignore
import AvatarStyles from './Avatar.module.css'

type AvatarType = typeof Avatar

interface Props {
  children: React.ReactElement<React.ComponentProps<AvatarType>, AvatarType>[]
  avatarVariant?: 'circle' | 'square'
  orientation: 'horizontal' | 'vertical'
  gapSize?: string
  groupStyle?: React.CSSProperties
  groupClassName?: string
  containerStyle?: React.CSSProperties
  containerClassName?: string
}

export default function AvatarGroup({
  children,
  avatarVariant = 'circle',
  orientation = 'horizontal',
  gapSize = '10px',
  groupStyle,
  groupClassName,
  containerStyle,
  containerClassName,
}: Props) {
  const mappedChildren = children.map((child) => {
    const overrideProps = {
      ...child.props,
      variant: avatarVariant ? avatarVariant : child.props.variant,
      style: groupStyle ? groupStyle : child.props.style,
      className: groupClassName ? groupClassName : child.props.className,
    }

    return React.cloneElement(child, overrideProps)
  })

  const className = [
    containerClassName,
    AvatarStyles['sbui-avatar-group'],
    AvatarStyles[`sbui-avatar-group-${orientation}`],
  ]

  return (
    <div
      className={className.join(' ')}
      style={{ gap: gapSize, ...containerStyle }}
    >
      {mappedChildren}
    </div>
  )
}
