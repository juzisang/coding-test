import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const isDev = process.env.NODE_ENV === 'development'

export default {
  input: isDev ? 'src/main.ts' : 'src/lib/index.ts',
  output: isDev
    ? [{ file: 'examples/main.js', sourcemap: true, format: 'iife' }]
    : [
      { file: 'dist/lib.umd.js', name: 'Lib', format: 'umd' },
      { file: 'dist/lib.global.js', name: 'Lib', format: 'iife' },
      { file: 'dist/lib.esm.js', format: 'esm' }
    ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts']
    }),
    postcss({
      extract: 'outline.css',
      extensions: ['scss', 'css'],
      minimize: true,
      plugins: [autoprefixer()]
    })
  ]
}