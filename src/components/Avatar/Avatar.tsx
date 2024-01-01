import React, { useState, useEffect } from 'react';
import { IconUser } from '../Icon/icons/IconUser';
import AvatarStyles from './Avatar.module.css';

interface Props {
  children?: React.ReactNode;
  src?: string;
  style?: React.CSSProperties;
  className?: string;
  alt?: string;
  responsive?: boolean;
  text?: string;
  variant?: 'circle' | 'square';
  AvatarIcon?: React.ElementType;
  size: number;
}

export default function Avatar({
  src,
  style,
  className,
  alt,
  responsive,
  text,
  variant,
  AvatarIcon,
  size,
  children,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(false);
    }
  }, [src]);

  const renderImage = () => (
    <img
      className={`${AvatarStyles['sbui-avatar']} ${AvatarStyles['sbui-avatar-image']} ${className}`}
      src={src}
      alt={alt}
      style={{ height: size, width: size, ...style }}
    />
  );

  const renderIcon = () => (
    <div
      className={`${AvatarStyles['sbui-avatar']} ${AvatarStyles['sbui-avatar-icon']} ${className}`}
      style={{ height: size, width: size, ...style }}
    >
      {AvatarIcon && <AvatarIcon />}
    </div>
  );

  const renderText = () => (
    <div
      className={`${AvatarStyles['sbui-avatar']} ${AvatarStyles['sbui-avatar-text']} ${className}`}
      style={{ height: size, width: size, ...style }}
    >
      <p>{text && text[0]}</p>
    </div>
  );

  const renderChildren = () => (
    <div
      className={`${AvatarStyles['sbui-avatar']} ${AvatarStyles['sbui-avatar-children']} ${className}`}
      style={{ height: size, width: size, ...style }}
    >
      {children}
    </div>
  );

  const renderFallback = () => (
    <div
      className={`${AvatarStyles['sbui-avatar']} ${AvatarStyles['sbui-avatar-fallback']} ${className}`}
      style={{ height: size, width: size, ...style }}
    >
      <IconUser />
    </div>
  );

  return (
    <>
      {imageLoaded && src ? renderImage() : null}
      {!imageLoaded && AvatarIcon ? renderIcon() : null}
      {!imageLoaded && !AvatarIcon && text ? renderText() : null}
      {!imageLoaded && !AvatarIcon && !text && children ? renderChildren() : null}
      {!imageLoaded && !AvatarIcon && !text && !children ? renderFallback() : null}
    </>
  );
}
