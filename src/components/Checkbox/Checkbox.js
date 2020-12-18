import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({
  className = '',
  id,
  label = '',
  description = '',
  containerClassName = '',
  children,
  ...props
}) => {
  return (
    // <label className={`inline-flex items-center ${containerClassName}`}>
    //   <input type="checkbox" className={`form-checkbox border-solid h-4 w-4 ${className}`} {...props} />
    //   <span className="ml-2">{label}</span>
    // </label>
    <div className={"cursor-pointer " + className}>
      <div className="flex">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="focus:ring-brand-500 h-4 w-4 text-brand-600 border border-solid border-gray-300 dark:border-gray-400 rounded"
        />
      
      <div className="ml-3 text-sm">
        <label for={id} className="text-gray-700 dark:text-white cursor-pointer">
          <span className="font-medium">{label}</span>
        <p className="mt-0 text-gray-400 dark:text-gray-300">
          {description}
        </p>
        </label>
      </div>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Checkbox
