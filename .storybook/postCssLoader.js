// taken from
// https://github.com/Negan1911/storybook-css-modules-preset/blob/master/index.js

const css_regex = '/\\.css$/'

module.exports = {
  webpackFinal(config = {}, options = {}) {
    const cssRule = config.module.rules.find(
      (_) => _.test.toString() === css_regex
    )

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter((_) => _.test.toString() !== css_regex),
          {
            ...cssRule,
            exclude: /\.module\.css$/,
          },
          {
            ...cssRule,
            test: /\.module\.css$/,
            use: cssRule.use.map((_) => {
              if (_ && _.loader && _.loader.match(/[\/\\]css-loader/g)) {
                return {
                  ..._,
                  options: {
                    ..._.options,
                    // modules: true,
                    modules: {
                      //   localIdentName: '[name]__[local]__[hash:base64:5]',
                      localIdentName: '[local]',
                    },
                  },
                }
              }

              return _
            }),
          },
        ],
      },
    }
  },
}
