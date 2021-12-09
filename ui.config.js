const deepMerge = require('deepmerge')
const customFormsPlugin = require('@tailwindcss/forms')

const backgroundOpacity = (theme) => ({
  10: '0.1',
  ...theme('opacity'),
})

const maxHeight = (theme) => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
})

const windmillConfig = {
  darkMode: 'class',
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
      transformOrigin: {
        dropdown: 'var(--radix-dropdown-menu-content-transform-origin)',
      },
      animation: {
        dropdown: 'transition 0.1s ease-out',
      },
    },
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'odd', 'dark'],
    display: ['responsive', 'dark'],
    textColor: [
      'responsive',
      'focus',
      'focus-within',
      'hover',
      'active',
      'dark',
    ],
    placeholderColor: ['responsive', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    divideColor: ['responsive', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'dark'],
    margin: ['responsive', 'last'],
  },
  plugins: [customFormsPlugin],
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
