import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { FormLayout } from '../../lib/utilities'

function Toggle ({ 
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
  active,
  ...props
}) {
  const [switchValue, setSwitchValue] = useState(false)

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
    align={'right'}
    direction={'horizontal'}
    label={label}
    labelOptional={labelOptional}
    layout={'horizontal'}
    responsive={false}
    id={id}
    error={error}
    descriptionText={descriptionText}>
    <button
      type="button"
      aria-pressed="false"
      className={
        'p-0 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' +
        (active ? ' bg-brand-600' : ' bg-gray-200 dark:bg-gray-400')
      }
    >
      <span className="sr-only">Use setting</span>
      {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
      <span
        aria-hidden="true"
        className={
          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200' +
          (active ? ' translate-x-5' : ' translate-x-0')
        }
      ></span>
    </button>
    </FormLayout>
  )
}

export default Toggle