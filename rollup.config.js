import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'

import postcss from 'rollup-plugin-postcss-modules'

import del from 'rollup-plugin-delete'
import pkg from './package.json'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'

// so JS can be rolled with TS
// remove when JS files have been removed
// import nodeResolve from "rollup-plugin-node-resolve";
// import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import icons from './internals/icons'

console.log('Expected Externals', [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  './src',
])

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: {
    index: 'src/index.tsx',
    button: 'src/components/Button/index.tsx',
    // typography: 'src/components/Typography/index.tsx',
    // icon: 'src/components/Icon/index.tsx',
    // card: 'src/components/Card/index.tsx',
    // badge: 'src/components/Badge/index.tsx',
    // tabs: 'src/components/Tabs/index.tsx',
    // menu: 'src/components/Menu/index.tsx',
    // modal: 'src/components/Modal/index.tsx',
    // sidepanel: 'src/components/SidePanel/index.tsx',
    // dropdown: 'src/components/Dropdown/index.tsx',
    // transition: 'src/components/Transition/index.tsx',
    // space: 'src/components/Space/index.tsx',
    // loading: 'src/components/Loading/index.tsx',
    // divider: 'src/components/Divider/index.tsx',
    // select: 'src/components/Select/index.tsx',
    // checkbox: 'src/components/Checkbox/index.tsx',
    // input: 'src/components/Input/index.tsx',
    // radio: 'src/components/Radio/index.tsx',
    // toggle: 'src/components/Toggle/index.tsx',
    // upload: 'src/components/Upload/index.tsx',
    // auth: 'src/components/Auth/index.tsx',

    // iconLoader: 'src/components/Icon/icons/Loader.tsx',
    // iconMail: 'src/components/Icon/icons/Mail.tsx',
    ...icons,
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    './src',
  ],
  output: [
    { dir: 'dist/cjs', format: 'cjs' },
    { dir: 'dist/esm', format: 'esm' },
  ],
  plugins: [
    external(),
    typescript(),
    // so JS can be rolled with TS
    // remove when JS files have been removed
    nodeResolve({
      ignoreGlobal: false,
      include: ['node_modules/**'],
      extensions,
      // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
    }),
    commonjs({
      ignoreGlobal: false,
      include: 'node_modules/**',
    }),
    postcss({
      // plugins: require('./postcss.config').plugins,
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      // modules: true,
      minimize: true,
      sourceMap: false,
      // extract: false,
      minimize: true,
    }),

    // postcss({
    //   extract: true, // extracts to `${basename(dest)}.css`
    //   plugins: [
    //     require('postcss-import'),
    //     require('tailwindcss'),
    //     require('autoprefixer'),
    //   ],
    //   writeDefinitions: true,
    //   // modules: { ... }
    // }),

    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    del({ targets: ['dist/*'] }),
  ],
}
