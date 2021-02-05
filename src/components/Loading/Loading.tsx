import React from 'react'
import { Icon } from '../Icon'
// @ts-ignore
import LoadingStyles from './Loading.module.css'

interface Props {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  let classNames = [LoadingStyles['sbui-loading']]
  if (active) {
    classNames.push(LoadingStyles['sbui-loading--active'])
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={LoadingStyles['sbui-loading-content']}>{children}</div>
      {active && (
        <Icon
          type="Loader"
          size="xlarge"
          className={LoadingStyles['sbui-loading-spinner']}
        />
      )}
    </div>
  )
}
