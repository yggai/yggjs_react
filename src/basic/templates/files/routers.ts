import { TemplateFile } from '../types';

/**
 * src/routers/index.tsx 模板文件 - 路由配置
 */
export const routersIndexTemplate: TemplateFile = {
  path: 'src/routers/index.tsx',
  content: `import { Routes, Route } from 'react-router-dom'
import { Home, About } from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes`
};

/**
 * src/components/Layout.tsx 模板文件 - 布局组件
 */
export const layoutComponentTemplate: TemplateFile = {
  path: 'src/components/Layout.tsx',
  content: `import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout`
};

/**
 * src/components/index.ts 模板文件 - 组件导出
 */
export const componentsIndexTemplate: TemplateFile = {
  path: 'src/components/index.ts',
  content: `// 组件导出
export { default as Layout } from './Layout'`
};
