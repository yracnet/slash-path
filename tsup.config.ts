import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    external: ['path'],
    dts: true,
    clean: true,
    target: 'node14',
    treeshake: true,
    platform: 'neutral',
  },
]);
