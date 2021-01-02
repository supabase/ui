// @ts-ignore
import xor from 'lodash/xor'
import React, { Ref } from 'react'
import { FormLayout } from '../../lib/Layout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import './Select.css'
// import { HTMLFieldProps, connectField, filterDOMProps } from 'uniforms';

// @ts-ignore
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

interface OptionProps {
  value: string
  children: React.ReactNode
}

interface OptGroupProps {
  label: string
  children: React.ReactNode
}

export const ColLayout = (props: any) => (
  <div className="">{props.children}</div>
)

function Select({
  allowedValues,
  checkboxes,
  children,
  className,
  descriptionText,
  disabled,
  disableItem,
  error,
  fieldType,
  icon,
  id,
  inputRef,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  required,
  transform,
  value,
}: any) {

  let selectClasses = ['sbui-select']
  if(error) {
    selectClasses.push('sbui-select--error')  
  }
  if(icon) {
    selectClasses.push('sbui-select--with-icon')  
  }

  return (
      <FormLayout
        label={label}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        className={className}
      >
        {checkboxes || fieldType === Array ? (
          allowedValues!.map((item: any) => (
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
          <div className="sbui-select-container">
            <select
              id={id}
              name={name}
              className={selectClasses.join(' ')}
              onChange={(event) => {
                onChange(
                  event.target.value !== '' ? event.target.value : undefined
                )
              }}
              ref={inputRef}
              value={value ?? ''}
              required={required}
            >
              {children}
            </select>
            {icon && <InputIconContainer icon={icon}/>}
            {error && <InputErrorIcon style={{marginRight: '1.2rem'}}/>}
            <span className="sbui-select-chevron-container">
              <svg
                className="sbui-select-chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        )}
      </FormLayout>
  )
}

export function Option({ value, children }: OptionProps) {
  return <option value={value}>{children}</option>
}

export function OptGroup({ label, children }: OptGroupProps) {
  return <optgroup label={label}>{children}</optgroup>
}

Select.Option = Option
Select.OptGroup = OptGroup

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
