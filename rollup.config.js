/*
 * @Author: zasqw2222
 * @Date: 2021-07-13 09:37:27
 * @Description:
 * @FilePath: /antv-g/rollup.config.js
 */

import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import image from '@rollup/plugin-image';

import pack from './package.json';

import { terser } from 'rollup-plugin-terser';

const path = require('path');
export default {
  input: 'src/index.ts',
  output: {
    file: `dist/${pack.name}.js`,
    format: 'umd',
    name: pack.name,
    globals: {
      react: 'react',
      antd: 'antd',
      'react-dom': 'react-dom',
      '@antv/l7': '@antv/l7',
      '@antv/l7-maps': '@antv/l7-maps',
      '@antv/l7-draw': '@antv/l7-draw',
      '@turf/turf': '@turf/turf',
      maptalks: 'maptalks',
      'file-saver': 'file-saver',
      leaflet: 'leaflet',
      html2canvas: 'html2canvas',
      '@mapbox/mapbox-gl-language': '@mapbox/mapbox-gl-language'
    }
  },
  plugins: [
    postcss({
      extensions: ['.less', '.css', '.scss'],
      minimize: true,
      // modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      },
      extract: true,
      plugins: [autoprefixer()]
    }),
    image(),
    typescript(),
    json(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelrc: true,
      runtimeHelpers: true,
      externalHelpers: true
    }),
    commonjs(),

    terser()
  ],
  external: [
    'react',
    'react-dom',
    '@antv/l7',
    '@antv/l7-maps',
    '@antv/l7-draw',
    '@turf/turf',
    'maptalks',
    'file-saver',
    'leaflet',
    '@antv/l7-leaflet',
    'html2canvas',
    '@mapbox/mapbox-gl-language'
  ]
};
