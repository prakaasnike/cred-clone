import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'prettier',
      apply: 'serve',
      enforce: 'pre',
      async transform(code, id) {
        if (/\.(jsx|tsx|js|ts|mjs|json)$/.test(id)) {
          const prettier = require('prettier');
          const formattedCode = prettier.format(code, {
            ...prettier.resolveConfig.sync(id),
            filepath: id,
          });
          return {
            code: formattedCode,
            map: null,
          };
        }
      },
    },
  ],
  // Add Prettier plugin
  optimizeDeps: {
    include: ['prettier'],
  },
  // Configure Prettier plugin
  // This will format your code on save
  // using the options from your .prettierrc file
});