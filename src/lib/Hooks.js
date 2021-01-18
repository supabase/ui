import { useRef, useEffect } from 'react'
/**
 * Hook for listening to clicks outside of the target element.
 *
 * @param   {Function}      onClickOutside
 *
 * @returns {Object}        Ref for the target element
 */

function clickOutsideListener(onClickOutside) {
  const ref = useRef(null)

  const handleNavigate = (event) => {
    if (
      !ref.current ||
      ref.current === event.target ||
      ref.current.contains(event.target)
    ) {
      return
    }

    onClickOutside(event)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleNavigate)

    return () => {
      document.body.removeEventListener('click', handleNavigate)
    }
  })

  return ref
}

export default {
  clickOutsideListener,
}
