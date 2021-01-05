import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript';

// so JS can be rolled with TS
// remove when JS files have been removed
// import nodeResolve from "rollup-plugin-node-resolve";
// import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

console.log('Expected Externals', [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
])

export default {
  input: pkg.source,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    external(),
    typescript(),
    // so JS can be rolled with TS
    // remove when JS files have been removed
    nodeResolve({
      ignoreGlobal: false,
      include: ['node_modules/**'],
      // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
    }),
    commonjs({
      ignoreGlobal: false,
      include: "node_modules/**"
    }),
    postcss({
      plugins: require('./postcss.config').plugins,
      minimize: true,
      sourceMap: 'inline',
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    del({ targets: ['dist/*'] }),
  ]
}
