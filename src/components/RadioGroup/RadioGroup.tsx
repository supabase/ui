import React, { useEffect, useState } from 'react'
// import { HTMLFieldProps } from 'uniforms'
import { FormLayout } from '../../lib/Layout'
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
  layout,
  error,
  descriptionText,
  label,
  labelOptional,
  name,
  onChange,
  type,
  transform,
  value,
  className,
  options,
  ...props
}: any) {
  const result = options.filter((obj: any) => {
    return obj.active === true
  })
  const [activeId, setActiveId] = useState(result[0].id)

  // setActiveId(result[0].id)

  useEffect(() => {}, [])

  function onToggle(e: any) {
    if (onChange) onChange()
    return setActiveId(e.target.id)
  }

  function onSubmit(e: any) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <fieldset className="sbui-radio-fieldset">
      <FormLayout
        label={label}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        className={className}
      >
        {/* <legend className="sr-only">Privacy setting</legend> */}
        <div className="bg-white dark:bg-transparent rounded-md -space-y-px">
          {options.map((option: any, i: number) => {
            const active = activeId === option.id ? true : false

            let classes = ['sbui-radio-container']
            if (type === 'cards') {
              classes.push('sbui-radio-container--card')
            }

            if (type === 'cards' && active) {
              classes.push('sbui-radio-container--card--active')
            }

            return (
              /* <!-- On: "bg-brand-50 border-brand-200 z-10", Off: "border-gray-200" --> */

              <div
                id={option.id}
                onClick={onToggle}
                className={classes.join(' ')}
              >
                <label className="sbui-radio-label">
                  <input
                    id={option.id}
                    name={name}
                    type="radio"
                    className="sbui-radio"
                    checked={active}
                    disabled={disabled || option.disabled}
                    value={option.value}
                    onChange={onToggle}
                  />
                  <div>
                    {/* <!-- On: "text-brand-900", Off: "text-gray-900" --> */}
                    <span className="sbui-radio-label-text">
                      {option.label}
                    </span>
                    {/* <!-- On: "text-brand-700", Off: "text-gray-500" --> */}
                    <span className="sbui-radio-label-description">
                      {option.description}
                    </span>
                  </div>
                </label>
              </div>
            )
          })}
        </div>
      </FormLayout>
    </fieldset>
  )
}

export default RadioGroup
