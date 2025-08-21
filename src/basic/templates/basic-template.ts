import { Template } from './types';
import {
  packageJsonTemplate,
  htmlTemplate,
  viteConfigTemplate,
  tsconfigTemplate,
  tsconfigNodeTemplate,
  mainTsxTemplate,
  appTsxTemplate,
  counterStoreTemplate,
  indexCssTemplate,
  appCssTemplate,
  npmrcTemplate
} from './files';

/**
 * 基础 React 模板配置
 * 包含 Vite + React + TypeScript + Zustand + React Router
 */
export const basicTemplate: Template = {
  name: 'basic',
  description: 'Vite + React + TypeScript + Zustand + React Router',
  files: [
    packageJsonTemplate,
    npmrcTemplate,
    htmlTemplate,
    viteConfigTemplate,
    tsconfigTemplate,
    tsconfigNodeTemplate,
    mainTsxTemplate,
    appTsxTemplate,
    counterStoreTemplate,
    indexCssTemplate,
    appCssTemplate
  ],
  dependencies: {
    react: '^18.3.1',
    'react-dom': '^18.3.1',
    'react-router-dom': '^6.28.0',
    zustand: '^5.0.1'
  },
  devDependencies: {
    '@types/react': '^18.3.23',
    '@types/react-dom': '^18.3.7',
    '@typescript-eslint/eslint-plugin': '^6.21.0',
    '@typescript-eslint/parser': '^6.21.0',
    '@vitejs/plugin-react': '^4.3.4',
    eslint: '^8.57.1',
    'eslint-plugin-react-hooks': '^4.6.2',
    'eslint-plugin-react-refresh': '^0.4.14',
    typescript: '^5.9.2',
    vite: '^4.5.14'
  },
  scripts: {
    dev: 'vite',
    build: 'tsc && vite build',
    lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
    preview: 'vite preview'
  }
};
