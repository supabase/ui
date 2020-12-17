import React, { Ref } from 'react'

function Text({
  autoComplete,
  className,
  disabled,
  id,
  inputRef,
  label,
  labelOptional,
  descriptionText,
  name,
  onChange,
  placeholder,
  icon,
  type,
  value,
  error,
  ...props
}: any) {
  return (
    <div className={className}>
      <div className="flex justify-between">
        {label && (
          <label
            className="mb-2 block text-sm font-sml text-gray-700 dark:text-gray-300"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {labelOptional && (
          <span className="text-sm text-gray-500" id={id + '-optional'}>
            {labelOptional}
          </span>
        )}
      </div>

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
            'mt-1 block w-full rounded-md shadow-sm pl-3 pr-3 py-2 bg-white dark:bg-transparent dark:text-white shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm border border-solid border-gray-300 rounded-md' +
            (icon && ' pl-10')
          }
        />
        </div>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        )}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-0 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500" id="email-error">
          {error}
        </p>
      )}
      {descriptionText && (
        <p className="mt-2 text-sm text-gray-400" id={id + '-description'}>
          Make your password short and easy to guess.
        </p>
      )}
    </div>
  )
}

Text.defaultProps = { type: 'text' }

export default Text
