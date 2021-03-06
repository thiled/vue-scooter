import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-scooter.js',
    format: 'iife',
    name: 'VueScooter',
  },
  plugins: [nodeResolve(), commonjs()],
};
