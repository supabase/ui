const babel = require('@babel/core')
const postCssLoader = './postCssLoader'

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    postCssLoader,
  ],
  webpackFinal: async (config) => {
    // This is for fix webpack storybook get module @emotion/styled/base
    // It's wrong module, the right module is @emotion/styled-base
    config.resolve.alias = {
      '@emotion/styled/base': '@emotion/styled-base',
    }

    return config
  },
}
