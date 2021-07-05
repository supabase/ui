const defaults = {
  size: {
    text: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
    padding: {
      tiny: 'px-2.5 py-1.5',
      small: 'px-3 py-2',
      medium: 'px-4 py-2',
      large: 'px-4 py-2',
      xlarge: 'px-6 py-3',
    },
  },
}

const paddingAndTextSize = {
  tiny: `${defaults.size.text.tiny} ${defaults.size.padding.tiny}`,
  small: `${defaults.size.text.small} ${defaults.size.padding.small}`,
  medium: `${defaults.size.text.medium} ${defaults.size.padding.medium}`,
  large: `${defaults.size.text.large} ${defaults.size.padding.large}`,
  xlarge: `${defaults.size.text.xlarge} ${defaults.size.padding.xlarge}`,
}

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
        'bg-brand-800 text-white hover:bg-brand-600 dark:hover:bg-brand-900',
      secondary:
        'bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600',
      default:
        'bg-white text-gray-500 border-gray-200 hover:text-gray-600 hover:bg-white hover:border-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-dark-200 dark:hover:bg-gray-700',
      outline:
        'border text-gray-500 bg-transparent border-gray-200 border-solid hover:bg-white hover:text-gray-600 hover:border-gray-600 dark:text-white dark:border-dark-400 dark:hover:text-dark-600 dark:hover:border-white',
      dashed:
        'border text-gray-500 bg-transparent border-gray-200 border-dashed hover:text-gray-600 hover:border-gray-600 dark:text-white dark:border-dark-400 dark:hover:text-white dark:hover:border-white',
      link: 'bg-transparent text-brand-800 hover:bg-brand-900 hover:bg-opacity-25',
      text: 'text-gray-400 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 dark:text-dark-300 dark:hover:bg-dark-600',
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
      ...paddingAndTextSize,
    },
    loading: 'animate-spin',
    // disabled prefix is disabled (lol) by default in tailwind
    // so we apply normal utilities instead, however you can add disabled prefixes if you enabled them in tailwind config.
    // see more: https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
    disabled: 'opacity-75 cursor-not-allowed pointer-events-none',
  },

  /* 
    Input
  */

  input: {
    base: `block box-border pl-3 pr-3 py-2 w-full rounded-md shadow-sm text-sm border border-solid transition-all
bg-white text-input-value-light border-input-border-light
dark:bg-transparent dark:text-input-value-dark dark:border-input-border-dark
shadow-sm
focus:ring-1 focus:ring-brand-600 transition focus:outline-none focus:border-brand-600 dark:focus:border-brand-600 focus:shadow-md
`,
    container: 'relative',
    error: 'border-red-500 dark:border-red-500',
    with_icon: 'pl-10',
    size: {
      ...paddingAndTextSize,
    },
    actions_container: 'absolute inset-y-0 right-0 pl-3 pr-1 flex items-center',
  },

  /* 
    Form Layout
  */

  form_layout: {
    container: 'grid gap-2',

    flex: {
      base: 'flex justify-between',
      left: {
        labels: 'order-2',
        data_input: 'order-1',
      },
      right: {
        labels: '',
        data_input: 'text-right',
      },
    },

    responsive: 'md:grid md:grid-cols-12 md:gap-x-4',
    non_responsive: 'grid grid-cols-12 gap-2',

    label_horizontal_layout:
      'flex flex-row space-x-2 justify-between col-span-12',
    label_vertical_layout: 'flex flex-col space-y-2 col-span-4',

    data_input_horizontal_layout: 'col-span-12',
    data_input_vertical_layout: 'col-span-8',

    data_input_vertical_layout__align_right: 'text-right',

    label: {
      base: 'block text-input-label-light dark:text-input-label-dark',
      size: {
        ...defaults.size.text,
      },
    },
    label_optional: {
      base: 'text-gray-400 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    description: {
      base: 'mt-2 text-gray-400 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    label_before: {
      base: 'text-gray-400 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    label_after: {
      base: 'text-gray-400 dark:text-gray-300',
      size: {
        ...defaults.size.text,
      },
    },
    error: {
      base: 'mt-1.5 text-red-500',
      size: {
        ...defaults.size.text,
      },
    },
    size: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
  },
}
// dark:focus:border-input-border-focus-dark dark:focus:ring-input-border-focus-dark

// focus:ring-input-border-focus-light focus:border-input-border-focus-light focus:outline-none
// transition-shadow shadow-sm focus:shadow-md
