// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// // import typescript from "rollup-plugin-typescript2";
// import typescript from '@rollup/plugin-typescript';
// import postcss from "rollup-plugin-postcss";
// import pkg from './package.json'

// const packageJson = require("./package.json");

// export default {
//   // input: "src/index.ts",
//   input: pkg.source,
//     external: [
//      ...Object.keys(pkg.peerDependencies || {}),
//      ...Object.keys(pkg.dependencies || {}),
//   ],
//   output: [
//     {
//       file: packageJson.main,
//       format: "cjs",
//       sourcemap: true
//     },
//     {
//       file: packageJson.module,
//       format: "esm",
//       sourcemap: true
//     }
//   ],
//   plugins: [
//     peerDepsExternal(),
//     resolve(),
//     commonjs(),
//     typescript(),
      
//     postcss()
//   ]
// };

import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
// import externals from 'rollup-plugin-node-externals'

// import peerDepsExternal from "rollup-plugin-peer-deps-external";
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
  // external: ['react', 'react-dom'],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  // output: {
  //   file: pkg.main,
  //   name: pkg.name,
  //   format: "cjs",
  // },
  plugins: [
    external(),


    // externals({
    //   // The path(s) to your package.json. Optional.
    //   // Can be a string or an array of strings for monorepos -- see below
    //   packagePath: './package.json',
 
    //   // Make node builtins external. Optional. Default: true
    //   builtins: true,
 
    //   // Make pkg.dependencies external. Optional. Default: false
    //   deps: false,
 
    //   // Make pkg.peerDependencies external. Optional. Default: true
    //   peerDeps: false,
 
    //   // Make pkg.optionalDependencies external. Optional. Default: true
    //   optDeps: true,
 
    //   // Make pkg.devDependencies external. Optional. Default: true
    //   devDeps: true,
 
    //   // Modules to exclude from externals. Optional. Default: none
    //   exclude: [],
 
    //   // Modules to include in externals. Optional. Default: all
    //   include: [],
 
    //   // Deprecated -- see below
    //   except: []
    // }),


    typescript(),
    // typescript({
    //   rollupCommonJSResolveHack: true,
    //   clean: true,
    //   tsconfig: './tsconfig.json',
    // }),
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


// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';

// const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// export default [{
//     input: 'src/consent/consent.tsx',
//     output: {
//         format: "iife",
//         file: "build/consent/consent.js",
//         sourceMap: "inline",
//         name: 'sui.consent'
//     },
//     watch: {
//         include: ['src/consent/consent.tsx', 'src/utils/cookies.ts'],
//         exclude: 'node_modules/**'
//     },
//     plugins: [
//         resolve({
//             mainFields: ['module', 'main', 'jsnext:main', 'browser'],
//             extensions
//         }),
//         commonjs(),
//         babel({
//             exclude: './node_modules/**',
//             extensions,
//         }),
//     ],
// }];