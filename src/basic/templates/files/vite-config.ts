import { TemplateFile } from '../types';

/**
 * vite.config.ts 模板文件
 */
export const viteConfigTemplate: TemplateFile = {
  path: 'vite.config.ts',
  content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`
};
