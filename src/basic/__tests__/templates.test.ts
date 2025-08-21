import { basicTemplate, Template, TemplateFile } from '../templates';

describe('basicTemplate', () => {
  it('should have correct template metadata', () => {
    expect(basicTemplate.name).toBe('basic');
    expect(basicTemplate.description).toBe('Vite + React + TypeScript + Zustand + React Router');
    expect(basicTemplate.files).toBeInstanceOf(Array);
    expect(basicTemplate.dependencies).toBeInstanceOf(Object);
    expect(basicTemplate.devDependencies).toBeInstanceOf(Object);
    expect(basicTemplate.scripts).toBeInstanceOf(Object);
  });

  it('should include all required files', () => {
    const expectedFiles = [
      'package.json',
      'index.html',
      'vite.config.ts',
      'tsconfig.json',
      'tsconfig.node.json',
      'src/main.tsx',
      'src/App.tsx',
      'src/store/counter.ts',
      'src/index.css',
      'src/App.css'
    ];

    const actualFiles = basicTemplate.files.map(file => file.path);
    
    expectedFiles.forEach(expectedFile => {
      expect(actualFiles).toContain(expectedFile);
    });
  });

  it('should have valid package.json content', () => {
    const packageJsonFile = basicTemplate.files.find(file => file.path === 'package.json');
    expect(packageJsonFile).toBeDefined();
    
    const packageJson = JSON.parse(packageJsonFile!.content);
    expect(packageJson.name).toBe('my-react-app');
    expect(packageJson.type).toBe('module');
    expect(packageJson.scripts).toHaveProperty('dev');
    expect(packageJson.scripts).toHaveProperty('build');
    expect(packageJson.dependencies).toHaveProperty('react');
    expect(packageJson.dependencies).toHaveProperty('react-dom');
    expect(packageJson.dependencies).toHaveProperty('react-router-dom');
    expect(packageJson.dependencies).toHaveProperty('zustand');
  });

  it('should have valid HTML template', () => {
    const htmlFile = basicTemplate.files.find(file => file.path === 'index.html');
    expect(htmlFile).toBeDefined();
    expect(htmlFile!.content).toContain('<!doctype html>');
    expect(htmlFile!.content).toContain('<div id="root"></div>');
    expect(htmlFile!.content).toContain('/src/main.tsx');
  });

  it('should have valid Vite config', () => {
    const viteConfigFile = basicTemplate.files.find(file => file.path === 'vite.config.ts');
    expect(viteConfigFile).toBeDefined();
    expect(viteConfigFile!.content).toContain('import { defineConfig }');
    expect(viteConfigFile!.content).toContain('@vitejs/plugin-react');
  });

  it('should have valid TypeScript configs', () => {
    const tsconfigFile = basicTemplate.files.find(file => file.path === 'tsconfig.json');
    const tsconfigNodeFile = basicTemplate.files.find(file => file.path === 'tsconfig.node.json');
    
    expect(tsconfigFile).toBeDefined();
    expect(tsconfigNodeFile).toBeDefined();
    
    const tsconfig = JSON.parse(tsconfigFile!.content);
    const tsconfigNode = JSON.parse(tsconfigNodeFile!.content);
    
    expect(tsconfig.compilerOptions.jsx).toBe('react-jsx');
    expect(tsconfig.include).toContain('src');
    expect(tsconfigNode.compilerOptions.composite).toBe(true);
  });

  it('should have valid React main entry', () => {
    const mainFile = basicTemplate.files.find(file => file.path === 'src/main.tsx');
    expect(mainFile).toBeDefined();
    expect(mainFile!.content).toContain('import React from');
    expect(mainFile!.content).toContain('ReactDOM.createRoot');
    expect(mainFile!.content).toContain('BrowserRouter');
  });

  it('should have valid App component with routing', () => {
    const appFile = basicTemplate.files.find(file => file.path === 'src/App.tsx');
    expect(appFile).toBeDefined();
    expect(appFile!.content).toContain('Routes');
    expect(appFile!.content).toContain('Route');
    expect(appFile!.content).toContain('Link');
    expect(appFile!.content).toContain('useCounterStore');
  });

  it('should have valid Zustand store', () => {
    const storeFile = basicTemplate.files.find(file => file.path === 'src/store/counter.ts');
    expect(storeFile).toBeDefined();
    expect(storeFile!.content).toContain('import { create }');
    expect(storeFile!.content).toContain('CounterState');
    expect(storeFile!.content).toContain('useCounterStore');
    expect(storeFile!.content).toContain('increment');
    expect(storeFile!.content).toContain('decrement');
  });

  it('should have CSS files', () => {
    const indexCssFile = basicTemplate.files.find(file => file.path === 'src/index.css');
    const appCssFile = basicTemplate.files.find(file => file.path === 'src/App.css');
    
    expect(indexCssFile).toBeDefined();
    expect(appCssFile).toBeDefined();
    expect(indexCssFile!.content).toContain(':root');
    expect(appCssFile!.content).toContain('#root');
  });

  it('should have correct dependencies versions', () => {
    expect(basicTemplate.dependencies.react).toMatch(/^\^18\./);
    expect(basicTemplate.dependencies['react-dom']).toMatch(/^\^18\./);
    expect(basicTemplate.dependencies['react-router-dom']).toMatch(/^\^6\./);
    expect(basicTemplate.dependencies.zustand).toMatch(/^\^5\./);
  });

  it('should have correct dev dependencies', () => {
    expect(basicTemplate.devDependencies['@types/react']).toMatch(/^\^18\./);
    expect(basicTemplate.devDependencies['@types/react-dom']).toMatch(/^\^18\./);
    expect(basicTemplate.devDependencies.typescript).toMatch(/^\^5\./);
    expect(basicTemplate.devDependencies.vite).toMatch(/^\^4\./);
    expect(basicTemplate.devDependencies['@vitejs/plugin-react']).toMatch(/^\^4\./);
  });

  it('should have correct scripts', () => {
    expect(basicTemplate.scripts.dev).toBe('vite');
    expect(basicTemplate.scripts.build).toBe('tsc && vite build');
    expect(basicTemplate.scripts.preview).toBe('vite preview');
    expect(basicTemplate.scripts.lint).toContain('eslint');
  });
});
