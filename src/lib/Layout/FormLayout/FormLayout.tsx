import React from 'react'
// @ts-ignore
import { Space } from '../../../index'
// @ts-ignore
import FormLayoutStyles from './FormLayout.module.css'

type Props = {
  align?: string
  children?: any
  className?: string
  descriptionText?: string
  error?: string
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  flex?: boolean
  responsive?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  beforeLabel?: string
  afterLabel?: string
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
  layout = 'vertical',
  style,
  flex,
  responsive = true,
  size = 'medium',
  beforeLabel,
  afterLabel,
}: Props) {
  let containerClasses = [FormLayoutStyles['sbui-formlayout']]

  if (size) {
    containerClasses.push(FormLayoutStyles[`sbui-formlayout--${size}`])
  }

  if (flex) {
    containerClasses.push(FormLayoutStyles['sbui-formlayout--flex'])
    if (align === 'left') {
      containerClasses.push(FormLayoutStyles['sbui-formlayout--flex-left'])
    }
    if (align === 'right') {
      containerClasses.push(FormLayoutStyles['sbui-formlayout--flex-right'])
    }
  } else {
    containerClasses.push(
      responsive
        ? FormLayoutStyles['sbui-formlayout--responsive']
        : FormLayoutStyles['sbui-formlayout--non-responsive']
    )
  }

  if (className) {
    containerClasses.push(className)
  }

  const labelled = Boolean(label || beforeLabel || afterLabel)

  return (
    <div className={containerClasses.join(' ')}>
      {labelled || labelOptional || layout === 'horizontal' ? (
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
              ? FormLayoutStyles['sbui-formlayout__label-container-horizontal']
              : FormLayoutStyles['sbui-formlayout__label-container-vertical'])
          }
        >
          {labelled && (
            <label
              className={FormLayoutStyles['sbui-formlayout__label']}
              htmlFor={id}
            >
              {beforeLabel && (
                <span
                  className={FormLayoutStyles['sbui-formlayout__label-before']}
                  id={id + '-before'}
                >
                  {beforeLabel}
                </span>
              )}
              {label}
              {afterLabel && (
                <span
                  className={FormLayoutStyles['sbui-formlayout__label-after']}
                  id={id + '-after'}
                >
                  {afterLabel}
                </span>
              )}
            </label>
          )}
          {labelOptional && (
            <span
              className={FormLayoutStyles['sbui-formlayout__label-opt']}
              id={id + '-optional'}
            >
              {labelOptional}
            </span>
          )}
        </Space>
      ) : null}
      <div
        className={
          layout !== 'horizontal'
            ? FormLayoutStyles['sbui-formlayout__content-container-horizontal']
            : FormLayoutStyles['sbui-formlayout__content-container-vertical'] +
              (align === 'right'
                ? ` ${FormLayoutStyles['sbui-formlayout__content-container-vertical--align-right']}`
                : '')
        }
        style={style}
      >
        {children}
        {error && (
          <p className={FormLayoutStyles['sbui-formlayout__error']}>{error}</p>
        )}
        {descriptionText && (
          <p
            className={FormLayoutStyles['sbui-formlayout__description']}
            id={id + '-description'}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
