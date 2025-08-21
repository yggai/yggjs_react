import { packageJsonTemplate } from '../../templates/files/package-json';

describe('packageJsonTemplate', () => {
  it('should have correct path', () => {
    expect(packageJsonTemplate.path).toBe('package.json');
  });

  it('should have valid JSON content', () => {
    expect(() => JSON.parse(packageJsonTemplate.content)).not.toThrow();
  });

  it('should contain correct package metadata', () => {
    const packageJson = JSON.parse(packageJsonTemplate.content);

    expect(packageJson.name).toBe('my-react-app');
    expect(packageJson.type).toBe('module');
    expect(packageJson.private).toBe(true);
    expect(packageJson.version).toBe('0.0.0');
    expect(packageJson.packageManager).toContain('pnpm');
  });

  it('should have required scripts', () => {
    const packageJson = JSON.parse(packageJsonTemplate.content);
    
    expect(packageJson.scripts).toHaveProperty('dev', 'vite');
    expect(packageJson.scripts).toHaveProperty('build', 'tsc && vite build');
    expect(packageJson.scripts).toHaveProperty('preview', 'vite preview');
    expect(packageJson.scripts.lint).toContain('eslint');
  });

  it('should have required dependencies', () => {
    const packageJson = JSON.parse(packageJsonTemplate.content);
    
    expect(packageJson.dependencies).toHaveProperty('react');
    expect(packageJson.dependencies).toHaveProperty('react-dom');
    expect(packageJson.dependencies).toHaveProperty('react-router-dom');
    expect(packageJson.dependencies).toHaveProperty('zustand');
  });

  it('should have required dev dependencies', () => {
    const packageJson = JSON.parse(packageJsonTemplate.content);
    
    expect(packageJson.devDependencies).toHaveProperty('@types/react');
    expect(packageJson.devDependencies).toHaveProperty('@types/react-dom');
    expect(packageJson.devDependencies).toHaveProperty('typescript');
    expect(packageJson.devDependencies).toHaveProperty('vite');
    expect(packageJson.devDependencies).toHaveProperty('@vitejs/plugin-react');
  });

  it('should have pnpm configuration', () => {
    const packageJson = JSON.parse(packageJsonTemplate.content);

    expect(packageJson.pnpm).toBeDefined();
    expect(packageJson.pnpm.registry).toBe('https://registry.npmmirror.com');
  });
});
