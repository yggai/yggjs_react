import { indexCssTemplate, appCssTemplate } from '../../templates/files/styles';

describe('indexCssTemplate', () => {
  it('should have correct path', () => {
    expect(indexCssTemplate.path).toBe('src/index.css');
  });

  it('should define root styles', () => {
    expect(indexCssTemplate.content).toContain(':root {');
  });

  it('should have font family definition', () => {
    expect(indexCssTemplate.content).toContain('font-family: Inter, system-ui');
  });

  it('should have color scheme definition', () => {
    expect(indexCssTemplate.content).toContain('color-scheme: light dark');
  });

  it('should have button styles', () => {
    expect(indexCssTemplate.content).toContain('button {');
    expect(indexCssTemplate.content).toContain('border-radius: 8px');
  });

  it('should have media query for light mode', () => {
    expect(indexCssTemplate.content).toContain('@media (prefers-color-scheme: light)');
  });

  it('should have link styles', () => {
    expect(indexCssTemplate.content).toContain('a {');
    expect(indexCssTemplate.content).toContain('a:hover {');
  });
});

describe('appCssTemplate', () => {
  it('should have correct path', () => {
    expect(appCssTemplate.path).toBe('src/App.css');
  });

  it('should define root container styles', () => {
    expect(appCssTemplate.content).toContain('#root {');
    expect(appCssTemplate.content).toContain('max-width: 1280px');
    expect(appCssTemplate.content).toContain('text-align: center');
  });

  it('should have navigation styles', () => {
    expect(appCssTemplate.content).toContain('nav {');
    expect(appCssTemplate.content).toContain('nav a {');
    expect(appCssTemplate.content).toContain('nav a:hover {');
  });

  it('should have card styles', () => {
    expect(appCssTemplate.content).toContain('.card {');
    expect(appCssTemplate.content).toContain('.card button {');
    expect(appCssTemplate.content).toContain('.card span {');
  });

  it('should have proper spacing and layout', () => {
    expect(appCssTemplate.content).toContain('margin: 0 auto');
    expect(appCssTemplate.content).toContain('padding: 2rem');
  });
});
