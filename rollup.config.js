import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import path from 'path';

const { root } = path.parse(process.cwd());
const external = (id) => {
  return !id.startsWith('.') && !id.startsWith(root);
};

export default [
  {
    external,
    plugins: [
      esbuild({
        jsx: 'automatic',
      }),
    ],
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    plugins: [dts({})],
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  },
];
