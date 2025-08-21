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
  content: `import { Routes, Route, Link } from 'react-router-dom'
import { useCounterStore } from './store/counter'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

function Home() {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div>
      <h1>Home Page</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <span>count is {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a basic React template with Vite, TypeScript, Zustand, and React Router.</p>
    </div>
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
