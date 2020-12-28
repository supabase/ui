import React, { Ref } from 'react'
import { FormLayout } from '../../lib/utilities'
import { Icon } from '../Icon'

function Card({
  className,
  id,
  inputRef,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  placeholder,
  type,
  value,
  title,
  children,
  ...props
}: any) {
  return (
    <div className={className}>
      <div className={'bg-white shadow sm:rounded-mdx sm:px-10 ' + className}>
        <div className={'py-2 px-2'}>
          <h5>{title}</h5>
        </div>
        <div className={'py-2 px-2'}>{children}</div>

        <div className="divide-y-4 divide-red">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>


      </div>
    </div>
  )
}

Card.defaultProps = { type: 'text' }

export default Card
