import typescript from '@rollup/plugin-typescript';
import dev from 'rollup-plugin-dev';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: 'src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'MsePlayer'
  },
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    dev({
      port: 3003, // 服务器端口
      silent: true,
      spa: 'example/index.html'
    })
  ]
};
