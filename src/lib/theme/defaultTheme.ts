/*
 * Globlal Variables
 *
 */

const defaults = {
  // brand color
  // primaryBackground: 'bg-indigo-600',
  // primaryText: 'text-indigo-600',

  bg: {
    brand: {
      primary: 'bg-indigo-600',
      secondary: 'bg-indigo-200',
    },
  },
  text: {
    brand: 'text-indigo-600',
    body: 'text-typography-body-light dark:text-typography-body-dark',
    title: 'text-typography-title-light dark:text-typography-title-dark',
  },
  border: {
    brand: 'border border-indigo-600',
    primary: 'border dark:border-gray-600',
    secondary: 'border border-gray-300 dark:border-gray-500',
  },
  size: {
    // buttons, inputs, input labels use these sizes
    text: {
      tiny: 'text-xs',
      small: 'text-sm leading-4',
      medium: 'text-sm',
      large: 'text-base',
      xlarge: 'text-base',
    },
    // buttons, inputs, input labels use these sizes
    padding: {
      tiny: 'px-2.5 py-1.5',
      small: 'px-3 py-2',
      medium: 'px-4 py-2',
      large: 'px-4 py-2',
      xlarge: 'px-6 py-3',
    },
  },
}

const utils = {
  border: {
    hover:
      'border-opacity-50 dark:border-opacity-50 hover:border-opacity-100 dark:hover:border-opacity-100',
  },
}

const default__padding_and_text = {
  tiny: `${defaults.size.text.tiny} ${defaults.size.padding.tiny}`,
  small: `${defaults.size.text.small} ${defaults.size.padding.small}`,
  medium: `${defaults.size.text.medium} ${defaults.size.padding.medium}`,
  large: `${defaults.size.text.large} ${defaults.size.padding.large}`,
  xlarge: `${defaults.size.text.xlarge} ${defaults.size.padding.xlarge}`,
}

/*
 * Animations
 *
 */

const default___animations = {
  accordion: {
    enter: 'transition-max-height ease-in-out duration-700 overflow-hidden',
    enterFrom: 'max-h-0',
    enterTo: 'max-h-screen',
    leave: 'transition-max-height ease-in-out duration-300 overflow-hidden',
    leaveFrom: 'max-h-screen',
    leaveTo: 'max-h-0',
  },
}

/*
 * Main tailwind utility classes output
 *
 */

