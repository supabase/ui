// import css for san serif font styling
import { themes } from '@storybook/theming'
import './preview.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    dark: {
      base: 'light',

      colorPrimary: '#24b47e',
      colorSecondary: '#24b47e',

      // UI
      appBg: '#181818',
      appContentBg: '#181818',
      appBorderColor: 'transparent',
      appBorderRadius: 2,

      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',

      // Text colors
      textColor: 'white',
      textInverseColor: 'rgba(255,255,255,0.9)',

      // Toolbar default and active colors
      barTextColor: 'white',
      barSelectedColor: 'white',
      barBg: '#181818',

      // Form colors
      inputBg: '#181818',
      inputBorder: '#666666',
      inputTextColor: 'white',
      inputBorderRadius: 2,

      brandTitle: 'My custom storybook',
      brandUrl: 'https://example.com',
      brandImage: 'https://supabase.io/new/images/logo-dark.png',

      gridCellSize: 320,
    },
    light: {
      base: 'light',

      colorPrimary: '#24b47e',
      colorSecondary: '#24b47e',

      // UI
      appBg: 'white',
      appContentBg: 'white',
      appBorderColor: 'transparent',
      appBorderRadius: 2,

      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',

      // Text colors
      textColor: '#181818',
      textInverseColor: 'rgba(255,255,255,0.9)',

      // Toolbar default and active colors
      barTextColor: '#181818',
      barSelectedColor: 'black',
      barBg: 'white',

      // Form colors
      inputBg: 'white',
      inputBorder: '#666666',
      inputTextColor: '#181818',
      inputBorderRadius: 2,

      brandTitle: 'My custom storybook',
      brandUrl: 'https://example.com',
      brandImage: 'https://supabase.io/new/images/logo-dark.png',

      gridCellSize: 320,
      brandImage: 'https://supabase.io/new/images/logo-light.png',
    },
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
  viewMode: 'docs',
}
