import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const version = require('./package.json').version;
const banner = `/**
* vue-scooter v${version}
* https://github.com/thiled/vue-scooter
*/`;
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
    terser({
      format: {
        comments: /vue-scooter v\d/,
      },
    }),
  ],
};