export default {
  /*
   * Accordion
   *
   */

  accordion: {
    base: 'flex flex-col rounded',
    bordered:
      'border border-solid bg-white border-gray-200 dark:bg-dark-700 dark:border-darkmode divide divide-y',
    label: 'text-sm',
    button:
      'px-6 py-4 flex justify-between w-full text-left cursor-pointer border-0 border-solid font-medium text-base bg-transparent border-gray-200 text-gray-500 hover:text-gray-600 dark:border-darkmode dark:text-dark-200 dark:hover:text-white',
    chevron: 'transform',
    'chevron--closed': '-rotate-90',
    'chevron--open': 'rotate-180',
    panel: 'px-6 py-4',
    animate: {
      ...default___animations.accordion,
    },
  },

  /*
   * Badge
   *
   */

  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-10',
    size: {
      large: 'px-3 py-0.5 rounded-full text-sm',
    },
    dot: '-ml-0.5 mr-1.5 h-2 w-2 rounded-full',
    color: {
      brand: 'bg-green-500 dark:bg-opacity-10 text-green-500',
      gray: 'bg-gray-500 dark:bg-opacity-10 text-gray-500',
      red: 'bg-red-500 dark:bg-opacity-10 text-red-500',
      yellow: 'bg-yellow-500 dark:bg-opacity-10 text-yellow-500',
      green: 'bg-green-500 dark:bg-opacity-10 text-green-500',
      blue: 'bg-blue-500 dark:bg-opacity-10 text-blue-500',
      indigo: 'bg-indigo-500 dark:bg-opacity-10 text-indigo-500',
      purple: 'bg-purple-500 dark:bg-opacity-10 text-purple-500',
      pink: 'bg-pink-500 dark:bg-opacity-10 text-pink-500',
    },
  },

  /*
   * Alert
   *
   */

  alert: {
    base: 'relative rounded py-4 px-6 flex space-x-4 border border-solid border-opacity-20',
    type: {
      danger:
        'bg-red-500 bg-opacity-10 dark:bg-opacity-5 text-red-600 border-red-500',
      warning:
        'bg-yellow-600 bg-opacity-10 dark:bg-opacity-5 text-yellow-600 border-yellow-600',
      info: 'bg-blue-600 bg-opacity-10 dark:bg-opacity-5 text-blue-600 border-blue-600',
      success:
        'bg-green-600 bg-opacity-10 dark:bg-opacity-5 text-green-600 border-green-600',
    },
    description: {
      danger: 'text-sm text-red-600 text-opacity-80',
      warning: 'text-sm text-yellow-600 text-opacity-80',
      info: 'text-sm text-blue-600 text-opacity-80',
      success: 'text-sm text-green-600 text-opacity-80',
    },
    title: 'block text-base leading-none font-normal mb-1',
    close:
      'absolute right-6 top-4 p-0 m-0 cursor-pointer transition ease-in-out bg-transparent border-transparent focus:outline-none text-current opacity-50 hover:opacity-100',
  },

  /*
   * Card
   */

  card: {
    base: `
      bg-white dark:bg-dark-700
      ${defaults.border.primary} 
      flex flex-col 
       rounded-md shadow-lg overflow-hidden relative`,
    hoverable: 'transition transform hover:-translate-y-1 hover:shadow-2xl',
    head: 'px-8 py-6 flex justify-between border-b',
    content: 'p-8',
  },

  /*
   * Button
   */

  button: {
    base: `
      relative 
      cursor-pointer 
      inline-flex items-center space-x-2 
      text-center 
      transition ease-out duration-200 
      outline-none rounded focus:outline-none
      hover:bg-opacity-90
      shadow-sm
    `,
    container: 'inline-flex font-medium',
    type: {
      primary: `
        ${defaults.bg.brand.primary}
        text-white 
      `,
      default: `
        bg-white 
 
        hover:bg-gray-50

        text-gray-500 
        hover:text-gray-600 

        ${defaults.border.secondary} 
        ${utils.border.hover}

        dark:border-gray-600 
      `,
      alternative: `
        ${defaults.bg.brand.primary}
        bg-opacity-10 dark:bg-opacity-20
        hover:bg-opacity-20 dark:hover:bg-opacity-30

        ${defaults.border.brand}
        border-opacity-20
        

        text-gray-600 
        hover:text-gray-700 
        dark:text-gray-300
      `,
      secondary: `
        bg-gray-100 dark:bg-gray-600

        ${defaults.border.secondary} 
        ${utils.border.hover}

        text-gray-600 hover:text-gray-700 dark:text-gray-300
      `,
      outline: `
        text-gray-500 
        bg-transparent 
        
        ${defaults.border.secondary} 
        ${utils.border.hover}

        border-gray-200 border-solid 
        
        hover:bg-white 
        hover:text-gray-600 
        dark:text-white 
        
        dark:hover:text-dark-600 
      `,
      link: `
        ${defaults.text.brand} 
        ${defaults.bg.brand.primary}
        ${defaults.border.brand}
        
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        
        hover:bg-opacity-10 dark:hover:bg-opacity-10
        hover:border-opacity-5
        shadow-none
      `,
      dashed: `
        border-dashed
        ${defaults.border.secondary} 
        ${utils.border.hover}

        text-gray-500
        bg-transparent
        
        hover:text-gray-600
        
        dark:text-white
        dark:hover:text-white 
    `,
      text: `
        ${defaults.text.body} 
        ${defaults.border.brand}
        
        bg-gray-50 dark:bg-gray-600
        
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        
        hover:bg-opacity-25 dark:hover:bg-opacity-25
        hover:border-opacity-5 dark:border-opacity-10
        shadow-none
      `,
      danger: `
        border-red-700 
        bg-red-600 
        text-white
      `,
      warning: `
        border-yellow-400 
        bg-yellow-300 
        text-gray-600
      `,
    },
    block: 'w-full flex items-center justify-center',
    shadow: 'shadow-sm',
    size: {
      ...default__padding_and_text,
    },
    loading: 'animate-spin',
    // disabled prefix is disabled (lol..) by default in tailwind
    // so we apply normal utilities instead, however you can add disabled prefixes if you enabled them in tailwind config.
    // see more: https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
    disabled: 'opacity-75 cursor-not-allowed pointer-events-none',
  },

  /*
   * Input
   */

  input: {
    base: `
    block box-border pl-3 pr-3 py-2 w-full rounded-md shadow-sm text-sm border border-solid transition-all
    bg-white text-input-value-light border-input-border-light
    dark:bg-transparent dark:text-input-value-dark dark:border-input-border-dark
    focus:ring-1 focus:ring-brand-600 focus:outline-none focus:border-brand-600 dark:focus:border-brand-600 focus:shadow-md
`,
    container: 'relative',
    error: 'border-red-500 dark:border-red-500',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container: 'absolute inset-y-0 right-0 pl-3 pr-1 flex items-center',
  },

  /*
   *  Form Layout
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
