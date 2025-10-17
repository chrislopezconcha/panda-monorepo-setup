import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resolve-react-in-generated',
      resolveId(source, importer) {
        // If react is being imported from the generated folder, resolve it to node_modules
        if (source === 'react' && importer?.includes('/generated/')) {
          return this.resolve('react', path.resolve(__dirname, 'src/App.tsx'), {
            skipSelf: true,
          })
        }
        return null
      },
    },
  ],
  resolve: {
    alias: {
      '@acme/ui-lib': path.resolve(__dirname, '../generated'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /generated/],
    },
  },
})
