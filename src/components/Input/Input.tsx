import React, { Ref } from 'react'
import { FormLayout } from '../../lib/utilities'
import { Icon } from '../Icon'

function Text({
  autoComplete,
  className,
  descriptionText,
  disabled,
  error,
  icon,
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
  ...props
}: any) {
  return (
    <div className={className}>
      <FormLayout
        direction={layout}
        label={label}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
      >
        <div className="relative">
          <div className="block">
            <input
              autoComplete={autoComplete}
              disabled={disabled}
              id={id}
              name={name}
              onChange={(event) => onChange(event.target.value)}
              placeholder={placeholder}
              ref={inputRef}
              type={type}
              value={value ?? ''}
              className={
                'block w-full rounded-md shadow-sm pl-3 pr-3 py-2 bg-white dark:bg-transparent dark:text-white shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm border border-solid border-gray-300 dark:border-gray-400 rounded-md' +
                (error ? ' border-red-500 dark:border-red-500' : '') +
                (icon ? ' pl-10' : '')
              }
            />
          </div>
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          {error && (
            <div className="absolute inset-y-0 right-0 pr-0 flex items-center pointer-events-none">
              <Icon
                size={16}
                stroke={'#f56565'}
                type={'AlertCircle'}
                className=""
              />
            </div>
          )}
        </div>
      </FormLayout>
    </div>
  )
}

Text.defaultProps = { type: 'text' }

export default Text
