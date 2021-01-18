import React from 'react'
// @ts-ignore
import { Space } from '../../../index'
import './FormLayout.css'

type Props = {
  align?: string
  children?: any
  className?: string
  descriptionText?: string
  error?: string
  id?: string
  label?: string
  labelOptional?: string
  layout: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  flex?: boolean
  responsive?: boolean
}

export function FormLayout({
  align,
  children,
  className,
  descriptionText,
  error,
  id,
  label,
  labelOptional,
  layout,
  style,
  flex,
  responsive = true,
}: Props) {
  let containerClasses = ['sbui-formlayout']

  if (flex) {
    containerClasses.push('sbui-formlayout--flex')
    if (align === 'left') {
      containerClasses.push('sbui-formlayout--flex-left')
    }
    if (align === 'right') {
      containerClasses.push('sbui-formlayout--flex-right')
    }
  } else {
    containerClasses.push(
      responsive && layout !== 'vertical'
        ? 'sbui-formlayout--responsive'
        : 'sbui-formlayout--non-responsive'
    )
  }

  if (className) {
    containerClasses.push(className)
  }

  return (
    <div className={containerClasses.join(' ')}>
      {label || labelOptional || layout === 'horizontal' ? (
        <Space
          direction={
            (layout && layout === 'horizontal') ||
            (flex && layout && layout === 'vertical')
              ? 'vertical'
              : 'horizontal'
          }
          className={
            '' +
            (layout !== 'horizontal' && !flex
              ? 'sbui-formlayout__label-container-horizontal'
              : 'sbui-formlayout__label-container-vertical')
          }
        >
          {label && (
            <label className="sbui-formlayout__label" htmlFor={id}>
              {label}
            </label>
          )}
          {labelOptional && (
            <span className="sbui-formlayout__label-opt" id={id + '-optional'}>
              {labelOptional}
            </span>
          )}
        </Space>
      ) : null}
      <div
        className={
          layout !== 'horizontal'
            ? 'sbui-formlayout__content-container-horizontal'
            : 'sbui-formlayout__content-container-vertical' +
              (align === 'right'
                ? ' sbui-formlayout__content-container-vertical--align-right'
                : '')
        }
        style={style}
      >
        {children}
        {error && <p className="sbui-formlayout__error">{error}</p>}
        {descriptionText && (
          <p className="sbui-formlayout__description" id={id + '-description'}>
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
