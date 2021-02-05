import React from 'react'
// @ts-ignore
import { Icon } from './../../index'
// @ts-ignore
import InputErrorIconStyles from './InputErrorIcon.module.css'

interface Props {
  style?: React.CSSProperties
}

export default function InputErrorIcon({ style }: Props) {
  return (
    <div
      className={InputErrorIconStyles['sbui-input-error-icon']}
      style={style}
    >
      <Icon
        size={21}
        strokeWidth={2}
        stroke={'#f56565'}
        type={'AlertCircle'}
        className=""
      />
    </div>
  )
}
