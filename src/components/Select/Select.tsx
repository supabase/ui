import xor from 'lodash/xor'
import React, { Ref } from 'react'
import './Select.css'
// import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';

const base64: typeof btoa =
  // @ts-ignore
  typeof btoa !== 'undefined' ? btoa : (x) => Buffer.from(x).toString('base64')
const escape = (x: string) => base64(encodeURIComponent(x)).replace(/=+$/, '')

// export type SelectFieldProps = HTMLFieldProps<
//   string | string[],
//   HTMLDivElement,
//   {
//     allowedValues?: string[];
//     checkboxes?: boolean;
//     disableItem?(value: string): boolean;
//     inputRef?: Ref<HTMLSelectElement>;
//     transform?(value: string): string;
//   }
// >;

function Select({
  allowedValues,
  checkboxes,
  disabled,
  fieldType,
  id,
  inputRef,
  label,
  labelOptional,
  name,
  onChange,
  placeholder,
  required,
  disableItem,
  transform,
  value,
  children,
  className,
  error,
  descriptionText,
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
      {checkboxes || fieldType === Array ? (
        allowedValues!.map((item) => (
          <div key={item}>
            <input
              checked={
                fieldType === Array ? value!.includes(item) : value === item
              }
              disabled={disableItem?.(item) ?? disabled}
              id={`${id}-${escape(item)}`}
              name={name}
              onChange={() => {
                onChange(fieldType === Array ? xor([item], value) : item)
              }}
              type="checkbox"
            />

            <label htmlFor={`${id}-${escape(item)}`}>
              {transform ? transform(item) : item}
            </label>
          </div>
        ))
      ) : (
        <div className="relative">
          <select
            disabled={disabled}
            id={id}
            name={name}
            className={"mt-1 block w-full bg-white dark:bg-transparent pl-3 pr-10 py-2 text-gray-700 dark:text-white border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 text-sm " +
              (error && ' border-red-500')
              + " rounded-md"
            }
            onChange={(event) => {
              onChange(
                event.target.value !== '' ? event.target.value : undefined
              )
            }}
            ref={inputRef}
            value={value ?? ''}
          >
            {children}
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
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

// function Option({

// }) {
//   return (

//       (!!placeholder || !required || value === undefined) && (
//         <option value="" disabled={required} hidden={required}>
//           {placeholder || label}
//         </option>
//       )}

//       {allowedValues!.map(value => (
//         <option disabled={disableItem?.(value)} key={value} value={value}>
//           {transform ? transform(value) : value}
//         </option>
//       ))}
//   )
// }

export default Select
