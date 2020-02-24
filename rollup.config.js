import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";

const compile = (input, file) => ({
  input,
  output: {
    file,
    format: "iife",
    sourcemap: true,
    globals: { apprun: "apprun" }
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: "src/tsconfig.json" }),
    terser({
      warnings: true,
      output: { comments: false }
    }),
    sourcemaps()
  ]
});

export default [
  compile("src/index.tsx", "public/index.js")
];
