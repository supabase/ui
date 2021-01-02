import React from 'react'
// @ts-ignore
import { Space } from '../../index'
import './FormLayout.css'

type Props =  {
    align?:string
    children?:any
    className?:string
    descriptionText?:string
    error?:string
    id?:string
    label?:string
    labelOptional?:string
    layout:'horizontal' | 'vertical'
    responsive?:boolean
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
  responsive
}: Props) {

  let containerClasses = ['sbui-formlayout']
  containerClasses.push(responsive ? 'sbui-formlayout--responsive' : 'sbui-formlayout--non-responsive')
  if(className) {
    containerClasses.push(className)
  }

  return (
    <div className={containerClasses.join(' ')}>
      <Space 
        direction={layout && layout === 'horizontal' ? 'vertical' : 'horizontal'}
        className={"" + (layout !== 'horizontal' ? 'sbui-formlayout__label-container-horizontal' : 'sbui-formlayout__label-container-vertical')}
      >
        {label && (
          <label
            className="sbui-formlayout__label"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {labelOptional && (
          <span className="sbui-formlayout__label-opt" id={id + '-optional'}>
            {labelOptional}
          </span>
        )}
      </Space>
      <div className={layout !== 'horizontal' ? 'sbui-formlayout__content-container-horizontal' : 'sbui-formlayout__content-container-vertical' + (align === 'right' ? ' sbui-formlayout__content-container-vertical--align-right' : '')}>
        {children}
        {error && (
          <p className="sbui-formlayout__error">
            {error}
          </p>
        )}
        {descriptionText && (
          <p className="sbui-formlayout__description" id={id + '-description'}>
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
