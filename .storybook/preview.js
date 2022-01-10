// import css for san serif font styling
import './preview.css'
import { ThemeProvider } from './../src/components/ThemeProvider'
import CustomTheme from '../src/lib/theme/defaultTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
}

// .storybook/preview.js

import React from 'react'

export const decorators = [
  (Story) => {
    // console.log('story', Story)
    return (
      <ThemeProvider theme={CustomTheme}>
        <Story />
      </ThemeProvider>
    )
  },
]
