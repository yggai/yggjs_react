import { TemplateFile } from '../types';

/**
 * src/pages/Home.tsx 模板文件
 */
export const homePageTemplate: TemplateFile = {
  path: 'src/pages/Home.tsx',
  content: `import { useCounterStore } from '../store/counter'

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

export default Home`
};

/**
 * src/pages/About.tsx 模板文件
 */
export const aboutPageTemplate: TemplateFile = {
  path: 'src/pages/About.tsx',
  content: `function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a basic React template with Vite, TypeScript, Zustand, and React Router.</p>
    </div>
  )
}

export default About`
};

/**
 * src/pages/index.ts 模板文件 - 页面导出
 */
export const pagesIndexTemplate: TemplateFile = {
  path: 'src/pages/index.ts',
  content: `// 页面组件导出
export { default as Home } from './Home'
export { default as About } from './About'`
};
