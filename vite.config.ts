import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';



export default defineConfig({
  // resolve.alias removed
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'KazeUI',
      fileName: (format) => `kaze.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
