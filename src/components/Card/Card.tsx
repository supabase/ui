import React from 'react'

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
      <div className={'bg-white shadow rounded-md sm:px-10 dark:bg-dark-800 ' + className}>
        <div className={'py-2 px-2'}>
          <h5>{title}</h5>
        </div>
        <div className={'py-2 px-2'}>{children}</div>
      </div>
    </div>
  )
}

// Card.defaultProps = { type: 'text' }

export default Card
