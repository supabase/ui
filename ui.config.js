const deepMerge = require('deepmerge')
const forms = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

// const backgroundOpacity = (theme) => ({
//   10: '0.1',
//   ...theme('opacity'),
// })

// const maxHeight = (theme) => ({
//   0: '0',
//   xl: '36rem',
//   ...theme('spacing'),
// })

const windmillConfig = {
  // darkMode: 'class',
  // purge: {
  //   content: [
  //     'node_modules/@windmill/react-ui/lib/defaultTheme.js',
  //     'node_modules/@windmill/react-ui/dist/index.js',
  //   ],
  // },
  theme: {
    // colors,
    // backgroundOpacity,
    // maxHeight,
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      // note: default border not working
      // temp workaround is to use variations below
      lightmode: '#f0f2f5',
      darkmode: theme('colors.gray.600', 'currentColor'),
    }),
    ringColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.brandColor', 'currentColor'),
    }),
    extend: {
      // dropdown extensions
      transformOrigin: {
        // tailwind class for this is `origin-dropdown`
        dropdown: 'var(--radix-dropdown-menu-content-transform-origin)',
        YOLO: 'var(--radix-dropdown-menu-content-transform-origin)',
      },
      keyframes: {
        dropdownFadeIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        dropdownFadeOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.95)', opacity: 0 },
        },
        fadeInOverlayBg: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.5 },
        },
        fadeOutOverlayBg: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 0 },
        },
        slideDown: {
          '0%': { height: 0, opacity: 0 },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
            opacity: 1,
          },
        },
        slideUp: {
          '0%': { height: 'var(--radix-accordion-content-height)', opacity: 1 },
          '100%': { height: 0, opacity: 0 },
        },
        panelSlideLeftOut: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': {
            transform: 'translate-x-0',
            opacity: 1,
          },
        },
        panelSlideLeftIn: {
          '0%': { transform: 'translate-x-0', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        panelSlideRightOut: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': {
            transform: 'translate-x-0',
            opacity: 1,
          },
        },
        panelSlideRightIn: {
          '0%': { transform: 'translate-x-0', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 300ms',
        'fade-out': 'fadeOut 300ms',

        'fade-in-overlay-bg': 'fadeInOverlayBg 300ms',
        'fade-out-overlay-bg': 'fadeOutOverlayBg 300ms',

        'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',

        'panel-slide-left-out':
          'panelSlideLeftOut 200ms cubic-bezier(0.87, 0, 0.13, 1)',
        'panel-slide-left-in':
          'panelSlideLeftIn 250ms cubic-bezier(0.87, 0, 0.13, 1)',
        'panel-slide-right-out':
          'panelSlideRightOut 200ms cubic-bezier(0.87, 0, 0.13, 1)',
        'panel-slide-right-in':
          'panelSlideRightIn 250ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      // animation: {
      //   // tailwind class for this is `animate-dropdownFadeIn`
      //   dropdownFadeIn: 'dropdownFadeIn 0.1s ease-out',
      //   // tailwind class for this is `animate-dropdownFadeOut`
      //   dropdownFadeOut: 'dropdownFadeOut 0.1s ease-out',
      // },
    },
  },
  // variants: {
  //   backgroundOpacity: ['responsive', 'hover', 'focus', 'dark'],
  //   backgroundColor: ['responsive', 'hover', 'focus', 'active', 'odd', 'dark'],
  //   display: ['responsive', 'dark'],
  //   textColor: [
  //     'responsive',
  //     'focus',
  //     'focus-within',
  //     'hover',
  //     'active',
  //     'dark',
  //   ],
  //   placeholderColor: ['responsive', 'focus', 'dark'],
  //   borderColor: ['responsive', 'hover', 'focus', 'dark'],
  //   divideColor: ['responsive', 'dark'],
  //   boxShadow: ['responsive', 'hover', 'focus', 'dark'],
  //   margin: ['responsive', 'last'],
  // },
  plugins: [
    plugin(function ({ addUtilities, addVariant }) {
      // addVariant('data-open', '&:[data-state=open]')
      addUtilities({
        ".dropdown-content[data-state='open']": {
          animation: 'fadeIn 50ms ease-out',
        },
        ".dropdown-content[data-state='closed']": {
          animation: 'fadeOut 50ms ease-in',
        },

        "[data-state='open'] .accordion-content-animation": {
          animation: 'slideDown 200ms ease-out',
        },
        "[data-state='closed'] .accordion-content-animation": {
          animation: 'slideUp 200ms ease-in',
        },
        '.text-code': {
          margin: '0 0.2em',
          padding: '0.2em 0.4em 0.1em',
          background: 'hsla(0, 0%, 58.8%, 0.1)',
          border: '1px solid hsla(0, 0%, 39.2%, 0.2)',
          borderRadius: '3px',
        },
      })
      // addVariant('optional', '&:optional')
      // addVariant('hocus', ['&:hover', '&:focus'])
      // addVariant('supports-grid', '@supports (display: grid)')
      // addVariant('data-open', '&:["data-state=open"]')
      addVariant('data-open', '&[data-state="open"]')
      addVariant('data-closed', '&[data-state="closed"]')

      addVariant('parent-data-open', '[data-state="open"]&')
    }),
    require('tailwindcss-radix')(),
    forms,
  ],
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc
    return [...acc, cur]
  }, [])
}

/**
 * Merge Windmill and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }
  return deepMerge({ ...tailwindConfig, purge }, windmillConfig, {
    arrayMerge: arrayMergeFn,
  })
}

module.exports = wrapper
