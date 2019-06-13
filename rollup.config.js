import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input: 'bin/index.js',
  output: {
    file: 'public/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    terser({warnings: true, module: true, mangle: { properties: { regex: /^__/ }}}),
    sourcemaps(),
  ]
};
