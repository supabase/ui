/*
 * Globlal Variables
 *
 */

const defaults = {
  bg: {
    brand: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-200',
    },
  },
  text: {
    brand: 'text-purple-600',
    body: 'text-grayScale-600 dark:text-grayScaleDark-200',
    title: 'text-grayScale-700 dark:text-grayScaleDark-100',
  },
  border: {
    brand: 'border-purple-600',
    primary: 'dark:border-grayScaleDark-600',
    secondary: 'border-grayScale-300 dark:border-grayScaleDark-500',
    alternative: 'border-grayScale-600 dark:border-grayScaleDark-200',
  },
  placeholder: 'placeholder-gray-300 dark:placeholder-grayScaleDark-500',
  focus: `focus:outline-none focus:ring-brandColor focus:ring-2 focus:ring-opacity-50 dark:focus:ring-opacity-30`,
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
    fix: 'border-opacity-100 dark:border-opacity-100',
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
      'border border-solid bg-white border-grayScale-200 dark:bg-grayScaleDark-700 dark:border-darkmode divide divide-y',
    label: 'text-sm',
    button:
      'px-6 py-4 flex justify-between w-full text-left cursor-pointer border-0 border-solid font-medium text-base bg-transparent border-grayScale-200 text-grayScale-500 hover:text-grayScale-600 dark:border-darkmode dark:text-grayScaleDark-200 dark:hover:text-white',
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
      gray: 'bg-grayScale-500 dark:bg-opacity-10 text-grayScale-500',
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
      bg-white dark:bg-grayScaleDark-700
      
      border
      ${defaults.border.primary} 

      flex flex-col 
      rounded-md shadow-lg overflow-hidden relative
    `,
    hoverable: 'transition transform hover:-translate-y-1 hover:shadow-2xl',
    head: `px-8 py-6 flex justify-between 
    border-b
      ${defaults.border.primary} `,
    content: 'p-8',
  },

  /*
   * Tabs
   */

  tabs: {
    base: `w-full justify-between space-y-4`,
    underlined: {
      list: `flex items-center border-b ${defaults.border.primary}`,
      base: ` 
        relative 
        cursor-pointer 

        text-grayScale-400 
        dark:text-grayScale-300
        
        flex 
        items-center 
        space-x-2

        text-center 
        transition ease-out duration-200

        text-opacity-50 dark:text-opacity-50
        hover:text-opacity-100
        dark:hover:text-opacity-100

        focus:outline-none focus:ring
      `,
      inactive: `
      `,
      active: `
        text-opacity-100 dark:text-opacity-100
        ${defaults.border.alternative}
        border-b-2
      `,
    },
    pills: {
      list: 'flex space-x-1',
      base: ` 
        relative 
        cursor-pointer 

        flex 
        items-center 
        space-x-2

        text-center 
        transition ease-out duration-200 
        hover:bg-opacity-90
        shadow-sm
        rounded

        focus:outline-none focus:ring
      `,
      inactive: `
        bg-grayScale-100 dark:bg-grayScaleDark-600

        border
        ${defaults.border.secondary} 
        ${utils.border.hover}

        text-grayScale-600 hover:text-grayScale-700 dark:text-grayScaleDark-300
      `,
      active: `
        bg-white 
 
        hover:bg-grayScale-50

        text-grayScale-500 
        hover:text-grayScale-600 

        border
        ${defaults.border.secondary} 
        ${utils.border.hover}

        dark:border-grayScaleDark-600 
      `,
    },
    block: 'w-full flex items-center justify-center',
    size: {
      ...default__padding_and_text,
    },
    scrollable: `overflow-auto whitespace-nowrap`,
    content: `focus:outline-none focus:ring`,
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
      rounded 
      ${defaults.focus}
      hover:bg-opacity-90
      shadow-sm
    `,
    container: 'inline-flex font-medium',
    type: {
      primary: `
        bg-brandColor
        text-white 
        border
        border-brandColor
        ${utils.border.hover}
      `,
      default: `
        bg-white 
        hover:bg-grayScale-50
        text-grayScale-500 
        hover:text-grayScale-600 
        border
        ${defaults.border.secondary} 
        ${utils.border.hover}
        dark:border-grayScaleDark-600 
      `,
      alternative: `
        bg-brandColor
        bg-opacity-10 dark:bg-opacity-20
        hover:bg-opacity-20 dark:hover:bg-opacity-30
        border
        border-brandColor
        border-opacity-20
        text-grayScale-600 
        hover:text-grayScale-700 
        dark:text-grayScaleDark-300
      `,
      secondary: `
        bg-grayScale-100 dark:bg-grayScaleDark-600
        border
        ${defaults.border.secondary} 
        ${utils.border.hover}
        ${defaults.text.body}
        hover:text-grayScale-700
      `,
      outline: `
        text-grayScale-500 
        bg-transparent 
        
        border
        ${defaults.border.secondary} 
        ${utils.border.hover}

        border-grayScale-200 border-solid 
        
        hover:bg-white 
        hover:text-grayScale-600 
        dark:text-white 
        
        dark:hover:text-grayScaleDark-600 
      `,
      link: `
        text-brandColor
        border
        bg-brandColor
        ${defaults.border.brand}
        
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        
        hover:bg-opacity-10 dark:hover:bg-opacity-10
        hover:border-opacity-5
        shadow-none
      `,
      dashed: `
        border
        border-dashed
        ${defaults.border.secondary} 
        ${utils.border.hover}

        ${defaults.text.body}
        bg-transparent
        
        hover:text-grayScale-600
        
        dark:text-white
        dark:hover:text-white 
    `,
      text: `
        bg-grayScale-50 dark:bg-grayScaleDark-500
        ${defaults.text.body}
        border-grayScale-50 dark:border-grayScaleDark-500
        border-opacity-0 dark:border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        hover:bg-opacity-25 dark:hover:bg-opacity-25
        hover:border-opacity-5 dark:hover:border-opacity-10
        shadow-none
      `,
      danger: `
        bg-red-500 
        bg-opacity-75 dark:bg-opacity-75
        hover:bg-opacity-100 dark:hover:bg-opacity-100

        border
        border-red-600 
        border-opacity-40
        

        text-white
        
        text-opacity-90
        hover:text-opacity-100
      `,
      warning: `
        bg-yellow-400 
        bg-opacity-10 dark:bg-opacity-10
        hover:bg-opacity-20 dark:hover:bg-opacity-20

        border
        border-yellow-600 
        border-opacity-40

        text-yellow-600 
        text-opacity-90
        hover:text-opacity-100
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
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-grayScale-600   
      dark:text-grayScaleDark-200 
      border
      focus:border-brandColor
      focus:shadow-md
      ${defaults.focus}
      ${defaults.placeholder}
    `,
    variants: {
      standard: `
        bg-white
        dark:bg-transparent
        border-input-border-light dark:border-input-border-dark
        `,
      error: `
        bg-red-500
        bg-opacity-5
        border-red-500 
        dark:border-red-500
        focus:outline-none focus:ring-red-500
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container: 'absolute inset-y-0 right-0 pl-3 pr-1 flex items-center',
  },

  /*
   * Input
   */

  inputNumber: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-grayScale-600   
      dark:text-grayScaleDark-200 
      border
      focus:border-brandColor
      focus:shadow-md
      ${defaults.focus}
      ${defaults.placeholder}
    `,
    variants: {
      standard: `
        bg-white
        dark:bg-transparent
        border-input-border-light dark:border-input-border-dark`,
      error: `
        bg-red-500
        bg-opacity-5
        border-red-500 
        dark:border-red-500
       `,
    },
    container: 'relative',
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
      base: 'block text-grayScale-600 dark:text-grayScaleDark-200',
      size: {
        ...defaults.size.text,
      },
    },
    label_optional: {
      base: 'text-grayScale-400 dark:text-grayScaleDark-400',
      size: {
        ...defaults.size.text,
      },
    },
    description: {
      base: 'mt-2 text-grayScale-400 dark:text-grayScaleDark-400',
      size: {
        ...defaults.size.text,
      },
    },
    label_before: {
      base: 'text-grayScale-400 dark:text-grayScaleDark-400',
      size: {
        ...defaults.size.text,
      },
    },
    label_after: {
      base: 'text-grayScale-400 dark:text-grayScaleDark-400',
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

  /*
   *  Dropdown
   */

  dropdown: {
    // root:
    trigger: `
      border-none 
      rounded
      bg-transparent p-0
      ${defaults.focus}
      
      `,
    content: `
      bg-bgScale-50 dark:bg-bgScaleDark-600 p-0
      border border-lightmode dark:border-darkmode
      rounded
      shadow-lg
      origin-dropdown
      dropdown-content
      data-open:bg-red-500
      py-1.5
    `,
    arrow: `
      fill-current text-bg-primary-light dark:text-bg-secondary-dark;
      border-0 border-t;
    `,
    item: `
      relative
      text-xs
      ${defaults.text.body}
      px-4 py-1.5 flex items-center space-x-2
      cursor-pointer
      focus:bg-brandColor 
      focus:text-grayScale-100
      border-none
      focus:outline-none
    `,
    label: `
      text-typography-body-secondary-light dark:text-typography-body-secondary-dark;
      px-4 flex items-center space-x-2 py-1.5
      text-xs
    `,
    seperator: `
      w-full
      h-px
      my-2
      bg-bgScale-100 dark:bg-bgScaleDark-700
    `,
    misc: `
      px-4 py-1.5
    `,
    check: `
      absolute left-3
      flex items-center
    `,
    input: `
      flex items-center space-x-0 pl-8 pr-4
    `,
    right_slot: `
      ${defaults.text.body}
      absolute
      inset-y-2/4
      top
      right-0
    `,
  },
}
// dark:focus:border-input-border-focus-dark dark:focus:ring-input-border-focus-dark

// focus:ring-input-border-focus-light focus:border-input-border-focus-light focus:outline-none
// transition-shadow shadow-sm focus:shadow-md
