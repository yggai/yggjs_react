import { TemplateFile } from '../types';

/**
 * src/main.tsx 模板文件
 */
export const mainTsxTemplate: TemplateFile = {
  path: 'src/main.tsx',
  content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`
};

/**
 * src/App.tsx 模板文件
 */
export const appTsxTemplate: TemplateFile = {
  path: 'src/App.tsx',
  content: `import { Layout } from './components'
import AppRoutes from './routers'
import './App.css'

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

export default App`
};

/**
 * src/store/counter.ts 模板文件
 */
export const counterStoreTemplate: TemplateFile = {
  path: 'src/store/counter.ts',
  content: `import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))`
};
