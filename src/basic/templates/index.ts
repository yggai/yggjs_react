export interface TemplateFile {
  path: string;
  content: string;
}

export interface Template {
  name: string;
  description: string;
  files: TemplateFile[];
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
}

export const basicTemplate: Template = {
  name: 'basic',
  description: 'Vite + React + TypeScript + Zustand + React Router',
  files: [
    {
      path: 'package.json',
      content: JSON.stringify({
        name: 'my-react-app',
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'tsc && vite build',
          lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
          preview: 'vite preview'
        },
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
        }
      }, null, 2)
    },
    {
      path: 'index.html',
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
    },
    {
      path: 'vite.config.ts',
      content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`
    },
    {
      path: 'tsconfig.json',
      content: JSON.stringify({
        compilerOptions: {
          target: 'ES2020',
          useDefineForClassFields: true,
          lib: ['ES2020', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: 'react-jsx',
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noFallthroughCasesInSwitch: true
        },
        include: ['src'],
        references: [{ path: './tsconfig.node.json' }]
      }, null, 2)
    },
    {
      path: 'tsconfig.node.json',
      content: JSON.stringify({
        compilerOptions: {
          composite: true,
          skipLibCheck: true,
          module: 'ESNext',
          moduleResolution: 'bundler',
          allowSyntheticDefaultImports: true
        },
        include: ['vite.config.ts']
      }, null, 2)
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      path: 'src/index.css',
      content: `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
    color: #213547;
  }
}`
    },
    {
      path: 'src/App.css',
      content: `#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

nav {
  margin-bottom: 2rem;
}

nav a {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
}

nav a:hover {
  background-color: #f0f0f0;
}

.card {
  padding: 2em;
}

.card button {
  margin: 0 0.5rem;
}

.card span {
  margin: 0 1rem;
  font-size: 1.2em;
  font-weight: bold;
}`
    }
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
