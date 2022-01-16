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
    body: 'text-scale-600 dark:text-scaleDark-200',
    title: 'text-scale-700 dark:text-scaleDark-100',
  },
  border: {
    brand: 'border-purple-600',
    primary: 'dark:border-scaleDark-600',
    secondary: 'border-scale-300 dark:border-scaleDark-500',
    alternative: 'border-scale-600 dark:border-scaleDark-200',
  },
  placeholder: 'placeholder-scale-800',
  focus: `focus:outline-none focus:ring-current focus:ring-2`,
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
  overlay: {
    base: `absolute inset-0 bg-scale-200 opacity-50`,
    container: `fixed inset-0 transition-opacity`,
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
    variants: {
      default: {
        base: `
          flex flex-col
          space-y-3
        `,
        container: `
          group
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
          overflow-hidden
        `,
        trigger: `
          flex flex-row
          gap-3
          items-center
          w-full 
          text-left 
          cursor-pointer 

          outline-none
          focus-visible:ring-1
          focus-visible:z-50
          ring-scale-1100
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          py-3
        `,
      },
      bordered: {
        base: `
          flex flex-col
          -space-y-px
        `,
        container: `
          group
          border
          border-scale-700
          
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        trigger: `
          flex flex-row
          items-center
          px-6 py-4 
          w-full 
          text-left 
          cursor-pointer 
          
          font-medium 
          text-base 
          bg-transparent 

          outline-none
          focus-visible:ring-1
          focus-visible:z-50
          ring-scale-1100
          
          transition-colors
          hover:bg-scale-200

          overflow-hidden

          group-first:rounded-tl-md group-first:rounded-tr-md
          group-last:rounded-bl-md group-last:rounded-br-md
        `,
        content: `
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,
        panel: `
          px-6 py-3
          border-t border-scale-700
          bg-scale-200
        `,
      },
    },
    justified: `justify-between`,
    chevron: {
      base: `
        text-scale-900
        rotate-0 group-radix-state-open:rotate-180
        duration-200
      `,
      align: {
        left: 'order-first',
        right: 'order-last',
      },
    },
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
      gray: 'bg-scale-500 dark:bg-opacity-10 text-scale-500',
      red: 'bg-radix-red-500 dark:bg-opacity-10 text-radix-red-500',
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
        'bg-radix-red-500 bg-opacity-10 dark:bg-opacity-5 text-radix-red-600 border-radix-red-500',
      warning:
        'bg-yellow-600 bg-opacity-10 dark:bg-opacity-5 text-yellow-600 border-yellow-600',
      info: 'bg-blue-600 bg-opacity-10 dark:bg-opacity-5 text-blue-600 border-blue-600',
      success:
        'bg-green-600 bg-opacity-10 dark:bg-opacity-5 text-green-600 border-green-600',
    },
    description: {
      danger: 'text-sm text-radix-red-600 text-opacity-80',
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
      bg-white dark:bg-scaleDark-700
      
      border
      ${defaults.border.primary} 

      flex flex-col 
      rounded-md shadow-lg overflow-hidden relative
    `,
    hoverable: 'transition hover:-translate-y-1 hover:shadow-2xl',
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

        text-scale-400 
        dark:text-scale-300
        
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
        bg-scale-100 dark:bg-scaleDark-600

        border
        ${defaults.border.secondary} 
        ${utils.border.hover}

        text-scale-600 hover:text-scale-700 dark:text-scaleDark-300
      `,
      active: `
        bg-white 
 
        hover:bg-scale-50

        text-scale-500 
        hover:text-scale-600 

        border
        ${defaults.border.secondary} 
        ${utils.border.hover}

        dark:border-scaleDark-600 
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

  // button: {
  //   base : 'border border-4'
  // }

  button: {
    base: `
      relative 
      cursor-pointer 
      inline-flex items-center space-x-2 
      text-center 
      transition ease-out duration-200 
      rounded 
      ${defaults.focus}
      shadow-sm
    `,
    container: 'inline-flex font-medium',
    type: {
      primary: `
        bg-brand-fixed-900 hover:bg-brand-fixed-800
        text-brand-fixed-1200
        border border border-brand-fixed-800 hover:border-brand-fixed-1000
        focus:ring-scale-1200
      `,
      default: `
        bg-scale-1200 hover:bg-scale-1100
        text-scale-100 hover:text-scale-600 
        border border-scale-1100
        focus:ring-scale-1200
      `,
      secondary: `
        text-scale-1200
        bg-scale-300 hover:bg-scale-500
        border border-scale-700 hover:border-scale-900
      `,
      alternative: `
        bg-brandScale-200 hover:bg-brandScale-400
        border border-brandScale-600 hover:border-brandScale-800
        border-opacity-20
        text-brandScale-1100
      `,
      outline: `
        text-scale-1200 
        bg-transparent 
        border border-scale-700 hover:border-scale-900
      `,
      dashed: `
        text-scale-1200 
        border
        border-dashed
        border border-scale-700 hover:border-scale-900
        bg-transparent
      `,
      link: `
        text-brandScale-1100
        border
        hover:bg-brandScale-400
        border-opacity-0
        bg-opacity-0 dark:bg-opacity-0
        shadow-none
      `,
      text: `
        text-scale-1200 
        hover:bg-scale-500
        shadow-none
      `,
      danger: `
        text-radix-red-1100
        bg-radix-red-200 hover:bg-radix-red-400
        border border-radix-red-700 hover:border-radix-red-900
      `,
      warning: `
        text-radix-amber-1100
        bg-radix-amber-200 hover:bg-radix-amber-400
        border border-radix-amber-700 hover:border-radix-amber-900
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
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}
    `,
    variants: {
      standard: `
        bg-scale-100
        border border-scale-700
        `,
      error: `
        bg-radix-red-100
        border border-radix-red-700 
        focus:ring-radix-red-900
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
    textarea_actions_container:
      'absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start',
    textarea_actions_container_items: 'flex items-center',
  },

  /*
   * Select
   */

  select: {
    base: `
      block 
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-scale-100
        border border-scale-700
        `,
      error: `
        bg-radix-red-100
        border border-radix-red-700 
        focus:ring-radix-red-900
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 mr-5 flex items-center',
    chevron_container:
      'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    chevron: 'h-5 w-5 text-scale-600',
  },

  /*
   * Input Number
   */

  inputNumber: {
    base: `
      block
      box-border 
      w-full 
      rounded-md 
      shadow-sm 
      transition-all
      text-scale-1200  
      border
      focus:shadow-md
      ${defaults.focus}
      focus:border-scale-900
      focus:ring-scale-400
      ${defaults.placeholder}

      appearance-none
      bg-none
    `,
    variants: {
      standard: `
        bg-scale-100
        border border-scale-700
      `,
      error: `
        bg-radix-red-100
        border border-radix-red-700 
        focus:ring-radix-red-900
       `,
    },
    container: 'relative',
    with_icon: 'pl-10',
    size: {
      ...default__padding_and_text,
    },
    actions_container:
      'absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center',
  },

  /*
   *  Checkbox
   *
   * 
   * This Checkbox requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  checkbox: {
    base: `
      bg-transparent 
      ${defaults.focus}
      focus:ring-scale-400
      text-brand-900 
      border-scale-700 
      shadow-sm
      rounded
      cursor-pointer
    `,
    container: `flex cursor-pointer leading-none`,
    size: {
      tiny: `h-3 w-3 mt-1 mr-3`,
      small: `h-3.5 w-3.5 mt-0.5 mr-3.5`,
      medium: `h-4 w-4 mt-0.5 mr-3.5`,
      large: `h-5 w-5 mt-0.5 mr-4`,
      xlarge: `h-5 w-5 mt-0.5 mr-4`,
    },

    label: {
      base: `text-scale-1100 cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    description: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    group: `space-y-3`,
  },

  /*
   *  Radio
   *
   * 
   * This Radio requires a plugin in your config:
  
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
   * 
   * 
  */

  radio: {
    base: `
      absolute
      bg-transparent
      ${defaults.focus}
      focus:ring-brand-400
      border-scale-700
      text-brand-900
      shadow-sm
      cursor-pointer
      peer
    `,
    hidden: `absolute opacity-0`,
    size: {
      tiny: `h-3 w-3`,
      small: `h-3.5 w-3.5`,
      medium: `h-4 w-4`,
      large: `h-5 w-5`,
      xlarge: `h-5 w-5`,
    },
    variants: {
      cards: {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `-space-y-px`,
        base: `
          border border-scale-700
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-100 z-10
          border-brand-900 border-1
        `,
        radio_offset: 'left-4',
      },

      'stacked-cards': {
        container: {
          base: `relative cursor-pointer flex items-center justify-between`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-3`,
        base: `
          border border-scale-700 rounded-lg
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-100 z-10
          border-brand-900 border-1
        `,
        radio_offset: 'left-4',
      },

      'small-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical:
              'flex flex-col space-y-1 flex items-center justify-center',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border border-scale-700 hover:border-scale-900 
          rounded-lg 
          grow
          items-center
          flex-wrap
          justify-center
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-100 z-10
          border-brand-900 border-1
          hover:border-brand-900
        `,
        radio_offset: 'left-4',
      },

      'large-cards': {
        container: {
          base: `relative cursor-pointer flex`,
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `flex flex-row gap-3`,
        base: `
          transition 
          border border-scale-700 hover:border-scale-900 
          rounded-lg 
          grow
        `,
        size: {
          tiny: `px-5 py-3`,
          small: `px-6 py-4`,
          medium: `px-6 py-4`,
          large: `px-8 p-4`,
          xlarge: `px-8 p-4`,
        },
        active: `
          bg-brand-100 z-10
          border-brand-900 border-1
          hover:border-brand-900
        `,
        radio_offset: 'left-4',
      },

      list: {
        container: {
          base: `relative cursor-pointer flex`,
          size: {
            tiny: `pl-6`,
            small: `pl-6`,
            medium: `pl-7`,
            large: `pl-10`,
            xlarge: `pl-10`,
          },
          align: {
            vertical: 'flex flex-col space-y-1',
            horizontal: 'flex flex-row space-x-2',
          },
        },
        group: `space-y-4`,
        base: ``,
        size: {
          tiny: `0`,
          small: `0`,
          medium: `0`,
          large: `0`,
          xlarge: `0`,
        },
        active: ``,
        radio_offset: 'left-0',
      },
    },
    label: {
      base: `text-scale-1100 cursor-pointer`,
      ...defaults.size.text,
    },
    label_before: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    label_after: {
      base: 'text-scale-500',
      ...defaults.size.text,
    },
    description: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    optionalLabel: {
      base: `text-scale-900`,
      ...defaults.size.text,
    },
    disabled: `opacity-50 cursor-auto border-dashed`,
  },

  sidepanel: {
    base: `
      bg-overlay-bg
      h-full 
      flex flex-col 
      fixed 
      inset-y-0 
      max-w-full 
      flex 
      h-screen
      border-l border-overlay-border
      shadow-xl
    `,
    header: `
      space-y-1 py-4 px-4 bg-overlay-bg sm:px-6 
      border-b border-overlay-border
    `,
    content: `
      relative flex-1 px-4 sm:px-6 py-4
    `,
    footer: `
      flex justify-end gap-2
      p-4 bg-overlay-bg 
      border-t border-overlay-border
    `,
    size: {
      medium: `w-screen max-w-md h-full`,
      large: `w-screen max-w-2xl h-full`,
    },
    align: {
      left: `
        left-0
        data-open:animate-panel-slide-left-out 
        data-closed:animate-panel-slide-left-in
      `,
      right: `
        right-0
        data-open:animate-panel-slide-right-out 
        data-closed:animate-panel-slide-right-in
      `,
    },
    overlay: `
      fixed
      h-full
      w-full
      bg-scale-100
      opacity-50
      data-closed:animate-fade-out-overlay-bg 
      data-open:animate-fade-in-overlay-bg
      
    `,
    // this is to reset the button
    // it is advised not to change this
    trigger: `
      border-none bg-transparent p-0 focus:ring-0
    `,
  },

  /*
   *  Toggle
   */

  toggle: {
    base: `
      p-0 relative 
      inline-flex flex-shrink-0 
      h-6 w-11 
      border-2 border-transparent 
      rounded-full 
      cursor-pointer
      transition-colors ease-in-out duration-200
      ${defaults.focus}
      focus:ring-scale-400
      bg-scale-500
    `,
    active: `
      bg-brand-900    
    `,
    handle_container: {
      tiny: 'h-4 w-7',
      small: 'h-6 w-11',
      medium: 'h-6 w-11',
      large: 'h-7 w-12',
      xlarge: 'h-7 w-12',
    },
    handle: {
      base: 'inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition ease-in-out duration-200',
      tiny: 'h-3 w-3',
      small: 'h-5 w-5',
      medium: 'h-5 w-5',
      large: 'h-6 w-6',
      xlarge: 'h-6 w-6',
    },
    handle_active: {
      tiny: ' translate-x-3',
      small: 'translate-x-5',
      medium: 'translate-x-5',
      large: 'translate-x-5',
      xlarge: 'translate-x-5',
    },
    disabled: 'opacity-75 cursor-not-allowed',
  },

  /*
   *  Form Layout
   */

  form_layout: {
    container: 'grid gap-2',

    flex: {
      left: {
        base: 'flex flex-row gap-6',
        content: ``,
        labels: 'order-2',
        data_input: 'order-1',
      },
      right: {
        base: 'flex flex-row gap-6 justify-between',
        content: `order-last`,
        labels: '',
        data_input: 'text-right',
      },
    },

    responsive: 'md:grid md:grid-cols-12 md:gap-x-4',
    non_responsive: 'grid grid-cols-12 gap-2',

    labels_horizontal_layout:
      'flex flex-row space-x-2 justify-between col-span-12',
    labels_vertical_layout: 'flex flex-col space-y-2 col-span-4',

    data_input_horizontal_layout: 'col-span-12',

    non_box_data_input_spacing_vertical: 'my-3',
    non_box_data_input_spacing_horizontal: 'my-3 md:mt-0 mb-3',

    data_input_vertical_layout: 'col-span-8',

    data_input_vertical_layout__align_right: 'text-right',

    label: {
      base: 'block text-scale-1100',
      size: {
        ...defaults.size.text,
      },
    },
    label_optional: {
      base: 'text-scale-900',
      size: {
        ...defaults.size.text,
      },
    },
    description: {
      base: 'mt-2 text-scale-900',
      size: {
        ...defaults.size.text,
      },
    },
    label_before: {
      base: 'text-scale-500 ',
      size: {
        ...defaults.size.text,
      },
    },
    label_after: {
      base: 'text-scale-500',
      size: {
        ...defaults.size.text,
      },
    },
    error: {
      base: 'mt-1.5 text-radix-red-900',
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
      data-open:bg-radix-red-500
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
      focus:text-scale-100
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

  /*
   * Menu
   */

  menu: {
    item: {
      base: `
        border-l
        px-3 py-1
        cursor-pointer
        flex space-x-3 items-center
        outline-none
        focus-visible:ring-1 ring-scale-1200 focus-visible:z-10 
        group
      `,
      // block
      // border-l
      // pl-4 -ml-px
      // border-transparent
      // hover:border-gray-400
      // dark:hover:border-gray-500
      // text-gray-700
      // hover:text-gray-900
      // dark:text-gray-400
      // dark:hover:text-gray-300
      normal: `
        font-normal
        border-scale-500
        group-hover:border-scale-900`,
      active: `
        font-semibold
        bg-scale-100
        text-scale-900
        z-10
      `,
      bar: `
        border-l-2 
        border-brand-900
        group-hover:border-brand-900
      `,
      content: {
        base: `transition truncate text-sm`,
        normal: `text-scale-1000 group-hover:text-scale-1100`,
        active: `text-brand-900`,
      },
      icon: {
        base: `transition truncate text-sm`,
        normal: `text-scale-800 group-hover:text-scale-900`,
        active: `text-brand-900`,
      },
    },
    group: {
      base: `flex space-x-3 mb-2 mt-4 font-medium`,
      icon: `text-scale-900`,
      content: `text-sm text-scale-1200`,
    },
  },
}
