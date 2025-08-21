import { mainTsxTemplate, appTsxTemplate, counterStoreTemplate } from '../../templates/files/react-files';

describe('mainTsxTemplate', () => {
  it('should have correct path', () => {
    expect(mainTsxTemplate.path).toBe('src/main.tsx');
  });

  it('should import React', () => {
    expect(mainTsxTemplate.content).toContain("import React from 'react'");
  });

  it('should import ReactDOM', () => {
    expect(mainTsxTemplate.content).toContain("import ReactDOM from 'react-dom/client'");
  });

  it('should import BrowserRouter', () => {
    expect(mainTsxTemplate.content).toContain("import { BrowserRouter } from 'react-router-dom'");
  });

  it('should import App component', () => {
    expect(mainTsxTemplate.content).toContain("import App from './App.tsx'");
  });

  it('should use createRoot', () => {
    expect(mainTsxTemplate.content).toContain('ReactDOM.createRoot');
  });

  it('should wrap App in BrowserRouter', () => {
    expect(mainTsxTemplate.content).toContain('<BrowserRouter>');
    expect(mainTsxTemplate.content).toContain('<App />');
  });
});

describe('appTsxTemplate', () => {
  it('should have correct path', () => {
    expect(appTsxTemplate.path).toBe('src/App.tsx');
  });

  it('should import Layout component', () => {
    expect(appTsxTemplate.content).toContain("import { Layout } from './components'");
  });

  it('should import AppRoutes', () => {
    expect(appTsxTemplate.content).toContain("import AppRoutes from './routers'");
  });

  it('should import App.css', () => {
    expect(appTsxTemplate.content).toContain("import './App.css'");
  });

  it('should use Layout component', () => {
    expect(appTsxTemplate.content).toContain('<Layout>');
    expect(appTsxTemplate.content).toContain('</Layout>');
  });

  it('should use AppRoutes component', () => {
    expect(appTsxTemplate.content).toContain('<AppRoutes />');
  });

  it('should export default App', () => {
    expect(appTsxTemplate.content).toContain('export default App');
  });
});

describe('counterStoreTemplate', () => {
  it('should have correct path', () => {
    expect(counterStoreTemplate.path).toBe('src/store/counter.ts');
  });

  it('should import create from zustand', () => {
    expect(counterStoreTemplate.content).toContain("import { create } from 'zustand'");
  });

  it('should define CounterState interface', () => {
    expect(counterStoreTemplate.content).toContain('interface CounterState');
    expect(counterStoreTemplate.content).toContain('count: number');
    expect(counterStoreTemplate.content).toContain('increment: () => void');
    expect(counterStoreTemplate.content).toContain('decrement: () => void');
  });

  it('should export useCounterStore', () => {
    expect(counterStoreTemplate.content).toContain('export const useCounterStore');
  });

  it('should have increment and decrement functions', () => {
    expect(counterStoreTemplate.content).toContain('increment: () => set((state) => ({ count: state.count + 1 }))');
    expect(counterStoreTemplate.content).toContain('decrement: () => set((state) => ({ count: state.count - 1 }))');
  });
});
