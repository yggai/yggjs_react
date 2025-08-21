import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.spec.ts', 'src/**/*.spec.tsx']
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        cli: resolve(__dirname, 'src/cli.ts'),
        'basic/index': resolve(__dirname, 'src/basic/index.ts')
      },
      name: 'YggjsReact',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'esm.js' : 'js'
        return `${entryName}.${extension}`
      }
    },
    rollupOptions: {
      external: (id) => {
        // 对于CLI入口，不要外部化依赖
        if (id.includes('cli')) {
          return false;
        }
        // 对于其他入口，外部化Node.js内置模块
        return ['path', 'fs', 'os'].includes(id);
      }
    },
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
