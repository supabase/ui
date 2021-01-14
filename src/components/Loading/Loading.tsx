import React from 'react'
import { Icon } from '../Icon'
import './loading.css'

interface Props {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  let classNames = ['sbui-loading']
  if (active) {
    classNames.push('sbui-loading--active')
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={'sbui-loading-content'}>{children}</div>
      {active && (
        <Icon type="Loader" size="xlarge" className="sbui-loading-spinner" />
      )}
    </div>
  )
}
