import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import './Toggle.css'

interface Props {
  disabled? : any
  id? : any
  layout? : 'horizontal' | 'vertical'
  error? : any
  descriptionText? : any
  label? : any
  labelOptional? : any
  name? : any
  onChange? : any
  type? : any
  value? : any
  className? : any
  options? : any
  active? : any
}

function Toggle({
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
  value,
  className,
  options,
  active,
} : Props) {
  const [switchValue, setSwitchValue] = useState(false)

  let toggleClasses = ['sbui-toggle']
  if(active) {
    toggleClasses.push('sbui-toggle--active')
  }

  let handleClasses = ['sbui-toggle__handle']
  if(active) {
    handleClasses.push('sbui-toggle__handle--active')
  }

  return (
    // <Switch.Group as="div" className="flex items-center space-x-4">
    //   <Switch.Label>{label}</Switch.Label>
    //   <Switch
    //     as="button"
    //     checked={switchValue}
    //     onChange={setSwitchValue}
    //     className={`${
    //       switchValue ? 'bg-indigo-600' : 'bg-gray-200'
    //     } p-0 relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring`}
    //   >
    //     {({ checked }) => (
    //       <span
    //         className={`${
    //           checked ? 'translate-x-5' : 'translate-x-0'
    //         } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
    //       />
    //     )}
    //   </Switch>
    // </Switch.Group>

    // <!-- This example requires Tailwind CSS v2.0+ -->
    // <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
    <FormLayout
      className={className}
      // align={'right'}
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      responsive={false}
      id={id}
      error={error}
      descriptionText={descriptionText}
    >
      <button
        type="button"
        aria-pressed="false"
        className={toggleClasses.join(' ')}
      >
        {/* <span className="sr-only">{label}</span> */}
        {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
        <span
          aria-hidden="true"
          className={handleClasses.join(' ')}
        >
        </span>
      </button>
    </FormLayout>
  )
}

export default Toggle
