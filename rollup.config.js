import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
const version = require('./package.json').version;
const versionStr = `vue-scooter v${version}`;
const banner = `/* ${versionStr} */`;
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-scooter.js',
    format: 'iife',
    name: 'VueScooter',
    banner,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    uglify({
      output: {
        comments: `/${versionStr}/`,
      },
    }),
  ],
};
