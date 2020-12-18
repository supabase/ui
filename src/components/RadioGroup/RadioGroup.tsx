import React, { useEffect, useState } from 'react'
import { HTMLFieldProps } from 'uniforms'
import './RadioGroup.css'

const base64 =
  typeof btoa !== 'undefined'
    ? btoa
    : //@ts-ignore
      (x: string) => Buffer.from(x).toString('base64')
const escape = (x: string) => base64(encodeURIComponent(x)).replace(/=+$/, '')

// export type RadioFieldProps = HTMLFieldProps<
//   string,
//   HTMLDivElement,
//   {
//     allowedValues?: string[];
//     checkboxes?: boolean;
//     transform?(value: string): string;
//   }
// >;

function RadioGroup({
  allowedValues,
  checkboxes, // eslint-disable-line no-unused-vars
  disabled,
  id,
  label,
  labelOptional,
  name,
  onChange,
  transform,
  value,
  className,
  options,
  ...props
}: any) {
  const result = options.filter((obj) => {
    return obj.active === true
  })
  const [activeId, setActiveId] = useState(result[0].id)

  // setActiveId(result[0].id)

  useEffect(() => {}, [])

  function onToggle(e) {
    if (onChange) onChange()
    return setActiveId(e.target.id)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <fieldset className={'border-none p-0 m-0 ' + className}>
      <legend className="sr-only">Privacy setting</legend>
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

      <div className="bg-white dark:bg-transparent rounded-md -space-y-px">
        {options.map((option, i) => {
          const active = activeId === option.id ? true : false
          return (
            /* <!-- On: "bg-brand-50 border-brand-200 z-10", Off: "border-gray-200" --> */
            <div
              id={option.id}
              onClick={onToggle}
              className={
                'relative cursor-pointer border border-solid p-4 py-6 flex' +
                (active
                  ? ' bg-brand-100 bg-opacity-20 border-brand-200 z-10'
                  : ' border-solid border-gray-200 dark:border-gray-400') +
                (i === 0
                  ? ' rounded-tl-md rounded-tr-md'
                  : i === options.length - 1
                  ? ' rounded-bl-md rounded-br-md'
                  : '')
              }
            >
              <div className="flex items-center h-5">
                <label className="flex flex-row cursor-pointer">
                  <input
                    id={option.id}
                    name={name}
                    type="radio"
                    className="rounded-2xl focus:ring-brand-500 h-4 w-4 text-brand-600 cursor-pointer border-solid border border-gray-300"
                    checked={active}
                    disabled={disabled || option.disabled}
                    value={option.value}
                    onChange={onToggle}
                  />
                  <div className="ml-3">
                    {/* <!-- On: "text-brand-900", Off: "text-gray-900" --> */}
                    <span className="block text-sm font-medium dark:text-white">
                      {option.label}
                    </span>
                    {/* <!-- On: "text-brand-700", Off: "text-gray-500" --> */}
                    <span className="block text-sm text-gray-400 dark:text-gray-300">
                      {option.description}
                    </span>
                  </div>
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}

export default RadioGroup
