import { routersIndexTemplate, layoutComponentTemplate, componentsIndexTemplate } from '../../templates/files/routers';

describe('routersIndexTemplate', () => {
  it('should have correct path', () => {
    expect(routersIndexTemplate.path).toBe('src/routers/index.tsx');
  });

  it('should import React Router components', () => {
    expect(routersIndexTemplate.content).toContain("import { Routes, Route } from 'react-router-dom'");
  });

  it('should import page components', () => {
    expect(routersIndexTemplate.content).toContain("import { Home, About } from '../pages'");
  });

  it('should define routes', () => {
    expect(routersIndexTemplate.content).toContain('<Route path="/" element={<Home />} />');
    expect(routersIndexTemplate.content).toContain('<Route path="/about" element={<About />} />');
  });

  it('should export default AppRoutes', () => {
    expect(routersIndexTemplate.content).toContain('export default AppRoutes');
  });

  it('should wrap routes in Routes component', () => {
    expect(routersIndexTemplate.content).toContain('<Routes>');
    expect(routersIndexTemplate.content).toContain('</Routes>');
  });
});

describe('layoutComponentTemplate', () => {
  it('should have correct path', () => {
    expect(layoutComponentTemplate.path).toBe('src/components/Layout.tsx');
  });

  it('should import React Router Link', () => {
    expect(layoutComponentTemplate.content).toContain("import { Link } from 'react-router-dom'");
  });

  it('should import ReactNode type', () => {
    expect(layoutComponentTemplate.content).toContain("import { ReactNode } from 'react'");
  });

  it('should define LayoutProps interface', () => {
    expect(layoutComponentTemplate.content).toContain('interface LayoutProps');
    expect(layoutComponentTemplate.content).toContain('children: ReactNode');
  });

  it('should have navigation links', () => {
    expect(layoutComponentTemplate.content).toContain('<Link to="/">Home</Link>');
    expect(layoutComponentTemplate.content).toContain('<Link to="/about">About</Link>');
  });

  it('should render children in main element', () => {
    expect(layoutComponentTemplate.content).toContain('<main>');
    expect(layoutComponentTemplate.content).toContain('{children}');
    expect(layoutComponentTemplate.content).toContain('</main>');
  });

  it('should export default Layout', () => {
    expect(layoutComponentTemplate.content).toContain('export default Layout');
  });
});

describe('componentsIndexTemplate', () => {
  it('should have correct path', () => {
    expect(componentsIndexTemplate.path).toBe('src/components/index.ts');
  });

  it('should export Layout component', () => {
    expect(componentsIndexTemplate.content).toContain("export { default as Layout } from './Layout'");
  });

  it('should have helpful comment', () => {
    expect(componentsIndexTemplate.content).toContain('// 组件导出');
  });
});
