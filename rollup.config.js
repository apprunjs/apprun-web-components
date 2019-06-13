import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from "rollup-plugin-node-resolve";

const add = (name, input) => ({
  input,
  output: {
    name,
    dir: "public",
    format: 'umd',
    sourcemap: true,
    globals: {
      apprun: 'apprun'
    }
  },
  external: ['apprun'],
  plugins: [
    nodeResolve(),
    terser({ warnings: true, module: true, mangle: { properties: { regex: /^__/ } } }),
    sourcemaps(),
  ]
})

export default [
  add('apprun-web-components', 'bin/index.js')
]
