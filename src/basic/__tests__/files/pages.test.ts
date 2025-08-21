import { homePageTemplate, aboutPageTemplate, pagesIndexTemplate } from '../../templates/files/pages';

describe('homePageTemplate', () => {
  it('should have correct path', () => {
    expect(homePageTemplate.path).toBe('src/pages/Home.tsx');
  });

  it('should import counter store', () => {
    expect(homePageTemplate.content).toContain("import { useCounterStore } from '../store/counter'");
  });

  it('should use counter store hooks', () => {
    expect(homePageTemplate.content).toContain('const { count, increment, decrement } = useCounterStore()');
  });

  it('should have counter buttons and display', () => {
    expect(homePageTemplate.content).toContain('<button onClick={decrement}>-</button>');
    expect(homePageTemplate.content).toContain('<button onClick={increment}>+</button>');
    expect(homePageTemplate.content).toContain('<span>count is {count}</span>');
  });

  it('should export default Home component', () => {
    expect(homePageTemplate.content).toContain('export default Home');
  });

  it('should have Home Page title', () => {
    expect(homePageTemplate.content).toContain('<h1>Home Page</h1>');
  });
});

describe('aboutPageTemplate', () => {
  it('should have correct path', () => {
    expect(aboutPageTemplate.path).toBe('src/pages/About.tsx');
  });

  it('should have About Page title', () => {
    expect(aboutPageTemplate.content).toContain('<h1>About Page</h1>');
  });

  it('should have description text', () => {
    expect(aboutPageTemplate.content).toContain('This is a basic React template with Vite, TypeScript, Zustand, and React Router.');
  });

  it('should export default About component', () => {
    expect(aboutPageTemplate.content).toContain('export default About');
  });
});

describe('pagesIndexTemplate', () => {
  it('should have correct path', () => {
    expect(pagesIndexTemplate.path).toBe('src/pages/index.ts');
  });

  it('should export Home component', () => {
    expect(pagesIndexTemplate.content).toContain("export { default as Home } from './Home'");
  });

  it('should export About component', () => {
    expect(pagesIndexTemplate.content).toContain("export { default as About } from './About'");
  });

  it('should have helpful comment', () => {
    expect(pagesIndexTemplate.content).toContain('// 页面组件导出');
  });
});
