export default {
  alert: {
    base: 'text-4xl px-4 py-2',
  },

  /* 
    Button
  */

  button: {
    base: 'relative cursor-pointer inline-flex items-center space-x-2 text-center border border-solid border-transparent transition ease-out duration-200 outline-none rounded focus:outline-none',
    container: 'inline-flex font-medium',
    type: {
      primary:
        'text-white bg-brand-800 hover:bg-brand-600 dark:hover:bg-brand-900',
      secondary:
        'text-gray-600 bg-gray-200 hover:text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600',
      default:
        'text-gray-500 bg-white border-gray-200 hover:text-gray-600 hover:bg-white hover:border-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-dark-200 dark:hover:bg-gray-700',
      outline:
        'border text-gray-500 bg-transparent border-gray-200 border-solid hover:bg-white hover:text-gray-600 hover:border-gray-600 dark:text-white dark:border-dark-400 dark:hover:text-dark-600 dark:hover:border-white',
      dashed:
        'border text-gray-500 bg-transparent border-gray-200 border-dashed hover:text-gray-600 hover:border-gray-600 dark:text-white dark:border-dark-400 dark:hover:text-white dark:hover:border-white',
      link: 'bg-transparent text-brand-800 border-none hover:bg-brand-900 hover:bg-opacity-25',
      text: 'text-gray-400 bg-transparent border-none hover:bg-gray-200 hover:bg-opacity-25 dark:text-dark-300 dark:hover:bg-dark-600',
    },
    block: 'w-full flex items-center justify-center',
    danger: {
      primary:
        'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600',
      secondary:
        'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
      default:
        'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
      outline:
        'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
      dashed:
        'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
      link: 'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
      text: 'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
    },
    shadow: 'shadow-sm',
    size: {
      tiny: 'px-2.5 py-1.5 text-xs',
      small: 'px-3 py-2 text-sm leading-4',
      medium: 'px-4 py-2 text-sm',
      large: 'px-4 py-2 text-base',
      xlarge: 'px-6 py-3 text-base',
    },
    loading: 'animate-spin',
    // disabled prefix is disabled (lol) by default in tailwind
    // so we apply normal utilities instead, however you can add disabled prefixes if you enabled them in tailwind config.
    // see more: https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
    disabled: 'opacity-75 cursor-not-allowed pointer-events-none',
  },
}
